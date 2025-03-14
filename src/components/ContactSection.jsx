import React from 'react'
import * as AlertDialog from "@radix-ui/react-alert-dialog";

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
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setMessage("Form submitted successfully");
      event.target.reset();
    } else {
      setMessage("Form submission failed. Please try again.");
    }

    setIsDialogOpen(true);
  };


  return (
    <div>
      <section id='contact' className="h-screen py-20 bg-black text-center">
        <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-6">Have questions? We’re Just a Message Away.</p>
        <form onSubmit={onSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            name='name'
            className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            name='email'
            className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            name='message'
            className="p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition-transform text-lg font-semibold"
          >
            Send Message
          </button>

          <AlertDialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialog.Trigger asChild></AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
              <AlertDialog.Content className="fixed inset-0 flex items-center justify-center">
                <div className="bg-gray-950 text-white font-epilogue p-6 rounded-lg shadow-lg w-96">
                  <AlertDialog.Title className="text-lg font-bold">Success!</AlertDialog.Title>
                  <AlertDialog.Description className="mt-2">{message}</AlertDialog.Description>
                  <button
                    className="mt-4 px-4 py-2 bg-slate-200 text-black rounded"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    OK
                  </button>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </form>
      </section>
    </div>
  )
}

export default ContactSection
