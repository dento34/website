import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticlesPage from '@/components/ArticlesPage'

export const metadata: Metadata = {
  title: 'Hukuk Makaleleri | Av. Aylin Dağadası Ünal | Konya Aile Hukuku',
  description: 'Konya\'da aile hukuku, boşanma davaları, velayet ve nafaka konularında uzman görüşler. Güncel hukuki makaleler ve hukuki danışmanlık içerikleri.',
  keywords: 'hukuk makaleleri, aile hukuku, boşanma davası, velayet, nafaka, konya avukat, hukuki danışmanlık',
}

export default function MakalelerPage() {
  return (
    <main>
      <Header />
      <ArticlesPage />
      <Footer />
    </main>
  )
}