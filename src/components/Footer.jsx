import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <footer className="" >
                <div className="container mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <p className="text-base font-medium text-gray-600">© 2025 Company. All rights reserved.</p>
                        <nav className="hidden space-x-6 sm:flex">
                            <Link to="/" className="text-base font-medium text-gray-600 hover:text-gray-900">Privacy Policy</Link>
                            <Link to="/" className="text-base font-medium text-gray-600 hover:text-gray-900">erms of Service</Link>
                            <Link to="/" className="text-base font-medium text-gray-600 hover:text-gray-900">Contact Us</Link>
                        </nav>
                    </div>
                </div>
            </footer>           
        </>
    );
}

export default Footer;