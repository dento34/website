export default function PracticeAreas() {
  const areas = [
    { icon: '🤝', title: 'Dava Şartı Arabuluculuk', text: 'Ticaret ve tüketici uyuşmazlıklarında zorunlu arabuluculuk süreçleri.' },
    { icon: '❤️', title: 'Aile Hukuku', text: 'Boşanma, nafaka, velayet ve mal paylaşımı gibi konularda danışmanlık.' },
    { icon: '⚖️', title: 'Ceza Hukuku', text: 'Ceza davalarında savunma, suç duyurusu ve şikayet süreçlerinde destek.' },
    { icon: '🏢', title: 'Gayrimenkul Hukuku', text: 'Taşınmaz alım-satım, inşaat ve imar hukuku uyuşmazlıkları.' },
    { icon: '🔨', title: 'İcra ve İflas Hukuku', text: 'İcra takipleri, iflas işlemleri, haciz ve borç yapılandırma süreçleri.' },
    { icon: '💼', title: 'İş ve Sosyal Güvenlik Hukuku', text: 'İş davaları, işçi-işveren uyuşmazlıkları ve iş kazaları.' },
    { icon: '🏠', title: 'Kira ve Kat Mülkiyeti Hukuku', text: 'Kira sözleşmeleri, tahliye davaları ve kat mülkiyeti sorunları.' },
    { icon: '📋', title: 'Miras Hukuku', text: 'Miras paylaşımı, vasiyetname, tenkis ve istihkak davaları.' },
    { icon: '🏥', title: 'Sağlık Hukuku', text: 'Tıbbi malpraktis davaları, hasta ve sağlık çalışanı hakları.' },
    { icon: '💰', title: 'Tazminat Hukuku', text: 'Maddi ve manevi tazminat, iş ve trafik kazası tazminatları.' },
    { icon: '🏪', title: 'Ticaret Hukuku', text: 'Şirket kuruluşu, birleşme ve devralmalar, ticari sözleşmeler.' },
    { icon: '🛡️', title: 'Tüketici Hukuku', text: 'Tüketici hakları, ayıplı mal/hizmet ve abonelik sözleşmeleri.' },
  ]

  return (
    <section id="alanlarimiz" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Uzmanlık Alanlarımız</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Geniş kapsamlı hukuki hizmetlerimizle müvekkillerimizin ihtiyaçlarına özel çözümler sunuyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="practice-area-card bg-white rounded-lg shadow-md p-8 transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 shrink-0">
                <span className="text-2xl">{area.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-sm md:text-base text-gray-600 flex-1">{area.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}