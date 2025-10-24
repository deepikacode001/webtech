import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

// Replace these with your actual contact details
const CONTACT = {
  whatsappNumber: "919999999999", // e.g. country code + number, no plus sign for wa.me
  whatsappDefaultText: "Hello, I would like to inquire about your services.",
  instagramHandle: "webhaventech", // e.g. 'webhaventech' => https://instagram.com/webhaventech
  phone: "+919999999999", // tel: link (keep plus if desired)
  email: "hello@webhaventech.com", // mailto
};

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('form'); // 'form' or 'social'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
    setIsOpen(false);
  };

  const handleSocialAction = (type: string) => {
    if (typeof window === "undefined") return;

    switch (type) {
      case 'whatsapp': {
        const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
          CONTACT.whatsappDefaultText
        )}`;
        window.open(url, "_blank", "noopener,noreferrer");
        break;
      }
      case 'instagram': {
        const url = `https://instagram.com/${CONTACT.instagramHandle}`;
        window.open(url, "_blank", "noopener,noreferrer");
        break;
      }
      case 'email': {
        const subject = encodeURIComponent("Inquiry from website");
        const body = encodeURIComponent("Hi,\n\nI would like to know more about your services.");
        window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
        break;
      }
      case 'call': {
        // Initiates phone call on supported devices
        window.location.href = `tel:${CONTACT.phone}`;
        break;
      }
      default:
        break;
    }
  };

  const tabs = [
    { id: 'form', label: 'Contact Form' },
    { id: 'social', label: 'Quick Connect' }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 p-4 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
      >
        <FaComments className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-20 right-4 z-50 w-full max-w-md bg-white rounded-xl shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-black">Contact Us</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                {/* Tabs */}
                <div className="flex space-x-2 mb-6">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {activeTab === 'form' ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black"
                      placeholder="Your name"
                    />
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black"
                      placeholder="Your email"
                    />
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black"
                      placeholder="Your message"
                    />
                    <button
                      type="submit"
                      className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-800"
                    >
                      Send Message
                    </button>
                  </form>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { type: 'whatsapp', icon: <FaWhatsapp />, label: 'WhatsApp' },
                      { type: 'instagram', icon: <FaInstagram />, label: 'Instagram' },
                      { type: 'email', icon: <FaEnvelope />, label: 'Email' },
                      { type: 'call', icon: <FaPhone />, label: 'Call' }
                    ].map((social) => (
                      <button
                        key={social.type}
                        onClick={() => handleSocialAction(social.type)}
                        aria-label={social.label}
                        className="bg-white border border-gray-200 text-black px-4 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
                      >
                        {social.icon}
                        <span className="text-sm font-medium">{social.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
