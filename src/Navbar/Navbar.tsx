import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (  
    <div>
       <nav className="bg-gray-100 py-2 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4">
          <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </nav>
      </div>);
};

export default Navbar;
