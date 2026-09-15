import logo from "../assets/logo-text.png";  

const Nav = () => {
    return (
        <nav className="flex justify-between  bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center ">
            
           
             <img src={logo} alt="Logo" />
              
            
              
            <ul className="flex gap-4 items-center">
                <li><a href="#home">Home</a></li>
                <li><a href="#technologies">Technologies</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        
        
            
                <ul className="flex gap-4 items-center">
                    <button className="text-white-400  py-2 px-4 rounded-lg">
                        Sign in
                    </button>
                    <button className="bg-pink-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition">
                        Sign up
                    </button>
                </ul>
                </div>
            
        
        </nav>
    );
};

export default Nav;