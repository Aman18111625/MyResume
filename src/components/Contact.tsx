import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger standard mailto format
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:amangupta326519@gmail.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Address",
      value: "amangupta326519@gmail.com",
      link: "mailto:amangupta326519@gmail.com",
      color: "text-neonPurple bg-neonPurple/5 border-neonPurple/20"
    },
    {
      icon: Phone,
      label: "Mobile Number",
      value: "+91 9166160234",
      link: "tel:+919166160234",
      color: "text-neonCyan bg-neonCyan/5 border-neonCyan/20"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Khairabad, Dist.-Kota, Rajasthan, 326529",
      link: "https://maps.google.com/?q=Khairabad,Kota,Rajasthan",
      color: "text-neonPink bg-neonPink/5 border-neonPink/20"
    }
  ];

  return (
    <div className="space-y-10 max-w-5xl">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">Get In Touch</h2>
        <p className="text-gray-400 font-mono text-sm">Let's collaborate or discuss job opportunities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Contact Info (2 Cols) */}
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">Contact Information</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Feel free to reach out via email or phone. I usually respond within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a 
                  key={idx}
                  href={info.link}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-white/10 hover:bg-white/5 transition-all group"
                >
                  <div className={`p-3 rounded-xl border ${info.color} group-hover:scale-105 transition-transform`}>
                    <Icon size={18} className="stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">{info.label}</span>
                    <span className="text-sm font-semibold text-white tracking-tight">{info.value}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form (3 Cols) */}
        <div className="md:col-span-3">
          <div className="glass-panel p-6 rounded-3xl border border-white/5 space-y-6 relative overflow-hidden">
            {/* Background glow on submit */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-neonPurple/5 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-xl font-bold text-white tracking-tight">Send a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-neonGreen/10 border border-neonGreen/30 flex items-center justify-center text-neonGreen animate-bounce">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-base font-bold text-white">Message Action Triggered!</h4>
                <p className="text-xs text-gray-400 text-center max-w-xs">
                  Your email client has been launched with the details. Thank you for reaching out!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name" 
                    className="w-full bg-darkBg/60 border border-darkBorder rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neonPurple/50 focus:ring-1 focus:ring-neonPurple/30 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email" 
                    className="w-full bg-darkBg/60 border border-darkBorder rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neonPurple/50 focus:ring-1 focus:ring-neonPurple/30 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Type your message here..." 
                    className="w-full bg-darkBg/60 border border-darkBorder rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neonPurple/50 focus:ring-1 focus:ring-neonPurple/30 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-neonPurple to-neonCyan text-white font-semibold text-sm hover:shadow-neon-purple hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
