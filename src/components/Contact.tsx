import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Wifi, CheckCircle, XCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from 'sonner@2.0.3';

import { personalInfo } from '../data/portfolio';

const contactInfo = [
  {
    icon: Mail,
    title: 'EMAIL',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    title: 'PHONE NO.',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
  },
  {
    icon: MapPin,
    title: 'ADDRESS',
    value: personalInfo.location,
    href: '#',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-cacdd5e4/send-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error('Server error response:', result);
        throw new Error(result.error || 'Failed to send message');
      }

      // Success
      setSubmitStatus('success');
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      console.log('Email sent successfully:', result);
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Full error object:', JSON.stringify(error, null, 2));
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSending(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="scanlines absolute inset-0" />
      
      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,100 L200,100 L200,300 L400,300"
          stroke="url(#cyan-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M800,100 L600,100 L600,400 L400,400"
          stroke="url(#magenta-gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <defs>
          <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(0, 255, 255, 1)" />
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
          </linearGradient>
          <linearGradient id="magenta-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 0, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 0, 255, 1)" />
            <stop offset="100%" stopColor="rgba(255, 0, 255, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Wifi className="w-6 h-6 text-cyan-400" />
            <h2 className="text-white font-mono tracking-widest neon-text-cyan">
              ESTABLISH_CONNECTION
            </h2>
            <Wifi className="w-6 h-6 text-magenta-500" />
          </div>
          <p className="text-gray-400 font-mono text-sm mb-6">
            {'// '} Initiating communication protocol...
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-400 max-w-2xl mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white font-mono mb-6 flex items-center gap-2">
                <span className="text-cyan-400">{'>'}</span>
                CONTACT_CHANNELS
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="group flex items-center gap-4 p-4 bg-black border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-magenta-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    
                    <motion.div 
                      className="relative w-12 h-12 border-2 border-cyan-400 flex items-center justify-center group-hover:border-magenta-500 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="w-6 h-6 text-cyan-400 group-hover:text-magenta-500 transition-colors" />
                    </motion.div>
                    <div className="relative">
                      <p className="text-gray-500 font-mono text-xs">{info.title}</p>
                      <p className="text-white font-mono text-sm">{info.value}</p>
                    </div>
                    
                    {/* Connection indicator */}
                    <div className="relative ml-auto flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-4 bg-cyan-400"
                          animate={{
                            height: ['16px', '8px', '16px'],
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Info box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative border-2 border-cyan-400/30 p-6"
            >
              <div className="absolute -top-3 left-4 bg-black px-2">
                <span className="text-cyan-400 font-mono text-sm">[NOTICE]</span>
              </div>
              <h4 className="text-white font-mono mb-3">RESPONSE_TIME</h4>
              <p className="text-gray-400 font-mono text-sm leading-relaxed mb-4">
                {personalInfo.responseMessage}
              </p>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
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
                ONLINE
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative border-2 border-cyan-400 p-8 bg-black"
            style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 30px rgba(0, 255, 255, 0.05)' }}
          >
            {/* Form header */}
            <div className="absolute -top-3 left-4 bg-black px-2">
              <span className="text-cyan-400 font-mono text-sm neon-text-cyan">[MESSAGE_FORM]</span>
            </div>

            {/* Purpose description */}
            <p className="text-gray-400 font-mono text-xs mb-6 pb-4 border-b border-cyan-400/20">
              {'// '} Send me a direct message. Your email will be delivered to my inbox instantly.
            </p>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-cyan-400 font-mono text-sm mb-2">
                  <span className="text-cyan-400">{'> '}</span>NAME_INPUT
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border-2 border-cyan-400/50 text-white font-mono placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-cyan-400 font-mono text-sm mb-2">
                  <span className="text-cyan-400">{'> '}</span>EMAIL_ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border-2 border-cyan-400/50 text-white font-mono placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-cyan-400 font-mono text-sm mb-2">
                  <span className="text-cyan-400">{'> '}</span>MESSAGE_CONTENT
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-black border-2 border-cyan-400/50 text-white font-mono placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all resize-none"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-mono overflow-hidden transition-all duration-300 hover:text-black disabled:opacity-50"
                style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSending ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      SEND_MESSAGE
                    </>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-cyan-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.button>

              {/* Form footer */}
              <div className="pt-4 border-t border-cyan-400/20">
                <p className="text-gray-600 font-mono text-xs text-center">
                  [ENCRYPTED_CONNECTION] • SECURE_TRANSMISSION
                </p>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
