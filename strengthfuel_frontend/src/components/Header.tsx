'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (key: string) => {
    setDropdownOpen(prev => (prev === key ? null : key));
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container">
        <Link href="/" className="logo">Strength Fuel</Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link href="/menu" onClick={closeAllMenus}>Menu</Link>

          <div
            className="dropdown"
            onMouseEnter={() => {
              if (window.innerWidth > 768 && dropdownOpen === null) {
                setDropdownOpen('services');
              }
            }}
          >
            <span
              className="dropdown-label"
              onClick={() => toggleDropdown('services')}
            >
              Services ▾
            </span>
            <div className={`dropdown-menu ${dropdownOpen === 'services' ? 'show' : ''}`}>
              <Link href="/subscriptions" onClick={closeAllMenus}>Subscriptions</Link>
              <Link href="/orders" onClick={closeAllMenus}>Orders</Link>
            </div>
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => {
              if (window.innerWidth > 768 && dropdownOpen === null) {
                setDropdownOpen('resources');
              }
            }}
          >
            <span
              className="dropdown-label"
              onClick={() => toggleDropdown('resources')}
            >
              Resources ▾
            </span>
            <div className={`dropdown-menu ${dropdownOpen === 'resources' ? 'show' : ''}`}>
              <Link href="/blog" onClick={closeAllMenus}>Blog</Link>
              <Link href="/faq" onClick={closeAllMenus}>FAQ</Link>
            </div>
          </div>

          <Link href="/contact" onClick={closeAllMenus}>Contact</Link>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(prev => !prev);
            setDropdownOpen(null);
          }}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}