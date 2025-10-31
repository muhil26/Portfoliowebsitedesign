import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import { projects } from '../data/portfolio';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20" />
      <div className="scanlines absolute inset-0" />
      
      {/* Floating hexagons */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 border border-cyan-400/10"
          style={{
            left: `${20 + i * 20}%`,
            top: `${10 + (i % 2) * 30}%`,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <h2 className="text-white font-mono tracking-widest neon-text-cyan">
              PROJECT_DATABASE
            </h2>
            <Terminal className="w-6 h-6 text-magenta-500" />
          </div>
          <p className="text-gray-400 font-mono text-sm mb-6">
            {'// '} Featured work from the digital frontier
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-magenta-500 to-transparent max-w-2xl mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="group relative"
            >
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded opacity-0 group-hover:opacity-30 blur transition duration-500" />
              
              <div className="relative bg-black border-2 border-cyan-400/30 overflow-hidden group-hover:border-magenta-500 transition-all duration-300">
                {/* Image section */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ filter: 'contrast(1.2) saturate(1.3)' }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Status badge */}
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1 border border-cyan-400 bg-black/80 backdrop-blur-sm"
                    animate={{
                      boxShadow: [
                        '0 0 5px rgba(0, 255, 255, 0.5)',
                        '0 0 20px rgba(0, 255, 255, 0.8)',
                        '0 0 5px rgba(0, 255, 255, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <span className="text-cyan-400 font-mono text-xs flex items-center gap-2">
                      <span 
                        className={`w-2 h-2 rounded-full ${
                          project.status === 'PRODUCTION' ? 'bg-green-400' :
                          project.status === 'IN_DEVELOPMENT' ? 'bg-yellow-400' :
                          'bg-blue-400'
                        } animate-pulse`}
                      />
                      {project.status}
                    </span>
                  </motion.div>
                  
                  {/* Year badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm border border-magenta-500/50">
                    <span className="text-magenta-400 font-mono text-xs">{project.year}</span>
                  </div>

                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-mono group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-gray-600 font-mono text-xs whitespace-nowrap ml-2">
                      [0{index + 1}]
                    </span>
                  </div>
                  
                  <p className="text-gray-400 font-mono text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project metadata */}
                  <div className="mb-4 pb-4 border-b border-cyan-400/20">
                    <div className="flex items-center gap-2 text-gray-500 font-mono text-xs">
                      <span className="text-cyan-400">{'>'}</span>
                      <span>Complexity: {project.complexity}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-cyan-400/10 text-cyan-400 font-mono text-xs border border-cyan-400/30 hover:border-cyan-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4 pt-4 border-t border-cyan-400/20">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm group/link"
                    >
                      <Github className="w-4 h-4" />
                      <span className="group-hover/link:translate-x-1 transition-transform">CODE</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-400 hover:text-magenta-400 transition-colors font-mono text-sm group/link"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="group-hover/link:translate-x-1 transition-transform">DEMO</span>
                    </a>
                  </div>
                </div>

                {/* Scanning line effect */}
                <motion.div
                  className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    top: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 font-mono text-sm mb-4">
            {'// '} More projects loading...
          </p>
          <div className="flex gap-2 justify-center">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-cyan-400"
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1.2, 0.8],
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
      </div>
    </section>
  );
}
