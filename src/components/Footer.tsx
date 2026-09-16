
import {FiGithub,FiTwitter,FiLinkedin}
from "react-icons/fi";
import logo from "../assets/logo-text.png";  

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300">
            <div className="container mx-auto px-4">

        
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            <div>
                <div className="flex items-center gap-2">
                   <img
                        src={logo}
                        alt="Dev Stack Logo"
                        
                    />
                </div>
               <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
                Curated tools, technologies, and resources for developers building modern software.
               </p>
               <div className="mt-5 flex gap-3">
                <a href="#" className="round-lg bg-gray-800 p-2 hover:bg-gray-700">
                    <FiGithub/>
                </a>
                <a href="#" className="round-lg bg-gray-800 p-2 hover:bg-gray-700">
                    <FiTwitter/>
                </a>
                <a href="#" className="round-lg bg-gray-800 p-2 hover:bg-gray-700">
                    <FiLinkedin/>
                </a>
               </div>
            </div>
            <div>
                <h3 className="font-semibold text-white">PRODUCT</h3>
                <div className="mt-4 space-y-3 text-sm">
                    <a href="#" className="block hover:text-white">Home</a>
                    <a href="#" className="block hover:text-white">Technologies</a>
                    <a href="#" className="block hover:text-white">Project</a>
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-white">COMPANY</h3>
                <div className="mt-4 space-y-3 text-sm">
                    <a href="#" className="block hover:text-white">About</a>
                    <a href="#" className="block hover:text-white">Contact</a>
                    <a href="#" className="block hover:text-white">Carrers</a>
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-white">LEGAL</h3>
                <div className="mt-4 space-y-3 text-sm">
                    <a href="#" className="block hover:text-white">Privacy Policy</a>
                    <a href="#" className="block hover:text-white">Terms of Service</a>
                    
                </div>
            </div>
            <div className="col-span-full w-full border-t border-gray-800">

        <div className="mx-auto flex items-center max-w-7xl flex-col px-4 py-4 text-sm text-gray-500
                sm:px-6 md:flex-row
            
                md:justify-between lg:px-8">
                    <p className="whitespace-nowrap">© 2026 Dev Stack. All rights reserved.</p>
                
            </div>
            </div>
        </div>
        </div>
        </footer>
    );
};

export default Footer;