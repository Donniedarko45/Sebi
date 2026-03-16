import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  TrendingUp,
  Globe,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-gray-400 pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3"
              suppressHydrationWarning
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-linear-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src="/images/Ashwini SD.png"
                  alt="Ashwini SD Logo"
                  width={44}
                  height={44}
                  className="relative w-10 h-10 sm:w-11 sm:h-11 object-contain bg-white/10 p-1 rounded-xl"
                />
              </div>
              <span className="text-white text-xl sm:text-2xl font-black tracking-tighter">
                Ashwini <span className="text-primary">SD</span>
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed max-w-sm text-gray-400">
              Transforming financial futures through SEBI-registered expertise. 
              Objective, data-driven research for the modern trader. 
              We filter the noise, you focus on the profit.
            </p>

            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold text-lg">Ecosystem</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Research Services", href: "/services" },
                { label: "Learning Center", href: "/courses" },
                { label: "Investment Plans", href: "/plans" },
                { label: "Market Methodology", href: "/methodology" },
                { label: "Resource Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="h-px w-0 bg-primary group-hover:w-3 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support/Legal */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-lg">Governance</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Regulatory Disclosures", href: "/disclosures" },
                { label: "Investor Charter", href: "/charter" },
                { label: "Grievance Redressal", href: "/complaints" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Protocol", href: "/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 opacity-50" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-lg">Connect</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="leading-snug">
                  Financial District, Mumbai,<br />Maharashtra 400001
                </span>
              </div>
              
              <a 
                href="mailto:support@ashwinisd.com" 
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">support@ashwinisd.com</span>
              </a>

              <a 
                href="https://t.me/tradewithashwinisd6" 
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 w-full justify-center group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Join Free Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-primary" />
                SEBI Registration Details
              </div>
              <p className="text-xs leading-relaxed text-gray-500">
                Registered Research Analyst: Ashwini SD <br />
                Registration No: INH000000000 (Sample Registration) <br />
                Registration Date: Jan 12, 2024
              </p>
            </div>
            
            <div className="bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h5 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Statutory Disclaimer
              </h5>
              <p className="text-[10px] uppercase tracking-wider leading-relaxed text-gray-500">
                Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are for illustration only and are not recommendatory.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] sm:text-xs font-medium text-gray-600 border-t border-white/5 pt-8">
            <div className="flex items-center gap-2 text-center md:text-left">
              <Globe className="w-4 h-4 shrink-0" />
              <span>&copy; {currentYear} Ashwini SD. Built for disciplined traders.</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

