'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">İletişim</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Sorularınız veya hukuki danışmanlık talepleriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form className="bg-gray-50 rounded-lg shadow-md p-8" onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Bize Mesaj Gönderin</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base text-gray-700 mb-2">
                    Adınız Soyadınız
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="custom-input w-full px-4 py-2 rounded-lg bg-white" 
                    placeholder="Adınız Soyadınız"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm md:text-base text-gray-700 mb-2">
                    E-posta Adresiniz
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="custom-input w-full px-4 py-2 rounded-lg bg-white" 
                    placeholder="E-posta Adresiniz"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm md:text-base text-gray-700 mb-2">
                  Konu
                </label>
                <select 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="custom-input w-full px-4 py-2 rounded-lg bg-white"
                  required
                >
                  <option value="">Konu Seçiniz</option>
                  <option value="aile-hukuku">Aile Hukuku</option>
                  <option value="bosanma">Boşanma Davası</option>
                  <option value="velayet">Velayet Davası</option>
                  <option value="nafaka">Nafaka</option>
                  <option value="arabuluculuk">Arabuluculuk</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm md:text-base text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="custom-input w-full px-4 py-2 rounded-lg bg-white resize-none" 
                  placeholder="Mesajınız"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="bg-primary text-white hover:bg-primary/90 px-8 py-2 md:py-3 rounded-button font-medium transition-colors whitespace-nowrap w-full"
              >
                Gönder
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gray-50 rounded-lg shadow-md p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-6">İletişim Bilgilerimiz</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <span className="text-primary text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Adres</h4>
                    <p className="text-sm md:text-base text-gray-600">
                      Akabe Mah. Akgöl Sk. Palabıyıklar Plaza 24A-110 Karatay/KONYA
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <span className="text-primary text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Telefon</h4>
                    <p className="text-sm md:text-base text-gray-600">
                      <a 
                        href="tel:+905334123139" 
                        className="text-primary hover:underline font-semibold"
                        aria-label="Konya avukat telefon numarası"
                      >
                        0533 412 31 39
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <span className="text-primary text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">E-posta</h4>
                    <p className="text-sm md:text-base text-gray-600">
                      <a 
                        href="mailto:aylindagadasi@gmail.com" 
                        className="text-primary hover:underline"
                        aria-label="Konya avukat email"
                      >
                        aylindagadasi@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <span className="text-primary text-xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ÇALIŞMA SAATLERİMİZ</h4>
                    <p className="text-sm md:text-base text-gray-600">Pazartesi - Cuma: 08:00 - 18:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-lg overflow-hidden shadow-md h-96">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.052680436837!2d32.51656887636301!3d37.86088210878104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085734e7a536b%3A0x51197609a35e4e73!2sAkabe%2C%20Akg%C3%B6l%20Sk.%2024a%2C%2042020%20Karatay%2FKonya!5e0!3m2!1str!2str!4v1718027178044!5m2!1str!2str"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Konya Karatay Hukuk Bürosu Konumu"
          />
        </div>
      </div>
    </section>
  )
}