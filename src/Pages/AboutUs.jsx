import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import dp from '../assets/Images/dp.jpg'; // Adjust the path based on your folder structure

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">About Me</h2>
          <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <img src={dp} alt="Rehan Raza Sayed" className="w-48 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-8 border-4 border-secondary" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Rehan Raza Sayed</h3>
                <p className="text-text mb-4">
                  Aspiring software developer and enthusiastic student at Geetanjali Institute of Technical Studies. Passionate about creating innovative solutions and contributing to the tech community.
                </p>
                <div className="flex space-x-4">
                  <a href="https://github.com/rehanrazasayed" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition duration-300">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://linkedin.com/in/rehanrazasayed" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition duration-300">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://twitter.com/rehanrazasayed" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition duration-300">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <section>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Skills & Expertise</h3>
                <ul className="grid grid-cols-2 gap-4 text-text">
                  <li className="flex items-center"><span className="text-accent mr-2">▹</span> JavaScript (React, Node.js)</li>
                  <li className="flex items-center"><span className="text-accent mr-2">▹</span> HTML5 & CSS3</li>
                  <li className="flex items-center"><span className="text-accent mr-2">▹</span> Python</li>
                  <li className="flex items-center"><span className="text-accent mr-2">▹</span> Database Management</li>
                  <li className="flex items-center"><span className="text-accent mr-2">▹</span> Version Control (Git)</li>
                  <li className="flex items-center"><span className="text-accent mr-2">▹</span> RESTful API Development</li>
                </ul>
              </section>
              <section>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Mentors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary">Dr. Rajesh Kumar</h4>
                    <p className="text-text">Head of Innovation and Incubation Center, GITS</p>
                    <p className="text-sm text-gray-600 mt-2">Thank you for your guidance and support in fostering innovation.</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary">Amit Sharma</h4>
                    <p className="text-text">Senior Student Mentor</p>
                    <p className="text-sm text-gray-600 mt-2">Grateful for your mentorship and valuable insights throughout my journey.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
