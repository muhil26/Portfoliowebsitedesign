import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CONTACT', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-6 right-6 text-cyan-400 z-50 w-10 h-10 border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400/10 transition-colors bg-black/80 backdrop-blur-sm"
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Backdrop blur when scrolled - only visible when scrolled */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 right-0 h-24 bg-black/80 backdrop-blur-lg border-b-2 border-cyan-400/30 z-40 pointer-events-none"
        >
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-40 md:hidden bg-black"
      >
        {/* Grid background */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="scanlines absolute inset-0" />
        
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, x: 50 }}
              animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: index * 0.1 }}
              className="group relative text-white hover:text-cyan-400 transition-colors font-mono text-xl"
            >
              <span className="text-cyan-400 mr-2">{'>'}</span>
              {link.name}
              
              {/* Underline effect */}
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-500"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          
          {/* Mobile status */}
          <div className="mt-8 flex items-center gap-2 px-4 py-2 border-2 border-cyan-400/30">
            <motion.div
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-cyan-400 font-mono text-sm">SYSTEM_ACTIVE</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
