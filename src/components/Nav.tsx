
import logo from "../assets/logo-text.png";  


const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-gray-800 text-white">
            <div className="container mx-auto px-4">

                {/* ================= MOBILE NAVBAR ================= */}
                <div className="md:hidden h-16 flex items-center justify-between">

                    {/* Hamburger */}
                    <label className="btn btn-circle swap swap-rotate">
                        <input type="checkbox" />

                        {/* Hamburger icon */}
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 512 512"
                        >
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        {/* Close icon */}
                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 512 512"
                        >
                            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>


                    {/* Center Logo */}
                    <img
                        src={logo}
                        alt="Dev Stack Logo"
                        
                    />


                    {/* Mobile Auth Buttons */}
                    <div className="flex items-center gap-2">
                        <button className="text-sm px-2 py-1">
                            Sign In
                        </button>

                        <button className="bg-pink-600 hover:bg-purple-700 text-sm px-3 py-2 rounded-full transition">
                            Sign Up
                        </button>
                    </div>

                </div>


                {/* ================= DESKTOP NAVBAR ================= */}
                <div className="hidden md:flex h-16 items-center justify-between">

                    {/* Logo + Brand */}
                    <div className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Dev Stack Logo"

                        />

                        
                    </div>


                    {/* Navigation Links */}
                    <ul className="flex items-center gap-6">
                        <li>
                            <a href="#home">Home</a>
                        </li>

                        <li>
                            <a href="#technologies">Technologies</a>
                        </li>

                        <li>
                            <a href="#projects">Projects</a>
                        </li>

                        <li>
                            <a href="#about">About</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>


                    {/* Desktop Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2">
                            Sign In
                        </button>

                        <button className="bg-pink-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition">
                            Sign Up
                        </button>
                    </div>

                </div>

            </div>
        </nav>
    );
};

export default Nav;

