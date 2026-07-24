import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, MapPin, Mail, Phone, ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { FAQ_ITEMS } from '../data/biographyData';

type FormPurpose = 'Speaking' | 'Volunteer' | 'Consultation' | 'Collaboration';

export const ContactSection: React.FC = () => {
  const { biography, addContactMessage } = useContent();
  const [purpose, setPurpose] = useState<FormPurpose>('Speaking');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    addContactMessage({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      organization: formData.organization || 'Individual',
      purpose,
      message: formData.message
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#E2E8F0]/60">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-xs uppercase tracking-widest text-[#0D9488] font-semibold mb-3 flex items-center gap-2">
          <span className="w-8 h-px bg-[#0D9488]"></span>
          <span>Section 11 · Public Engagement</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#0F172A] tracking-tight">
          Connect & Collaborate
        </h2>
        <p className="text-base text-[#2B2B2B]/80 font-light mt-2">
          Reach out for keynote invitations, volunteer registration, clinical inquiries, or institutional partnerships.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Form with Purpose Tabs */}
        <div className="lg:col-span-7 bg-[#FAF9F5] border border-[#E2E8F0] rounded-3xl p-8 sm:p-10 shadow-sm">
          <div className="text-xs uppercase tracking-widest text-[#0D9488] font-bold mb-4">
            Select Purpose of Outreach
          </div>

          {/* Purpose Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
            {(['Speaking', 'Volunteer', 'Consultation', 'Collaboration'] as FormPurpose[]).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPurpose(p)}
                className={`py-2.5 px-3 text-xs uppercase tracking-wider font-semibold rounded-xl border transition-all ${
                  purpose === p
                    ? 'bg-[#0F172A] text-[#FAF9F5] border-[#0F172A] shadow-xs'
                    : 'bg-[#FAF9F5] text-[#0F172A] border-[#E2E8F0] hover:border-[#D97706]'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-[#0D9488] text-[#FAF9F5] text-center space-y-4"
            >
              <CheckCircle2 className="w-12 h-12 text-[#D97706] mx-auto" />
              <h3 className="font-serif text-3xl font-bold">
                Thank You for Reaching Out
              </h3>
              <p className="text-sm text-[#FAF9F5]/80 leading-relaxed font-light">
                Your inquiry regarding <strong className="text-[#D97706]">{purpose}</strong> has been logged. Dr. Naresh Bhatta's office will respond shortly. You can also call directly at <a href="tel:9851423026" className="font-mono font-bold text-[#0D9488]">9851423026</a>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#D97706] text-[#0F172A] text-xs uppercase tracking-wider font-bold rounded-xl hover:bg-[#FAF9F5] transition-colors"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#0D9488] font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Professor Sarah Khan"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#D97706] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#0D9488] font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@university.edu"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#D97706] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#0D9488] font-semibold mb-2">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. North South University"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#D97706] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#0D9488] font-semibold mb-2">
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#D97706] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#0D9488] font-semibold mb-2">
                  Message / Request Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={`Describe your ${purpose.toLowerCase()} proposal, topic, event size, or medical query...`}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-[#E2E8F0] text-sm text-[#0F172A] focus:outline-none focus:border-[#D97706] transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0F172A] text-[#FAF9F5] text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-[#0D9488] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Send {purpose} Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Right Column: FAQ Accordion & Contact Details */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Info Box */}
          <div className="p-8 rounded-3xl bg-[#FAF9F5] border border-[#E2E8F0] space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#0F172A]">
              Direct Contact & Coordination
            </h3>
            <div className="space-y-3.5 text-xs text-[#2B2B2B]">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#D97706]" />
                <span>{biography.location} · Public Health Office</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D97706]" />
                <a href={`mailto:${biography.email}`} className="hover:underline font-medium">{biography.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#10B981]" />
                <a href={`tel:${biography.phone}`} className="font-mono font-bold text-[#0F172A] bg-[#0D9488] px-3 py-1 rounded-full border border-[#0F766E] hover:scale-105 transition-transform inline-flex items-center gap-1">
                  <span>+977 {biography.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#0F172A]">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaq === item.id;
                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E2E8F0] hover:border-[#D97706] transition-colors cursor-pointer"
                    onClick={() => setOpenFaq(isOpen ? null : item.id)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-serif text-lg font-bold text-[#0F172A]">
                        {item.question}
                      </h4>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#D97706] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#2B2B2B] shrink-0" />
                      )}
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-xs text-[#2B2B2B]/80 leading-relaxed font-light mt-3 border-t border-[#E2E8F0]/60 pt-3"
                        >
                          {item.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
