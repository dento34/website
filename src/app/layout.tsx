import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Av. Aylin Dağadası Ünal | Aile Hukuku Uzmanı | Konya Hukuk Bürosu',
  description: 'Konya\'da aile hukuku, boşanma davaları, velayet ve nafaka konularında deneyimli avukat. Güvenilir hukuki danışmanlık ve çözüm odaklı hizmet. ☎️ 0533 412 31 39',
  keywords: 'avukat konya, aile hukuku, boşanma davası, velayet, nafaka, hukuk bürosu karatay, hukuki danışmanlık',
  authors: [{ name: 'Av. Aylin Dağadası Ünal' }],
  openGraph: {
    title: 'Av. Aylin Dağadası Ünal | Aile Hukuku Uzmanı | Konya',
    description: 'Konya\'da aile hukuku, boşanma ve velayet davaları konusunda deneyimli avukat. Güvenilir hukuki çözümler ve profesyonel destek.',
    url: 'https://aylindagadasi.github.io',
    siteName: 'Av. Aylin Dağadası Ünal Hukuk & Danışmanlık',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Av. Aylin Dağadası Ünal | Aile Hukuku Uzmanı | Konya',
    description: 'Konya\'da aile hukuku, boşanma ve velayet davaları konusunda deneyimli avukat hizmetleri.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://aylindagadasi.github.io/" />
        <link rel="icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Av. Aylin Dağadası Ünal Hukuk & Danışmanlık",
              "description": "Konya ve çevresinde aile hukuku, boşanma davaları, velayet ve nafaka konularında uzman avukat hizmetleri",
              "url": "https://aylindagadasi.github.io",
              "telephone": "+905334123139",
              "email": "aylindagadasi@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Akabe Mah. Akgöl Sk. Palabıyıklar Plaza 24A-110",
                "addressLocality": "Karatay",
                "addressRegion": "Konya",
                "postalCode": "42020",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.86088210878104",
                "longitude": "32.51656887636301"
              },
              "openingHours": "Mo-Fr 08:00-18:30",
              "priceRange": "$$",
              "areaServed": [
                { "@type": "City", "name": "Konya" },
                { "@type": "AdministrativeArea", "name": "Karatay" },
                { "@type": "AdministrativeArea", "name": "Selçuklu" },
                { "@type": "AdministrativeArea", "name": "Meram" }
              ],
              "serviceType": ["Aile Hukuku", "Boşanma Davaları", "Velayet Davaları", "Nafaka Hesaplama", "Arabuluculuk", "Hukuki Danışmanlık"],
              "attorney": {
                "@type": "Person",
                "name": "Aylin Dağadası Ünal",
                "jobTitle": "Avukat",
                "alumniOf": "Kırklareli Üniversitesi Hukuk Fakültesi",
                "memberOf": {
                  "@type": "Organization",
                  "name": "Konya Barosu"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
      </head>
      <body className="bg-gray-50 text-base">
        {children}
      </body>
    </html>
  )
}