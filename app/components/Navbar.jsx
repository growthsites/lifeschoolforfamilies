"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTikTok,
} from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => setMenuOpen((v) => !v);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full h-24 shadow-sm bg-[#FEF5E4]">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/" className="cursor-pointer text-4xl">
          ✏️
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-6 items-center">
          <li><Link href="/tutoring" className="hover:opacity-80 text-xl">Tutoring</Link></li>
          <li><Link href="/about" className="hover:opacity-80 text-xl">About</Link></li>
          <li><Link href="/contact" className="hover:opacity-80 text-xl">Contact us</Link></li>
          <li><Link href="/useful-resources" className="hover:opacity-80 text-xl">Useful Resources</Link></li>
        </ul>

        {/* Mobile burger */}
        <button
          onClick={handleNav}
          aria-label="Open menu"
          className="sm:hidden cursor-pointer p-2"
        >
          <AiOutlineMenu size={25} />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={handleNav}
          aria-hidden="true"
        />
      )}

      {/* Slide-in panel */}
      <aside
        className={`fixed left-0 top-0 h-screen w-4/5 max-w-xs bg-[#280d02] text-white p-8 z-50 sm:hidden
        transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex w-full items-center justify-end">
          <button onClick={handleNav} aria-label="Close menu" className="p-2">
            <AiOutlineClose size={26} />
          </button>
        </div>

        <nav className="mt-6">
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="block py-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-2">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/useful-resources" onClick={() => setMenuOpen(false)} className="block py-2">
                Useful Resources
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex justify-around items-center pt-10">
          <a
            href="https://www.instagram.com/life_school_for_familes?igsh=MWZ5ZXl6cjZ3YW9z&u"
            target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          >
            <AiOutlineInstagram size={28} />
          </a>
          <a
            href="https://www.facebook.com/groups/4024503017805048/?ref=share&mibextid=wwXIfr"
            target="_blank" rel="noopener noreferrer" aria-label="Facebook"
          >
            <AiOutlineFacebook size={28} />
          </a>
          <a
            href="https://www.tiktok.com/@life.school.for.f?_t=ZN-8z24ntPhaC6&_r=1"
            target="_blank" rel="noopener noreferrer" aria-label="TikTok"
          >
            <AiOutlineTikTok size={28} />
          </a>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
