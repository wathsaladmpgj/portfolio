import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="bg-white/60">
                <div className="container mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-x-2">
                            <img src="https://i.ibb.co/7Nk4VpS/logo.png" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10" />
                            <span className="text-xl font-semibold text-gray-900">Company</span>
                        </Link>

                        <nav className="hidden space-x-6 sm:flex">
                            <Link to="/" className="text-base font-medium text-gray-600 hover:text-gray-900">Home</Link>
                            <Link to="/about" className="text-base font-medium text-gray-600 hover:text-gray-900">About</Link>
                            <Link to="/services" className="text-base font-medium text-gray-600 hover:text-gray-900">Services</Link>
                            <Link to="/pricing" className="text-base font-medium text-gray-600 hover:text-gray-900">Pricing</Link>
                        </nav>

                        <div className="flex items-center gap-x-4">
                            <Link to="/login" className="text-base font-medium text-gray-600 hover:text-gray-900">Login</Link>
                            <Link to="/signup" className="text-base font-medium text-indigo-600 hover:text-indigo-900">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
