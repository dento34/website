import Image from 'next/image'

export default function About() {
  return (
    <section id="hakkimizda" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Image 
              src="/images/aylin-dagadasi-avukat.jpeg" 
              alt="Konya Karatay Hukuk Bürosu - Av. Aylin Dağadası Ünal Ofis" 
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Hakkımızda</h2>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              AV. AYLİN DAĞADASI ÜNAL HUKUK & DANIŞMANLIK bürosu Av. Aylin DAĞADASI ÜNAL tarafından kurulmuştur.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Konya merkezli büromuz, özellikle <strong>aile hukuku</strong> alanında uzmanlaşmış olup, 
              boşanma davaları, velayet süreçleri ve nafaka hesaplamaları konularında müvekkillerimize 
              kapsamlı hizmet sunmaktadır.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-10">
              Yargılamaların masraflı ve uzun sürmesi gibi olumsuz yönlerine alternatif yargılama faaliyeti 
              olarak kabul gören <em>arabuluculuk</em> ve hakemlik hizmetlerini de veren büromuz aynı zamanda 
              uluslararası şirketlerin danışmanlığı ve uzman sıfatıyla bilimsel mütalaa hizmetlerinde de bulunmaktadır.
            </p>
            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Av. Aylin DAĞADASI ÜNAL</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Kırklareli Üniversitesi Hukuk Fakültesi&apos;nden 2021 yılında derece ile mezun olduktan sonra, 
                avukatlık stajını Konya&apos;da faaliyet gösteren Fatih Ruşen Avukatlık Ortaklığı bünyesinde 
                tamamlamış ve Necmettin Erbakan Üniversitesi&apos;nde İcra ve İflas Hukuku alanında yüksek 
                lisans eğitimi almıştır.
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                2023 yılında <strong>Konya Karatay</strong>&apos;da kurduğu &quot;Av. Aylin DAĞADASI ÜNAL Hukuk & Danışmanlık&quot; 
                bürosu aracılığıyla, bireysel ve kurumsal müvekkillere etkin, çözüm odaklı ve profesyonel 
                hukuki hizmetler sunmaya başlamıştır.
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Her dosyaya titizlikle yaklaşan ve müvekkillerinin haklarını sonuna kadar korumayı ilke 
                edinen bir anlayışla çalışan avukatımız; hukukun evrensel değerlerini temel alarak adil, 
                etkili ve şeffaf bir hizmet sunmaktadır.
              </p>
              <div className="mt-6 mb-8 text-center">
                <p className="text-sm md:text-base text-gray-700 italic">
                  Dertsiz, davasız bir yaşam dileği ile…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}