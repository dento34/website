import Image from 'next/image'
import Link from 'next/link'

export default function Articles() {
  const articles = [
    {
      id: 1,
      category: 'arabuluculuk',
      title: 'Dava Şartı Arabuluculuk: Hukuki Uyuşmazlıkların Alternatif Çözüm Yolu',
      previewText: 'Modern dünyada artan hukuki uyuşmazlıklar, mahkemelerin kapasitesini zorlamakta ve alternatif çözüm yöntemlerini ön plana çıkarmaktadır.',
      img: '/images/arabuluculuk.jpg',
      author: 'Av. Aylin Dağadası Ünal',
      date: '16 Haziran 2024'
    },
    {
      id: 2,
      category: 'aile',
      title: 'Aile Hukuku: Toplumun Temeli ve Zorlu Hukuki Süreçler',
      previewText: 'Toplumun temelini oluşturan aile kurumu, bazen eşler arasında yaşanan mutsuzluk, fikri ve ruhi anlaşmazlıklar gibi nedenlerle zorlu süreçlere evrilebilmektedir.',
      img: '/images/aile-hukuku-konya.jpeg',
      author: 'Av. Aylin Dağadası Ünal',
      date: '15 Haziran 2024'
    },
    {
      id: 3,
      category: 'ceza',
      title: 'Suç Türlerindeki Artış ve Hukuki Yardım Gereksinimi',
      previewText: "Henüz kentleşme sürecini tamamlayamayan ve sanayileşmeye çalışan toplumlarda, suç oranı ve suç şekilleri giderek artmaktadır.",
      img: '/images/ceza-hukuku.jpg',
      author: 'Av. Aylin Dağadası Ünal',
      date: '14 Haziran 2024'
    }
  ]

  return (
    <section id="makaleler" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Güncel Makalelerimiz</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Hukuk dünyasındaki güncel gelişmeler ve önemli konular hakkında uzman görüşlerimiz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="article-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full flex flex-col"
            >
              <Image 
                src={article.img} 
                alt={article.title} 
                width={400}
                height={250}
                className="w-full h-52 object-cover object-top"
              />
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="flex items-center mr-4">
                    📅 {article.date}
                  </span>
                  <span className="flex items-center">
                    👤 {article.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 flex-1">{article.previewText}</p>
                <div className="mt-auto pt-4">
                  <Link 
                    href={`/makaleler#article-${article.id}`} 
                    className="text-primary font-medium hover:underline"
                  >
                    Devamını Oku →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link 
            href="/makaleler" 
            className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-button font-medium transition-colors whitespace-nowrap"
          >
            Tüm Makaleleri Görüntüle
          </Link>
        </div>
      </div>
    </section>
  )
}