import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Airport Road, Dabok</p>
            <p>Udaipur - 313022, Rajasthan, India</p>
            <p>Phone: +91-9116039801</p>
            <p>Email: info@gits.ac.in</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition duration-300">Home</Link></li>
              <li><Link to="/department" className="hover:text-accent transition duration-300">Departments</Link></li>
              <li><Link to="/notes" className="hover:text-accent transition duration-300">Notes</Link></li>
              <li><Link to="/about" className="hover:text-accent transition duration-300">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Feedback</h3>
            <form onSubmit={handleFeedbackSubmit}>
              <textarea
                placeholder="Your feedback is valuable to us"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-2 text-text mb-2 rounded"
              />
              <button type="submit" className="w-full bg-accent hover:bg-accent/80 py-2 px-4 rounded transition duration-300">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2024 Geetanjali Institute of Technical Studies. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.facebook.com/gitsudr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com/gitsudr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/gitsudr/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/school/geetanjali-institute-of-technical-studies-udaipur/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}