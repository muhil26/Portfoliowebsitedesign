import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Terminal, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';

export function Hero() {
  const [showReactor, setShowReactor] = useState(true);
  const [showName, setShowName] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [glitchIntensity, setGlitchIntensity] = useState('glitch-text');
  const [currentTime, setCurrentTime] = useState(new Date());
  const fullText = personalInfo.name.toUpperCase();

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    // Show reactor for 2 seconds, then energy surge and name
    const reactorTimer = setTimeout(() => {
      setShowReactor(false);
      setTimeout(() => {
        setShowName(true);
      }, 800); // Delay for energy surge animation
    }, 2000);

    return () => clearTimeout(reactorTimer);
  }, []);

  useEffect(() => {
    if (showName) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      
      return () => clearInterval(timer);
    }
  }, [showName]);

  useEffect(() => {
    if (showName && displayText === fullText) {
      // Gradually reduce glitch intensity
      const timers = [
        setTimeout(() => setGlitchIntensity('glitch-text'), 1000), // Full glitch for 1s
        setTimeout(() => setGlitchIntensity('glitch-medium'), 3000), // Medium at 3s
        setTimeout(() => setGlitchIntensity('glitch-light'), 5000), // Light at 5s
        setTimeout(() => setGlitchIntensity('glitch-subtle'), 7000), // Subtle at 7s
      ];
      
      return () => timers.forEach(clearTimeout);
    }
  }, [showName, displayText, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyber-grid opacity-40" />
      
      {/* Scanlines effect */}
      <div className="scanlines absolute inset-0" />
      
      {/* Dynamic background particles - moved to sides */}
      <motion.div
        className="absolute left-10 top-1/4 w-64 h-64"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border border-cyan-400/20 rounded-full" />
        <div className="absolute inset-8 border border-cyan-400/30 rounded-full" />
      </motion.div>
      
      <motion.div
        className="absolute right-10 bottom-1/4 w-64 h-64"
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border border-magenta-500/20 rounded-full" />
        <div className="absolute inset-8 border border-magenta-500/30 rounded-full" />
      </motion.div>

      {/* Floating tech elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <AnimatePresence mode="wait">
            {showReactor && (
              <motion.div
                key="reactor"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                {/* Arc Reactor Core */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                  {/* Outer rings */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border-2 border-cyan-400"
                      style={{
                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.3)',
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.8, 0, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                      }}
                    />
                  ))}
                  
                  {/* Core */}
                  <motion.div
                    className="w-24 h-24 rounded-full bg-cyan-400 arc-reactor-core relative"
                    style={{
                      boxShadow: `
                        0 0 30px rgba(0, 255, 255, 1),
                        0 0 60px rgba(0, 255, 255, 0.8),
                        0 0 90px rgba(0, 255, 255, 0.6),
                        inset 0 0 30px rgba(0, 255, 255, 0.8)
                      `,
                    }}
                  >
                    {/* Inner core detail */}
                    <div className="absolute inset-4 rounded-full bg-white"
                      style={{
                        boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 1)',
                      }}
                    />
                  </motion.div>
                  
                  {/* Energy particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [0, Math.cos((i * Math.PI * 2) / 8) * 80],
                        y: [0, Math.sin((i * Math.PI * 2) / 8) * 80],
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {!showReactor && !showName && (
              <motion.div
                key="surge"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 15, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-48 h-48 mx-auto rounded-full bg-cyan-400"
                style={{
                  boxShadow: '0 0 100px rgba(0, 255, 255, 1)',
                  filter: 'blur(20px)',
                }}
              />
            )}

            {showName && (
              <motion.div
                key="content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Terminal-style header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex items-center justify-center gap-2 mb-12"
                >
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-mono">PORTFOLIO_SYSTEM_V2.1</span>
                </motion.div>

                {/* Main name with glitch effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mb-8"
                >
                  <h1 
                    className={`text-white font-mono tracking-wider neon-text-cyan mb-4 relative ${glitchIntensity}`}
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
                    data-text={displayText}
                  >
                    <span className="relative inline-block">
                      {displayText}
                      {displayText.length === fullText.length && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="text-cyan-400"
                        >
                          _
                        </motion.span>
                      )}
                    </span>
                  </h1>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent max-w-3xl mx-auto"
                  />
                </motion.div>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="mb-16 text-center"
                >
                  <p className="text-magenta-400 font-mono tracking-widest mb-2">
                    {'<'} CREATIVE DEVELOPER {'>'}
                  </p>
                  <p className="text-gray-400 font-mono text-sm">
                    // Crafting digital experiences in the neon-lit future
                  </p>
                </motion.div>

                {/* CTA Buttons - Centered */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2 }}
                  className="flex gap-4 justify-center items-center flex-wrap w-full"
                >
                  <a
                    href="#projects"
                    className="group relative px-8 py-4 font-mono bg-transparent border-2 border-cyan-400 text-cyan-400 overflow-hidden transition-all duration-300 hover:text-black w-[200px] text-center"
                  >
                    <span className="relative z-10">EXPLORE_WORK</span>
                    <motion.div
                      className="absolute inset-0 bg-cyan-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </a>
                  
                  <a
                    href="#contact"
                    className="group relative px-8 py-4 font-mono bg-transparent border-2 border-magenta-500 text-magenta-500 overflow-hidden transition-all duration-300 hover:text-black w-[200px] text-center"
                  >
                    <span className="relative z-10">CONNECT</span>
                    <motion.div
                      className="absolute inset-0 bg-magenta-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </a>
                  
                  <a
                    href={personalInfo.resumeUrl}
                    download="Muhilan_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 font-mono bg-gradient-to-r from-cyan-400/10 to-magenta-500/10 border-2 border-cyan-400/50 border-r-magenta-500/50 text-white overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:border-r-magenta-500 flex items-center justify-center gap-2 w-[200px] ml-16"
                  >
                    <Download className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
                    <span className="relative z-10">RESUME</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll indicator */}
      {showName && (
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-400 hover:text-magenta-500 transition-colors group"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-mono text-xs tracking-widest">SCROLL</span>
            <ChevronDown className="w-6 h-6 group-hover:animate-pulse mx-auto" />
          </motion.div>
        </motion.a>
      )}

      {/* Top left branding and status */}
      {showName && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="fixed top-6 left-6 flex items-center gap-6 z-50"
          >
            {/* Logo and brand */}
            <div className="flex items-center gap-3 group">
              <motion.div 
                className="relative"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-10 h-10 border-2 border-cyan-400 flex items-center justify-center group-hover:border-magenta-500 transition-colors">
                  <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-magenta-500 transition-colors" />
                </div>
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400 group-hover:bg-magenta-500 transition-colors" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400 group-hover:bg-magenta-500 transition-colors" />
              </motion.div>
              <span className="text-white font-mono tracking-wider">
                <span className="text-cyan-400 group-hover:text-magenta-500 transition-colors">MUHILAN</span>
                <span className="text-gray-600">.dev</span>
              </span>
            </div>

            {/* Separator */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />

            {/* Available for opportunities */}
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  boxShadow: ['0 0 5px rgba(74, 222, 128, 0.5)', '0 0 15px rgba(74, 222, 128, 0.8)', '0 0 5px rgba(74, 222, 128, 0.5)'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="text-cyan-400 font-mono text-xs opacity-70">
                AVAILABLE_FOR_OPPORTUNITIES
              </span>
            </div>
          </motion.div>

          {/* Navigation and status - top right */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="fixed top-6 right-0 flex items-center gap-2 z-50 pr-2"
          >
            {/* Time display */}
            <div className="text-magenta-500 font-mono text-xs opacity-70 hidden md:block">
              {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })} UTC+5:30
            </div>

            {/* Navigation links */}
            <div className="hidden md:flex items-center gap-0.5">
              {[
                { name: 'HOME', href: '#home' },
                { name: 'ABOUT', href: '#about' },
                { name: 'SKILLS', href: '#skills' },
                { name: 'PROJECTS', href: '#projects' },
                { name: 'CONTACT', href: '#contact' },
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 2.5 + index * 0.1 }}
                  className="group relative px-3 py-1.5 text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm"
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 border-l-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Animated dots */}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100"
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 bg-cyan-400"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.a>
              ))}
            </div>
              
            {/* Status indicator - rightmost */}
            <div className="ml-2 flex items-center gap-1.5 px-2 py-1 border border-cyan-400/30 bg-cyan-400/5">
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
              <span className="text-cyan-400 font-mono text-sm">ONLINE</span>
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
}
