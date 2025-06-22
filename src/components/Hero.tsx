import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="hero h-[600px] flex items-center relative">
      <Image
        src="/images/konya-adliyesi.jpeg"
        alt="Konya Adliyesi - Hukuk Bürosu Background"
        fill
        className="object-cover"
        priority
      />
      <div className="container mx-auto px-4 w-full relative z-10">
        <div className="hero-content max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Hukuki süreçlerinizde bireysel strateji ve sürdürülebilir çözümlerle yanınızdayız.
          </h1>
          <p className="text-lg text-white mb-8 leading-relaxed">
            Konya merkezli hukuk büromuz, aile hukuku alanında uzmanlaşmış olup boşanma davaları, 
            velayet süreçleri ve nafaka hesaplamaları konularında deneyimli avukat desteği sunmaktadır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#contact" 
              className="flex items-center justify-center bg-white text-primary hover:bg-gray-100 px-8 py-2 md:py-3 rounded-button font-medium transition-colors whitespace-nowrap"
              aria-label="Ücretsiz hukuki danışmanlık randevusu"
            >
              Randevu Alın
            </Link>
            <Link 
              href="#alanlarimiz" 
              className="flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-2 md:py-3 rounded-button font-medium transition-colors whitespace-nowrap"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}