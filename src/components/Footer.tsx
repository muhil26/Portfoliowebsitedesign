import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Terminal, Heart } from 'lucide-react';
import { personalInfo, socialLinks as socialLinksData } from '../data/portfolio';

const socialLinks = [
  { icon: Github, href: socialLinksData.github, label: 'GitHub' },
  { icon: Linkedin, href: socialLinksData.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: socialLinksData.twitter, label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-cyan-400/30 py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid-dense opacity-10" />
      <div className="scanlines absolute inset-0" />
      
      {/* Animated corner brackets */}
      <motion.div
        className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-cyan-400/30"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-magenta-500/30"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.5,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <motion.div 
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-12 h-12 border-2 border-cyan-400 flex items-center justify-center">
                <Terminal className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-magenta-500" />
            </motion.div>
            <div>
              <div className="text-white font-mono tracking-wider">
                {personalInfo.name.toUpperCase()}
              </div>
              <div className="text-cyan-400 font-mono text-xs">
                {'<'} {personalInfo.tagline} {'>'}
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="group relative w-12 h-12 border-2 border-cyan-400/30 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 relative z-10" />
                
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <div className="text-gray-400 font-mono text-sm flex items-center justify-center gap-2">
              <span>{'<'} Crafted with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-4 h-4 text-magenta-500 fill-magenta-500" />
              </motion.div>
              <span>and cyber dreams {'/>'}</span>
            </div>
            
            <p className="text-gray-600 font-mono text-xs">
              © {new Date().getFullYear()} {personalInfo.name.toUpperCase()} • ALL_RIGHTS_RESERVED
            </p>
          </motion.div>

          {/* System Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-gray-600 font-mono text-xs"
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 bg-cyan-400"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span>SYSTEM_v2.1</span>
            </div>
            <span className="text-cyan-400/30">•</span>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 bg-green-400"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span>STATUS: OPERATIONAL</span>
            </div>
          </motion.div>

          {/* Matrix-style bottom decoration */}
          <div className="flex gap-1 mt-4">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-cyan-400/30"
                animate={{
                  opacity: [0, 1, 0],
                  scaleY: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
