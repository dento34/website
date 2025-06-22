'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="h-20 bg-white p-2 rounded" aria-label="Ana Sayfa">
              <Image 
                src="/images/logo.png" 
                alt="Av. Aylin Dağadası Ünal Hukuk Bürosu Logo - Konya Aile Hukuku Uzmanı" 
                width={80}
                height={80}
                className="h-full w-auto"
                priority
              />
            </Link>
            <h1 className="text-primary font-playfair font-bold text-lg md:text-xl">
              AV. AYLİN DAĞADASI ÜNAL<br />HUKUK & DANIŞMANLIK
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link active text-primary font-medium">Anasayfa</Link>
            <Link href="#hakkimizda" className="nav-link text-gray-700 hover:text-primary transition-colors">Hakkımızda</Link>
            <Link href="#ilkelerimiz" className="nav-link text-gray-700 hover:text-primary transition-colors">İlkelerimiz</Link>
            <Link href="#alanlarimiz" className="nav-link text-gray-700 hover:text-primary transition-colors">Alanlarımız</Link>
            <Link href="/makaleler" className="nav-link text-gray-700 hover:text-primary transition-colors">Makaleler</Link>
            <Link href="#contact" className="nav-link text-gray-700 hover:text-primary transition-colors">İletişim</Link>
          </nav>
          
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary" 
            aria-label="Menü"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out">
          <div className="flex justify-end p-6">
            <button 
              className="text-white w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full pb-20">
            <Link href="/" className="nav-link text-white text-xl mb-8 font-medium" onClick={() => setMobileMenuOpen(false)}>Anasayfa</Link>
            <Link href="#hakkimizda" className="nav-link text-gray-300 hover:text-white text-xl mb-8 font-medium" onClick={() => setMobileMenuOpen(false)}>Hakkımızda</Link>
            <Link href="#ilkelerimiz" className="nav-link text-gray-300 hover:text-white text-xl mb-8 font-medium" onClick={() => setMobileMenuOpen(false)}>İlkelerimiz</Link>
            <Link href="#alanlarimiz" className="nav-link text-gray-300 hover:text-white text-xl mb-8 font-medium" onClick={() => setMobileMenuOpen(false)}>Alanlarımız</Link>
            <Link href="/makaleler" className="nav-link text-gray-300 hover:text-white text-xl mb-8 font-medium" onClick={() => setMobileMenuOpen(false)}>Makaleler</Link>
            <Link href="#contact" className="nav-link text-gray-300 hover:text-white text-xl mb-8 font-medium" onClick={() => setMobileMenuOpen(false)}>İletişim</Link>
          </div>
        </div>
      )}
    </>
  )
}