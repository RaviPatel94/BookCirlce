import { useState, useEffect } from 'react';

function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('user');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!subject.trim()) {
      setSubmitStatus('Please enter a subject');
      return;
    }

    if (!message.trim()) {
      setSubmitStatus('Please enter a message');
      return;
    }

    if (!userEmail.trim()) {
      setSubmitStatus('User email not found. Please log in again.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://bookcircleapi.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: subject,
          message: message,
          userEmail: userEmail
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('Message sent successfully! Check your email for confirmation.');
        setSubject('');
        setMessage('');
      } else {
        setSubmitStatus(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="flex flex-col justify-center items-center">
      <h2 className="text-3xl mb-4">Contact Us</h2>
      <div className="bg-white w-full max-w-4xl flex items-center justify-center gap-6">
        <div className="flex flex-col justify-center rounded-lg p-6">
          <img src="/images/bookcircle.png" className="size-28 mx-auto mb-6" alt="" />
          <h2 className="text-xl mb-4">Get in Touch</h2>
          <p className="mb-2"><strong>Email:</strong> bookcircle@gmail.com</p>
          <p><strong>Phone:</strong> +91 888888888</p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full h-40 resize-none"
              required
            />
            <button 
              type="submit" 
              disabled={isSubmitting || !userEmail}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            {submitStatus && (
              <p className={`text-sm ${submitStatus.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;