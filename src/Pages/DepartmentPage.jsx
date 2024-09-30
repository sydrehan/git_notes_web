
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const departments = [
  {
    name: 'Computer Science Engineering',
    description: 'Focuses on software development, algorithms, and computer systems.',
    hod: 'Dr. Amit Sharma',
    icon: '💻',
  },
  {
    name: 'Electrical Engineering',
    description: 'Covers power systems, control systems, and electrical machines.',
    hod: 'Dr. Priya Patel',
    icon: '⚡',
  },
  {
    name: 'Mechanical Engineering',
    description: 'Deals with design, manufacturing, and thermal systems.',
    hod: 'Dr. Rajesh Kumar',
    icon: '⚙️',
  },
  {
    name: 'Civil Engineering',
    description: 'Focuses on structural engineering, transportation, and environmental systems.',
    hod: 'Dr. Neha Singh',
    icon: '🏗️',
  },
  {
    name: 'Electronics & Communication',
    description: 'Covers electronic circuits, communication systems, and signal processing.',
    hod: 'Dr. Vikram Joshi',
    icon: '📡',
  },
];

export default function DepartmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={dept.name} className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border-l-4 border-secondary transform hover:-translate-y-1 hover:scale-105 animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{dept.icon}</span>
                  <h3 className="text-2xl font-semibold text-primary">{dept.name}</h3>
                </div>
                <p className="text-text mb-4">{dept.description}</p>
                <p className="text-sm text-secondary">Head of Department: {dept.hod}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}