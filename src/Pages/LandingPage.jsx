
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Welcome to GITS</h2>
            <p className="text-xl mb-8 animate-slide-in">Empowering Minds, Shaping Futures</p>
            <Link to="/about" className="bg-accent text-primary hover:bg-accent/80 px-6 py-3 rounded-md font-medium transition duration-300 animate-fade-in">
              Learn More
            </Link>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Electronics & Communication'].map((dept, index) => (
                <div key={dept} className={`bg-background rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border-b-4 border-secondary transform hover:-translate-y-1 hover:scale-105 animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{dept}</h3>
                  <p className="text-text">Explore our cutting-edge {dept} program.</p>
                  <Link to="/department" className="mt-4 inline-block text-secondary hover:text-accent transition duration-300">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-secondary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in">Find Your Study Notes</h2>
            <p className="text-xl mb-8 animate-slide-in">Access course materials, lecture notes, and study guides with ease.</p>
            <Link to="/notes" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition duration-300 animate-fade-in">
              Browse Notes
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}