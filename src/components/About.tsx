import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Cpu, Zap } from 'lucide-react';
import { personalInfo, aboutFeatures } from '../data/portfolio';

// Map feature icons
const iconMap = {
  'SOFTWARE_ARCHITECT': Code2,
  'CHIP_DESIGNER': Cpu,
  'HARDWARE_ENTHUSIAST': Zap,
};

const features = aboutFeatures.map(feature => ({
  ...feature,
  icon: iconMap[feature.title as keyof typeof iconMap] || Code2,
}));

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20" />
      <div className="scanlines absolute inset-0" />
      
      {/* Animated side panels */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-magenta-500 to-transparent"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.5,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <h2 className="text-white font-mono tracking-widest neon-text-cyan">
              BEYOND_CODE
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <p className="text-gray-400 font-mono text-sm">{'// '} Loading profile data...</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src="https://images.unsplash.com/photo-1686195165991-74af7c2918d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBwcm9jZXNzb3IlMjBjbG9zZXVwfGVufDF8fHx8MTc2MTkxOTk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Microprocessor Closeup"
                className="relative w-full h-auto object-cover border-2 border-cyan-400"
                style={{ filter: 'contrast(1.2) saturate(1.3)' }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-magenta-500/10 rounded-lg pointer-events-none" />
            </div>
            {/* Corner brackets with animation */}
            <motion.div 
              className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-magenta-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-magenta-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-400"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="border-l-2 border-cyan-400 pl-6">
              <h3 className="text-white font-mono mb-4">
                <span className="text-magenta-400">{'> '}</span>
                {personalInfo.tagline}
              </h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed mb-4">
                {personalInfo.bio.intro}
              </p>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                {personalInfo.bio.extended}
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {personalInfo.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="border border-cyan-400/30 p-4 text-center bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors"
                >
                  <div className="text-cyan-400 font-mono mb-1">{stat.value}</div>
                  <div className="text-gray-500 font-mono text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded opacity-0 group-hover:opacity-20 blur transition duration-500" />
              
              <div className="relative bg-black border border-cyan-400/30 p-8 hover:border-cyan-400 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="w-14 h-14 border-2 border-cyan-400 flex items-center justify-center relative group-hover:border-magenta-500 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-7 h-7 text-cyan-400 group-hover:text-magenta-500 transition-colors" />
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-400 group-hover:bg-magenta-500 transition-colors" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 group-hover:bg-magenta-500 transition-colors" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 group-hover:bg-magenta-500 transition-colors" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400 group-hover:bg-magenta-500 transition-colors" />
                  </motion.div>
                  <span className="text-cyan-400 font-mono text-xs opacity-50">[0{index + 1}]</span>
                </div>
                <h4 className="text-white font-mono mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
