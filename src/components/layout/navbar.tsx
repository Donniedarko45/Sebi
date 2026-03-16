"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Send, ChevronRight } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { UserMenu } from "@/components/ui/user-menu";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  }, [pathname, isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Research" },
    { href: "/plans", label: "Plans" },
    { href: "/wealth-management", label: "Wealth" },
    { href: "/courses", label: "Learning" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-gray-200 dark:border-gray-800 py-3 shadow-sm" 
          : "bg-white/50 dark:bg-gray-950/30 backdrop-blur-md border-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-500" />
              <Image
                src="/images/Ashwini SD.png"
                alt="Logo"
                width={36}
                height={36}
                className="relative w-8 h-8 sm:w-9 sm:h-9 object-contain grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <span className="text-lg sm:text-xl font-extrabold tracking-tighter text-gray-900 dark:text-white hidden xs:block">
              Ashwini<span className="text-primary -translate-x-px inline-block">SD</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 xxl:px-4 py-2 text-sm font-bold transition-all duration-300 rounded-xl hover:bg-primary/5 group ${
                    isActive 
                      ? "text-primary dark:text-white" 
                      : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-xl z-0 border border-primary/20 dark:border-primary/40"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <ThemeToggle />
            
            <div className="hidden lg:flex items-center gap-2">
              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors px-3 py-2"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/signup"
                    className="h-10 flex items-center px-5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden relative group"
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-all active:scale-95"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[73px] z-40 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-gray-950/20 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="absolute inset-x-4 top-0 bg-white dark:bg-gray-950 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-y-auto p-6 flex flex-col"
            >
              <div className="space-y-6 flex-1">
                {/* Mobile User Section */}
                {isAuthenticated && (
                  <div className="mb-4">
                    <UserMenu variant="inline" />
                  </div>
                )}

                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl text-base font-bold transition-all group ${
                        pathname === link.href
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {link.label}
                      <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${pathname === link.href ? "opacity-100" : "opacity-0"}`} />
                    </Link>
                  ))}
                </div>

                <div className="h-px bg-gray-100 dark:bg-gray-800 my-4" />

                <div className="space-y-4">
                  <a
                    href="https://t.me/tradewithashwinisd6"
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full h-14 rounded-2xl bg-blue-500 text-white font-black shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-95"
                  >
                    <Send className="w-5 h-5" />
                    Join Free Telegram
                  </a>
                </div>
              </div>

              {!isAuthenticated && (
                <div className="grid grid-cols-2 gap-3 pt-6 mt-4">
                  <Link
                    href="/login"
                    className="flex items-center justify-center h-14 rounded-2xl text-sm font-black border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300 transition-all"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center justify-center h-14 rounded-2xl text-sm font-black bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
