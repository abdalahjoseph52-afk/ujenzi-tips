import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-ujenzi-card relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-6">
            {t.contact.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            {t.contact.desc}
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="text-ujenzi-accent"><Phone size={28} /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{t.contact.call}</p>
                <a href="https://wa.me/255764533533" className="text-white font-bold text-lg hover:text-ujenzi-accent transition-colors">
                  +255 764 533 533
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-ujenzi-accent"><Mail size={28} /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{t.contact.email}</p>
                <p className="text-white font-bold text-lg">ujenzitips@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-ujenzi-accent"><MapPin size={28} /></div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{t.contact.location}</p>
                <p className="text-white font-bold text-lg">{t.contact.locText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Form */}
        <div className="bg-ujenzi-dark p-8 md:p-10 border border-white/5 shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-ujenzi-accent"></div>
          <h3 className="text-2xl font-bold text-white mb-6">{t.contact.formTitle}</h3>
          
          <form action="https://formsubmit.co/ujenzitips@gmail.com" method="POST" className="space-y-6">
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-slate-400 uppercase font-bold">{t.contact.form.name}</label>
                <input type="text" name="name" required className="w-full bg-ujenzi-card border border-white/10 p-3 text-white focus:border-ujenzi-accent focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-slate-400 uppercase font-bold">{t.contact.form.phone}</label>
                <input type="tel" name="phone" required className="w-full bg-ujenzi-card border border-white/10 p-3 text-white focus:border-ujenzi-accent focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-slate-400 uppercase font-bold">{t.contact.form.email}</label>
              <input type="email" name="email" required className="w-full bg-ujenzi-card border border-white/10 p-3 text-white focus:border-ujenzi-accent focus:outline-none transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-slate-400 uppercase font-bold">{t.contact.form.service}</label>
              <select name="service" className="w-full bg-ujenzi-card border border-white/10 p-3 text-white focus:border-ujenzi-accent focus:outline-none transition-colors">
                <option>General Consultation</option>
                <option>Site Visit Request</option>
                <option>Advertising / Partnership</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-slate-400 uppercase font-bold">{t.contact.form.msg}</label>
              <textarea name="message" rows="4" className="w-full bg-ujenzi-card border border-white/10 p-3 text-white focus:border-ujenzi-accent focus:outline-none transition-colors resize-none"></textarea>
            </div>

            <Button variant="primary" className="w-full justify-center">{t.contact.form.btn} <Send size={18} /></Button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;