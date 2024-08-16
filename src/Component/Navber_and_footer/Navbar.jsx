import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='Navber bg-[#5fdc6a99]'>
            <div className='w-[90%] mx-auto px-5'>
                <nav className="relative">
                    <div className=" py-4 mx-auto">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <div className="flex items-center justify-between">
                                <a href="#">
                                    <img
                                        className="w-auto h-20 sm:h-20"
                                        src="https://i.ibb.co/BPrqFzn/Online-shop-button-removebg-preview.png"
                                        alt=""
                                    />
                                </a>

                                {/* Mobile menu button */}
                                <div className="flex lg:hidden">
                                    <button className="mr-5 btn btn-outline btn-accent text-[18px] font-medium">Sing Up</button>
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        type="button"
                                        className="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                        aria-label="toggle menu"
                                    >

                                        {isOpen ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 8h16M4 16h16"
                                                />
                                            </svg>
                                        )}
                                    </button>

                                </div>
                            </div>

                            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                            <div
                                className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                                    }`}
                            >
                                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                   <NavLink className={"text-[18px] btn bg-[#fcc]"}>Home</NavLink>
                                </div>

                            </div>
                            <div className="flex items-center mt-4 lg:mt-0">
                                <button
                                    className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block  hover: dark:hover:text-gray-400 focus: dark:focus:text-gray-400 focus:outline-none"
                                    aria-label="show notifications"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <button className="btn btn-outline md:hidden lg:block btn-accent text-[18px] font-medium">Sing Up</button>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
}

export default Navbar;
