import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
const branches = ['CSE', 'EE', 'ME', 'CE', 'ECE'];

//{DATASET OF NOTES} Sample notes data (update paths accordingly)
const notesData = {
  '1st Year': {
    CSE: [
      { name: 'CSE Notes', url: '/notes/1.pdf' },
    ],
  },
  '2nd Year': {
    CSE: [
      { name: 'CSE Notes', url: '/notes/2nd_year_cse_notes.pdf' },
    ],
  },
};

export default function NotesPage() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const handleFindNotes = () => {
    setShowNotes(true);
  };

  const handleNoteClick = (url) => {
    setPdfUrl(url);
  };

  const handleClose = () => {
    setShowNotes(false);
    setPdfUrl('');
    setSelectedYear('');
    setSelectedBranch('');
  };

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
              <button
                className="w-full bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded transition duration-300"
                onClick={handleFindNotes}
              >
                Find Notes
              </button>
            </div>
          </div>

          {/* Show notes selection */}
          {showNotes && (
            <div className="mt-8 text-center relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-red-600 hover:text-red-800 bg-white border border-gray-300 rounded-full shadow-md transition duration-300"
                title="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-lg text-primary mb-4">Select Notes for {selectedYear} - {selectedBranch}</h3>
              <div className="grid grid-cols-2 gap-4">
                {notesData[selectedYear]?.[selectedBranch]?.map((note) => (
                  <div
                    key={note.name}
                    onClick={() => handleNoteClick(note.url)}
                    className="flex flex-col items-center cursor-pointer p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                  >
                    <div className="text-xl font-bold mb-2">{note.name}</div>
                    <div className="text-gray-500">View PDF</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Display PDF Viewer */}
          {pdfUrl && (
            <div className="mt-8 text-center relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-red-600 hover:text-red-800 bg-white border border-gray-300 rounded-full shadow-md transition duration-300"
                title="Close PDF"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe
                src={pdfUrl + "#toolbar=0"} // Disable toolbar
                width="100%"
                height="600"
                className="border-none rounded-lg shadow-lg"
                title="PDF Viewer"
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
