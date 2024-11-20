import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Github, Linkedin, MapPin, Send, 
  ExternalLink, Check, AlertCircle, Loader
} from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeInput, setActiveInput] = useState(null);

  const contactLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      link: 'https://github.com/Deeraj7',
      username: '@Deeraj7'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      link: 'https://www.linkedin.com/in/deerajthakkilapati/',
      username: 'Deeraj Thakkilapati'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      link: 'mailto:deerajthakkilapati@gmail.com',
      username: 'deerajthakkilapati@gmail.com'
    },
    {
      name: 'Location',
      icon: <MapPin className="w-6 h-6" />,
      username: 'Denton, TX'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formState.name && formState.email && formState.message;
  const maxMessageLength = 500;

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-7xl font-bold mb-20 text-center">
        <span className="block bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-500 via-teal-400 to-purple-500">
          Get In Touch
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section - Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="backdrop-blur-xl bg-gray-800/80 rounded-2xl p-8 border
            border-blue-500/20 hover:border-teal-500/40 transition-all duration-500">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text
              bg-gradient-to-r from-blue-400 to-teal-400 mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Currently seeking opportunities in Data Engineering and Machine Learning. 
              Feel free to reach out for collaborations or just to say hello!
            </p>

            <div className="space-y-4">
              {contactLinks.map((item, index) => (
                item.link ? (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-300
                      p-4 rounded-xl bg-blue-500/5 hover:bg-blue-500/10 
                      border border-blue-500/20 hover:border-teal-500/30
                      transition-all duration-300 group"
                    whileHover={{ x: 8 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="text-teal-400 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm opacity-80">{item.username}</div>
                    </div>
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-70 
                      transition-opacity duration-300" />
                  </motion.a>
                ) : (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 text-gray-300
                      p-4 rounded-xl bg-blue-500/5 border border-blue-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="text-teal-400">{item.icon}</div>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm opacity-80">{item.username}</div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-gray-800/80 rounded-2xl p-8 border
            border-blue-500/20 hover:border-teal-500/40 transition-all duration-500"
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-blue-400 to-teal-400 mb-6">
            Send a Message
          </h3>
          
          <form 
            action="https://formspree.io/f/xldellbp" 
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {['name', 'email'].map((field) => (
              <div key={field} className="relative">
                <label 
                  className={`absolute left-4 transition-all duration-300 ${
                    activeInput === field || formState[field]
                      ? '-top-2 text-xs bg-gray-800 px-2 text-teal-400'
                      : 'top-3 text-gray-400'
                  }`}
                  htmlFor={field}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formState[field]}
                  onChange={handleInputChange}
                  onFocus={() => setActiveInput(field)}
                  onBlur={() => setActiveInput(null)}
                  className="w-full px-4 py-3 rounded-xl bg-blue-500/5 border border-blue-500/20
                    focus:border-teal-500/40 outline-none transition-all duration-300
                    text-white placeholder-transparent"
                  required
                />
              </div>
            ))}

            <div className="relative">
              <label 
                className={`absolute left-4 transition-all duration-300 ${
                  activeInput === 'message' || formState.message
                    ? '-top-2 text-xs bg-gray-800 px-2 text-teal-400'
                    : 'top-3 text-gray-400'
                }`}
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                onFocus={() => setActiveInput('message')}
                onBlur={() => setActiveInput(null)}
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-blue-500/5 border border-blue-500/20
                  focus:border-teal-500/40 outline-none transition-all duration-300
                  text-white placeholder-transparent resize-none"
                maxLength={maxMessageLength}
                required
              />
              <div className="absolute right-2 bottom-2 text-sm text-gray-400">
                {formState.message.length}/{maxMessageLength}
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full flex items-center justify-center space-x-2 px-8 py-3 
                rounded-xl font-semibold transition-all duration-300
                ${isFormValid && !isSubmitting
                  ? 'bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600'
                  : 'bg-gray-600 cursor-not-allowed'}
                transform hover:scale-[1.02]`}
              whileHover={{ scale: isFormValid && !isSubmitting ? 1.02 : 1 }}
              whileTap={{ scale: isFormValid && !isSubmitting ? 0.98 : 1 }}
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>

          <AnimatePresence mode="wait">
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-4 p-4 rounded-xl flex items-center space-x-2
                  ${submitStatus === 'success' 
                    ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to send message. Please try again.</span>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;