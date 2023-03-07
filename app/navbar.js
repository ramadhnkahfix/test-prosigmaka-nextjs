import Link from "next/link";

export default function navbar(){
    const handlerMenu = (e) => {
        console.log(e)
    }
    return (
        <div className="navbar">
            <nav className="p-5 bg-slate-300 shadow md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-[Poppins] cursor-pointer">Pokemon</span>
                </div>
                <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto py-4 md:py-0 pl-7 md:pl-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li className="mx-4 my-6 md:my-0"><Link href={"/"}>Home</Link></li>
                    <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
                        <Link href={"/"}>Get Started</Link>
                    </button>
                </ul>
            </nav>
        </div>
    );
};