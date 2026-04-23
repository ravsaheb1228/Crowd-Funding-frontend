import React from 'react';
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import AnimatedContent from './AnimatedContent';

const ContactSection = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsDialogOpen(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "e8d5ecea-4043-4eb5-b017-20b7786ec85a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setMessage("Your message was sent successfully!");
      event.target.reset();
    } else {
      setMessage("Submission failed. Please try again.");
    }

    setIsDialogOpen(true);
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-6 scroll-mt-20">
      <AnimatedContent distance={60} direction="vertical" delay={0}>
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-3">Contact Us</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Have questions? We're just a message away.
        </p>
      </AnimatedContent>

      <AnimatedContent distance={60} direction="vertical" delay={150}>
        <form onSubmit={onSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="p-4 rounded-xl bg-[#111] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
            className="p-4 rounded-xl bg-[#111] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            name="message"
            required
            className="p-4 rounded-xl bg-[#111] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition resize-none"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:scale-105 active:scale-95 transition-all duration-200 text-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </AnimatedContent>

      <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="fixed inset-0 bg-black/60 z-50" />
          <AlertDialog.Content className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#1c1c24] border border-gray-800 text-white font-epilogue p-6 rounded-2xl shadow-xl w-96">
              <AlertDialog.Title className="text-lg font-bold mb-2">
                {message.includes('successfully') ? '✅ Success' : '❌ Error'}
              </AlertDialog.Title>
              <AlertDialog.Description className="text-gray-400 mt-1">{message}</AlertDialog.Description>
              <button
                className="mt-5 px-5 py-2 bg-[#8c6dfd] hover:bg-[#7b5de0] text-white rounded-lg transition"
                onClick={() => setIsDialogOpen(false)}
              >
                OK
              </button>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </section>
  );
};

export default ContactSection;
