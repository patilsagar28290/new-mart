import { type FC } from 'react';
import Navbar from '../Navbar/Navbar';

const Header: FC = () => {
    return (
        <header className="bg-white shadow-md border-b border-gray-200">
            <div className="container mx-auto max-w-7xl px-4 py-4">
                <h1 className="text-3xl font-bold text-gray-800">New Mart</h1>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
