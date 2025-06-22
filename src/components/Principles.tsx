export default function Principles() {
  const principles = [
    {
      icon: "📋",
      title: "Şeffaflık ve Bilgilendirme",
      description: "Müvekkillerimizin hukuki süreçlerinin her aşamasından tam olarak bilgi sahibi olmasını sağlarız."
    },
    {
      icon: "🤝",
      title: "İstişare ve Ortak Karar",
      description: "Müvekkillerimizle durumu istişare ederek en doğru adımları birlikte kararlaştırırız."
    },
    {
      icon: "💡",
      title: "Yenilikçi Stratejiler",
      description: "Yenilikçi, pragmatik stratejiler ve sıkı bir çalışma temposu ile en iyi sonuçları hedefleriz."
    },
    {
      icon: "🛡️",
      title: "Dürüstlük ve Meslek Ahlakı",
      description: "Tüm faaliyetlerimizde ahlaki ve mesleki standartları en üst düzeyde gözetiriz."
    },
    {
      icon: "🏆",
      title: "Nitelikli ve Kaliteli Hizmet",
      description: "Bilgimizi, entelektüel titizliğimizi ve tecrübelerimizi birleştirerek kaliteli hizmet sunarız."
    },
    {
      icon: "🧭",
      title: "Pazar Odaklı Yaklaşım",
      description: "Piyasa dinamiklerini gözeten, güncel ve pratik yasal tavsiyelerle yol gösteririz."
    }
  ]

  return (
    <section id="ilkelerimiz" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">İlkelerimiz</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Hizmet kalitemizi ve müvekkil memnuniyetini en üst düzeyde tutan çalışma prensiplerimiz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="principle-card bg-gray-50/50 rounded-lg shadow-md p-8 text-center transition-all duration-300 border border-gray-100 flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">{principle.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-sm md:text-base text-gray-600 flex-1">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}