import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Anasayfa</Link></li>
              <li><Link href="#hakkimizda" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="#ilkelerimiz" className="text-gray-400 hover:text-white transition-colors">İlkelerimiz</Link></li>
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">Alanlarımız</Link></li>
              <li><Link href="/makaleler" className="text-gray-400 hover:text-white transition-colors">Makaleler</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Uzmanlık Alanlarımız</h3>
            <ul className="space-y-3">
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">Dava Şartı Arabuluculuk</Link></li>
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">Ticaret Hukuku</Link></li>
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">İcra ve İflas Hukuku</Link></li>
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">Kira ve Kat Mülkiyeti Hukuku</Link></li>
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">Miras Hukuku</Link></li>
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">Tüketici Hukuku</Link></li>
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">Aile Hukuku</Link></li>
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">Ceza Hukuku</Link></li>
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">Gayrimenkul Hukuku</Link></li>
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">Sağlık Hukuku</Link></li>
              <li><Link href="#alanlarimiz" className="text-gray-400 hover:text-white transition-colors">Tazminat Hukuku</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary text-lg mr-3 mt-1">📍</span>
                <span className="text-sm md:text-base text-gray-400">
                  Akabe Mah. Akgöl Sk. Palabıyıklar Plaza 24A-110 Karatay/KONYA
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary text-lg mr-3">📞</span>
                <a 
                  href="tel:+905334123139"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  0533 412 31 39
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-primary text-lg mr-3">✉️</span>
                <a 
                  href="mailto:aylindagadasi@gmail.com"
                  className="text-sm md:text-base text-gray-400 hover:text-white transition-colors"
                >
                  aylindagadasi@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary text-lg mr-3 mt-1">⏰</span>
                <div>
                  <span className="font-bold text-white">ÇALIŞMA SAATLERİMİZ</span>
                  <p className="text-sm md:text-base text-gray-400">Pazartesi - Cuma: 08:00 - 18:30</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-800 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Av. Aylin Dağadası Ünal Hukuk Bürosu. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
            <Link href="#" className="hover:text-white transition-colors">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}