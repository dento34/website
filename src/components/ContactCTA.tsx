import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Hukuki Danışmanlık İçin Bize Ulaşın</h2>
        <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-8">
          Aile hukuku, boşanma davaları ve velayet süreçlerinde profesyonel destek almak ister misiniz? 
          Size yardımcı olmaktan memnuniyet duyarız.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+905334123139" 
            className="flex items-center justify-center bg-white text-primary hover:bg-gray-100 px-8 py-2 md:py-3 rounded-button font-medium transition-colors whitespace-nowrap"
            aria-label="Konya avukat telefon numarası"
          >
            📞 Bizi Arayın
          </a>
          <Link 
            href="#contact" 
            className="flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-2 md:py-3 rounded-button font-medium transition-colors whitespace-nowrap"
          >
            ✉️ E-posta Gönderin
          </Link>
        </div>
      </div>
    </section>
  )
}