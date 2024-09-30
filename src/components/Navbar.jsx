import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png'; // Adjust the path based on your folder structure

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="GITS Logo" className="h-12 w-auto mr-3" />
            <div>
              <h1 className="text-xl font-bold">Geetanjali Institute of Technical Studies</h1>
              <p className="text-xs">Affiliated to RTU, Kota | Approved by AICTE, New Delhi</p>
            </div>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
          <nav className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
              {[
                { name: 'Home', path: '/' },
                { name: 'Department', path: '/department' },
                { name: 'Notes', path: '/notes' },
                { name: 'RTU Result', path: 'https://rtu.sumsraj.com/Exam/Report/DownloadGradesheet.aspx' },
                { name: 'About Us', path: '/about' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block py-2 md:py-4 px-4 text-lg font-semibold hover:bg-secondary hover:text-white rounded-lg transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
