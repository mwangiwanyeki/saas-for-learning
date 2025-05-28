import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarItems from "@/components/NavbarItems";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image src="/images/logo.svg" alt="" width={46} height={44} />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavbarItems />
                <p>Sign In</p>
            </div>
        </nav>
    );
};

export default Navbar;