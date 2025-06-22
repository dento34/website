'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ArticlesPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const articles = [
    {
      id: 1,
      category: 'arabuluculuk',
      title: 'DAVA ŞARTI ARABULUCULUK',
      content: `
        <p class="mb-4">Modern dünyada hukuk uyuşmazlıklarının artan nüfus, sosyal ve ekonomik gelişmelere paralel olarak büyük bir hızla arttığı, mevcut mahkemelerin kapasitelerinin veya hâkim sayısının artırılmasının tek başına çözüm olmadığı bir gerçektir.</p>
        <p class="mb-4">Bu nedenle gelişmiş toplumlarda alternatif uyuşmazlık çözüm yöntemleri geliştirilmeye çalışılmaktadır.</p>
        <p class="mb-4">Bu yöntemlerden en yaygın olanı arabuluculuktur. Arabuluculuk, taraflar arasındaki uyuşmazlığın arabulucu eğitimi almış tarafsız ve bağımsız üçüncü bir kişi aracılığıyla çözülmesi yöntemidir.</p>
      `
    },
    {
      id: 2,
      category: 'aile',
      title: 'AİLE HUKUKU',
      content: `
        <p class="mb-4">Toplumun temeli ailedir. Aslolan ailenin ayakta tutulması olmakla beraber mutsuz, fikren ve ruhen anlaşamayan, evlilik sözleşmesi gereklerinin yerine getirilmediği durumlarda artık evliliği devam ettirmekte yarar kalmayacaktır.</p>
        <p class="mb-4">Böyle bir evliliğin devamında ise; eşler, çocuklar ve toplum için bir yarar kalmayacağından en iyi çözüm ayrılık veya boşanmadır.</p>
      `
    },
    {
      id: 3,
      category: 'ceza',
      title: 'CEZA HUKUKU',
      content: `
        <p class="mb-4">Henüz kentleşme sürecini tamamlayamayan, sanayileşmeye çalışan toplumlara özgü olarak artan suç oranı ve suç şekilleri itibariyle Ceza Kanunu gibi temel kanun yanında spesifik olarak Vergi Usul Kanunu, Gümrük Kanunu gibi özel kanunlarda yer verilen suçların sayısı artmış bulunmaktadır.</p>
      `
    }
  ]

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'arabuluculuk', name: 'Arabuluculuk' },
    { id: 'aile', name: 'Aile Hukuku' },
    { id: 'ceza', name: 'Ceza Hukuku' },
    { id: 'gayrimenkul', name: 'Gayrimenkul Hukuku' },
    { id: 'icra', name: 'İcra & İflas Hukuku' },
    { id: 'is', name: 'İş & Sosyal Güvenlik' },
    { id: 'kira', name: 'Kira & Kat Mülkiyeti' },
    { id: 'miras', name: 'Miras Hukuku' },
    { id: 'nufus', name: 'Nüfus Davaları' },
    { id: 'saglik', name: 'Sağlık Hukuku' },
    { id: 'tazminat', name: 'Tazminat Hukuku' },
    { id: 'ticaret', name: 'Ticaret Hukuku' },
    { id: 'tuketici', name: 'Tüketici Hukuku' }
  ]

  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeFilter)

  return (
    <>
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hukuk Makalelerimiz</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Uzmanlık alanlarımızdaki güncel gelişmeler, yasal düzenlemeler ve önemli konular hakkında uzman görüşlerimiz.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full border font-medium transition-all ${
                  activeFilter === category.id
                    ? 'bg-primary text-white border-primary'
                    : 'border-gray-300 text-gray-700 hover:bg-primary hover:text-white hover:border-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {filteredArticles.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">Bu kategoride makale bulunmamaktadır.</p>
            ) : (
              filteredArticles.map((article) => (
                <div 
                  key={article.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8"
                  id={`article-${article.id}`}
                >
                  <div className="prose md:prose-lg max-w-none">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">{article.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Hukuki Güncellemelerden Haberdar Olun</h2>
            <p className="text-gray-600 mb-8">Yeni makalelerimiz ve hukuki gelişmeler hakkında bilgi almak için e-posta listemize katılın.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
              <button 
                type="submit" 
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Hukuki Danışmanlık İçin Bize Ulaşın</h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Hukuki sorunlarınız için profesyonel destek almak ister misiniz? Size yardımcı olmaktan memnuniyet duyarız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+905334123139"
              className="flex items-center justify-center bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-button font-medium transition-colors whitespace-nowrap"
            >
              📞 Bizi Arayın
            </a>
            <Link 
              href="/#contact" 
              className="flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-button font-medium transition-colors whitespace-nowrap"
            >
              ✉️ E-posta Gönderin
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}