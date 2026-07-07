import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, phone } = portfolioData.personalInfo.socials;

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#6366f1', '#10b981']
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Get EmailJS config from env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Fallback simulation if keys aren't set
    const isMock = !serviceId || serviceId === 'your_service_id' || !templateId || !publicKey;

    if (isMock) {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        triggerConfetti();
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    } else {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setIsSubmitting(false);
        setSubmitStatus('success');
        triggerConfetti();
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        console.error('EmailJS Error:', err);
        setIsSubmitting(false);
        setSubmitStatus('error');
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden dark:bg-dark-bg light:bg-light-bg transition-colors duration-300"
    >
      <div className="absolute top-1/4 right-1/4 translate-x-1/2 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
            07. Connection
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold dark:text-white light:text-slate-900">
            Contact <span className="text-gradient-primary">Me</span>
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h4 className="text-xl sm:text-2xl font-display font-extrabold dark:text-white light:text-slate-900 mb-4">
                Let's discuss your next project or role!
              </h4>
              <p className="dark:text-gray-400 light:text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you have a job opening in QA Engineering or Frontend Development, need assistance testing a web application, or want to collaborate on a full stack project—feel free to drop me a message!
              </p>
            </div>

            {/* Info Items */}
            <div className="space-y-6">
              
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl glass-panel text-primary border border-white/5 shadow-md flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Email Me</h5>
                  <a href={`mailto:${email}`} className="text-sm font-semibold font-mono dark:text-white light:text-slate-800 hover:text-primary transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl glass-panel text-secondary border border-white/5 shadow-md flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Call Me</h5>
                  <a href={`tel:${phone}`} className="text-sm font-semibold font-mono dark:text-white light:text-slate-800 hover:text-secondary transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl glass-panel text-accent border border-white/5 shadow-md flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Location</h5>
                  <p className="text-sm font-semibold dark:text-white light:text-slate-800">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 shadow-glass-dark"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-bold dark:text-gray-400 light:text-slate-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full glass-panel dark:text-white light:text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:border-primary border transition-colors ${
                      errors.name ? 'border-red-500/50' : 'border-white/5'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-mono flex items-center space-x-1">
                      <AlertCircle size={10} className="mr-1 inline" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-bold dark:text-gray-400 light:text-slate-600">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full glass-panel dark:text-white light:text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:border-primary border transition-colors ${
                      errors.email ? 'border-red-500/50' : 'border-white/5'
                    }`}
                    placeholder="johndoe@example.com"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-mono flex items-center space-x-1">
                      <AlertCircle size={10} className="mr-1 inline" />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono font-bold dark:text-gray-400 light:text-slate-600">
                  Subject
                  </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full glass-panel dark:text-white light:text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:border-primary border transition-colors ${
                    errors.subject ? 'border-red-500/50' : 'border-white/5'
                  }`}
                  placeholder="Job Opportunity / Project Collaboration"
                />
                {errors.subject && (
                  <span className="text-[10px] text-red-500 font-mono flex items-center space-x-1">
                    <AlertCircle size={10} className="mr-1 inline" />
                    <span>{errors.subject}</span>
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono font-bold dark:text-gray-400 light:text-slate-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full glass-panel dark:text-white light:text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:border-primary border transition-colors resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/5'
                  }`}
                  placeholder="Hey Vallabh, I would love to talk about..."
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 font-mono flex items-center space-x-1">
                    <AlertCircle size={10} className="mr-1 inline" />
                    <span>{errors.message}</span>
                  </span>
                )}
              </div>

              {/* Status banner */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-3 rounded-xl text-xs sm:text-sm font-semibold">
                  <CheckCircle size={16} />
                  <span>Message sent successfully! Thank you.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-xs sm:text-sm font-semibold">
                  <AlertCircle size={16} />
                  <span>Failed to send. Please try emailing directly.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3.5 px-6 rounded-xl hover:shadow-glow-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
