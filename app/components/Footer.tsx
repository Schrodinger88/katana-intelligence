export default function Footer() {
    return (
        <footer className="bg-background py-20 border-t border-border-subtle">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    <div className="max-w-sm">
                        <h3 className="font-bold text-2xl tracking-tight text-foreground mb-4">
                            Katana.
                        </h3>
                        <p className="text-foreground/60 leading-relaxed">
                            Engineered logic for the modern enterprise.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Company</h4>
                            <ul className="space-y-3 text-foreground/60">
                                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                            <ul className="space-y-3 text-foreground/60">
                                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center text-sm text-foreground/40 gap-4">
                    <p>© {new Date().getFullYear()} Katana Intelligence Inc.</p>
                    <div className="flex gap-6">
                        <span>San Francisco</span>
                        <span>Tokyo</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
