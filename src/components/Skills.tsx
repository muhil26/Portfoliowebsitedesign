import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { skills as skillCategories } from '../data/portfolio';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="scanlines absolute inset-0" />
      
      {/* Animated corner elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border-2 border-cyan-400/30" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border-2 border-magenta-500/30" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-magenta-500" />
            <h2 className="text-white font-mono tracking-widest neon-text-magenta">
              SKILL_MATRIX
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-magenta-500" />
          </div>
          <p className="text-gray-400 font-mono text-sm mb-6">
            {'// '} Advanced capabilities and technical proficiencies
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-400 max-w-md mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Card glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded opacity-0 group-hover:opacity-20 blur transition duration-500" />
              
              <div className="relative bg-black border-2 border-cyan-400/30 p-8 group-hover:border-magenta-500/50 transition-all duration-300">
                {/* Header */}
                <div className="mb-8 pb-4 border-b border-cyan-400/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-cyan-400 font-mono group-hover:text-magenta-400 transition-colors">
                      {category.category}
                    </h3>
                    <span className="text-gray-500 font-mono text-xs">[SYS_{categoryIndex + 1}]</span>
                  </div>
                  <div className="h-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent" />
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-mono text-sm flex items-center gap-2">
                          <span className="text-cyan-400">{'>'}</span>
                          {skill.name}
                        </span>
                        <span className="text-magenta-400 font-mono text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress bar container */}
                      <div className="relative h-2 bg-gray-900 border border-cyan-400/20 overflow-hidden">
                        {/* Animated progress bar */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.15,
                            ease: "easeOut"
                          }}
                          className="relative h-full bg-gradient-to-r from-cyan-400 to-magenta-500"
                        >
                          {/* Scanning effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.15,
                            }}
                          />
                        </motion.div>
                        
                        {/* Grid overlay */}
                        <div className="absolute inset-0 opacity-20" 
                          style={{
                            backgroundImage: 'repeating-linear-gradient(90deg, cyan 0, cyan 1px, transparent 1px, transparent 4px)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom accent */}
                <div className="mt-6 pt-4 border-t border-cyan-400/20">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-cyan-400"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-cyan-400 font-mono text-xs">
                      EXP: {category.experience}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 font-mono text-xs">
            [SYSTEM_ANALYSIS_COMPLETE] • ALL_SYSTEMS_OPERATIONAL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
