import logo from "../assets/banner-stack.png";  

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-slate-950">
            <div className="container mx-auto flex justify-between items-center ">
            <div className="absolute left-20 -top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"/>
            <div className="absolute bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"/>
            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
                <div className="text-center lg:text-left">
                    
                    <h2 className="text-4xl font-bold leading-tight tracking-tight text-w
        hite sm:text-5xl lg:text-5xl">Build Your Ideal </h2>
        <h2 className=" text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-5xl
        bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Development Stack
        </h2>  
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
          Explore frontend, backend, database, and tooling options, compare them side by side,and put together the stack that fits your next progect.

            </p>  
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <button className="min-w-45 rounded-lg
                bg-linear-to-r from-purple-600 to-cyan-500 px-4 py-2font-semibold text-white
                purple-500/20 transition hover: scale-105 hover:shadow-purple-500/40">Explore technologies</button>   
            <button className="min-w-45 rounded-lg
            border border-slate-600 px-4 py-2 font-semibold text-white transition
            hover:scale-105border-purple-400  hover:bg-purple-500/40">Learn More</button>
            </div>
            </div>
            <div className="flex justify-center lg:justify-end">
                <div className="relative">
                    <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-500/30 to-cyan-500/30 blur-3xl"/>
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                        <img src={logo} alt="Logo" className="h-auto w-full object-cover"/>
                    </div> 
                </div>
            </div>
            </div>
            </div>
        </section>
    )
}
    

export default Hero;

