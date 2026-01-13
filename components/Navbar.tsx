"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/new logo.jpg"
              alt="Harsh Academy Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
              HARSH ACADEMY
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-900 font-semibold transition"
            >
              HOME
            </Link>
            <Link
              href="/admission"
              className="text-gray-700 hover:text-blue-900 font-semibold transition"
            >
              ADMISSION
            </Link>
            <Link
              href="/academics"
              className="text-gray-700 hover:text-blue-900 font-semibold transition"
            >
              ACADEMICS
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-900 font-semibold transition"
            >
              ABOUT US
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-900 font-semibold transition"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-900 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/admission"
              className="block py-2 text-gray-700 hover:text-blue-900 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              ADMISSION
            </Link>
            <Link
              href="/academics"
              className="block py-2 text-gray-700 hover:text-blue-900 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              ACADEMICS
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-blue-900 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-blue-900 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
