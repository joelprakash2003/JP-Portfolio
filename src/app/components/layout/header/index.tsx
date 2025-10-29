"use client";

import Logo from "../logo";

const Header = () => {
    return (
        <header className="navbar top-0 left-0 z-999 w-full absolute">
            <div className="container">
                <nav className="py-7">
                    <div className="flex items-center gap-4 sm:gap-8">
                        <div>
                            <Logo />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
