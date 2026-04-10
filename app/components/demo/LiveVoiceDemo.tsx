"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Phone, PhoneOff } from "lucide-react";

type VoiceLine = {
  id: string;
  speaker: "you" | "ai" | "system";
  text: string;
};

type VoiceSessionResponse = {
  client_secret?: {
    value: string;
    expires_at: number;
  };
  model?: string;
  error?: string;
};

export default function LiveVoiceDemo() {
  const [callState, setCallState] = useState<
    "idle" | "connecting" | "connected" | "error"
  >("idle");
  const [transcript, setTranscript] = useState<VoiceLine[]>([
    {
      id: "voice-intro",
      speaker: "system",
      text: "Start the voice agent, allow microphone access, then speak in English or French.",
    },
  ]);
  const [error, setError] = useState<string | null>(null);

  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
  const dataChannelRef = useRef<RTCDataChannel | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  function appendLine(line: VoiceLine) {
    setTranscript((current) => {
      const alreadyExists = current.some(
        (entry) =>
          entry.speaker === line.speaker &&
          entry.text === line.text &&
          entry.id === line.id
      );

      if (alreadyExists) {
        return current;
      }

      return [...current, line];
    });
  }

  function endCall(nextState: "idle" | "error" = "idle") {
    dataChannelRef.current?.close();
    dataChannelRef.current = null;

    peerConnectionRef.current?.close();
    peerConnectionRef.current = null;

    localStreamRef.current?.getTracks().forEach((track) => track.stop());
    localStreamRef.current = null;

    if (audioElementRef.current) {
      audioElementRef.current.srcObject = null;
    }

    setCallState(nextState);
  }

  useEffect(() => {
    return () => {
      endCall();
    };
  }, []);

  async function startCall() {
    if (callState === "connecting" || callState === "connected") {
      return;
    }

    setError(null);
    setTranscript([
      {
        id: "voice-status",
        speaker: "system",
        text: "Connecting to the live voice agent...",
      },
    ]);
    setCallState("connecting");

    try {
      const sessionResponse = await fetch("/api/demo/voice", {
        method: "POST",
      });

      const session = (await sessionResponse.json()) as VoiceSessionResponse;

      if (!sessionResponse.ok || !session.client_secret?.value) {
        throw new Error(session.error ?? "Could not create a voice session.");
      }

      const peerConnection = new RTCPeerConnection();
      peerConnectionRef.current = peerConnection;

      const remoteAudio = new Audio();
      remoteAudio.autoplay = true;
      audioElementRef.current = remoteAudio;

      peerConnection.ontrack = (event) => {
        remoteAudio.srcObject = event.streams[0];
      };

      const localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      localStreamRef.current = localStream;
      localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream);
      });

      const dataChannel = peerConnection.createDataChannel("oai-events");
      dataChannelRef.current = dataChannel;

      dataChannel.addEventListener("message", (event) => {
        const payload = JSON.parse(event.data) as {
          type?: string;
          event_id?: string;
          transcript?: string;
          error?: { message?: string };
        };

        if (
          payload.type ===
            "conversation.item.input_audio_transcription.completed" &&
          payload.transcript
        ) {
          appendLine({
            id: payload.event_id ?? `user-${payload.transcript}`,
            speaker: "you",
            text: payload.transcript,
          });
        }

        if (
          payload.type === "response.output_audio_transcript.done" &&
          payload.transcript
        ) {
          appendLine({
            id: payload.event_id ?? `ai-${payload.transcript}`,
            speaker: "ai",
            text: payload.transcript,
          });
        }

        if (payload.type === "error") {
          const message =
            payload.error?.message ?? "The voice agent returned an error.";
          setError(message);
          endCall("error");
        }
      });

      dataChannel.addEventListener("open", () => {
        setTranscript([
          {
            id: "voice-live",
            speaker: "system",
            text: "Voice agent connected. Say hello, describe your business, or ask about pricing.",
          },
        ]);
        setCallState("connected");

        dataChannel.send(
          JSON.stringify({
            type: "response.create",
            response: {
              instructions:
                "Greet the visitor briefly and let them know you can help in English or French.",
            },
          })
        );
      });

      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      const sdpResponse = await fetch(
        `https://api.openai.com/v1/realtime?model=${
          session.model ?? "gpt-realtime"
        }`,
        {
          method: "POST",
          body: offer.sdp,
          headers: {
            Authorization: `Bearer ${session.client_secret.value}`,
            "Content-Type": "application/sdp",
          },
        }
      );

      const answer = await sdpResponse.text();

      if (!sdpResponse.ok) {
        throw new Error(answer || "Could not complete the voice handshake.");
      }

      await peerConnection.setRemoteDescription({
        type: "answer",
        sdp: answer,
      });
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Could not start the voice agent.";

      setError(message);
      endCall("error");
    }
  }

  return (
    <div className="flex h-[420px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
        <Phone className="h-3.5 w-3.5 text-foreground/45" />
        <span className="text-sm font-medium text-foreground/70">
          Katana Voice Agent
        </span>
        <span
          className={`ml-auto rounded-full px-2 py-0.5 text-[10px] ${
            callState === "connected"
              ? "bg-green-500/10 text-green-400"
              : callState === "connecting"
                ? "bg-yellow-500/10 text-yellow-400"
                : callState === "error"
                  ? "bg-red-500/10 text-red-400"
                  : "text-foreground/30"
          }`}
        >
          {callState === "idle"
            ? "Ready"
            : callState === "connecting"
              ? "Connecting"
              : callState === "connected"
                ? "Live"
                : "Error"}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4 flex items-center justify-center">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full ${
              callState === "connected"
                ? "bg-green-500/15"
                : "bg-white/6"
            }`}
          >
            {callState === "connected" ? (
              <Mic className="h-7 w-7 text-green-400" />
            ) : (
              <Phone className="h-7 w-7 text-foreground/45" />
            )}
          </div>
        </div>

        <div className="space-y-3">
          {transcript.map((line) => (
            <div
              key={line.id}
              className={`flex ${
                line.speaker === "ai"
                  ? "justify-start"
                  : line.speaker === "you"
                    ? "justify-end"
                    : "justify-center"
              }`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm ${
                  line.speaker === "ai"
                    ? "rounded-bl-sm bg-white/10 text-foreground/82"
                    : line.speaker === "you"
                      ? "rounded-br-sm bg-primary/20 text-foreground/82"
                      : "bg-transparent text-center text-foreground/45"
                }`}
              >
                {line.text}
              </div>
            </div>
          ))}
        </div>

        {error ? <p className="mt-4 text-sm text-red-400/90">{error}</p> : null}
      </div>

      <div className="border-t border-white/8 p-3">
        {callState === "connected" ? (
          <button
            type="button"
            onClick={() => endCall()}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-red-500/15 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20"
          >
            <PhoneOff className="h-4 w-4" />
            End call
          </button>
        ) : (
          <button
            type="button"
            onClick={startCall}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-green-500/15 text-sm font-medium text-green-400 transition-colors hover:bg-green-500/20"
          >
            <Phone className="h-4 w-4" />
            Start live voice demo
          </button>
        )}
      </div>
    </div>
  );
}
