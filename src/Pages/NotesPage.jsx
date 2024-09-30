import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
const branches = ['CSE', 'EE', 'ME', 'CE', 'ECE'];

export default function NotesPage() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Study Notes</h2>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <select
                className="w-full p-2 border border-gray-300 rounded-md text-text"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <select
                className="w-full p-2 border border-gray-300 rounded-md text-text"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
              >
                <option value="">Select Branch</option>
                {branches.map((branch) => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>
              <button className="w-full bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded transition duration-300">
                Find Notes
              </button>
            </div>
          </div>
          {selectedYear && selectedBranch && (
            <div className="mt-8 text-center">
              <p className="text-lg text-primary">Showing notes for {selectedYear} - {selectedBranch}</p>
              <p className="mt-4 text-text">No notes available at the moment. Check back later!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}