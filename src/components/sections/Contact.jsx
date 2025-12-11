import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import Button from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const toastId = toast.loading('Sending message...');
    try {
      const response = await fetch("https://formsubmit.co/ajax/ujenzitips@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        toast.success('Message sent successfully!', { id: toastId });
        e.target.reset();
      } else {
        toast.error('Something went wrong. Please try again.', { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error('Connection error. Please check your internet.', { id: toastId });
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-ujenzi-accent/10 text-ujenzi-accent text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
            {t.contact.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed text-lg">
            {t.contact.desc}
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-ujenzi-accent group-hover:bg-ujenzi-accent group-hover:text-white transition-colors border border-slate-100"><Phone size={20} /></div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">{t.contact.call}</p>
                <a href="https://wa.me/255764533533" className="text-slate-900 font-bold text-lg hover:text-ujenzi-accent transition-colors">
                  +255 764 533 533
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-ujenzi-accent group-hover:bg-ujenzi-accent group-hover:text-white transition-colors border border-slate-100"><Mail size={20} /></div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">{t.contact.email}</p>
                <p className="text-slate-900 font-bold text-lg">ujenzitips@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-ujenzi-accent group-hover:bg-ujenzi-accent group-hover:text-white transition-colors border border-slate-100"><MapPin size={20} /></div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">{t.contact.location}</p>
                <p className="text-slate-900 font-bold text-lg">{t.contact.locText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Form */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-ujenzi-accent"></div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.contact.formTitle}</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contact from Ujenzi Tips Website" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-slate-500 uppercase font-bold">{t.contact.form.name}</label>
                <input type="text" name="name" required className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg text-slate-900 focus:border-ujenzi-accent focus:ring-1 focus:ring-ujenzi-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-slate-500 uppercase font-bold">{t.contact.form.phone}</label>
                <input type="tel" name="phone" required className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg text-slate-900 focus:border-ujenzi-accent focus:ring-1 focus:ring-ujenzi-accent outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-slate-500 uppercase font-bold">{t.contact.form.email}</label>
              <input type="email" name="email" required className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg text-slate-900 focus:border-ujenzi-accent focus:ring-1 focus:ring-ujenzi-accent outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-slate-500 uppercase font-bold">{t.contact.form.service}</label>
              <select name="service" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg text-slate-900 focus:border-ujenzi-accent focus:ring-1 focus:ring-ujenzi-accent outline-none transition-all cursor-pointer">
                <option>General Consultation</option>
                <option>Site Visit Request</option>
                <option>Advertising / Partnership</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-slate-500 uppercase font-bold">{t.contact.form.msg}</label>
              <textarea name="message" rows="4" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg text-slate-900 focus:border-ujenzi-accent focus:ring-1 focus:ring-ujenzi-accent outline-none transition-all resize-none"></textarea>
            </div>

            <Button variant="primary" className="w-full justify-center rounded-lg">{t.contact.form.btn} <Send size={18} /></Button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;