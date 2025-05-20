import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Mail() {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('Email berhasil dikirim!', result.text)
          alert('Pesan berhasil dikirim!')
          setIsLoading(false)
        },
        (error) => {
          console.log('Gagal mengirim email.', error.text)
          alert('Gagal mengirim pesan. Silakan coba lagi.')
          setIsLoading(false)
        }
      )
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold mb-4">Contact Me</h1>
      <p className="text-justify">
        Mari terhubung dan jelajahi peluang untuk berkolaborasi, belajar, dan
        tumbuh bersama!🤝Baik mendiskusikan proyek, berbagi wawasan, atau
        menjelajahi teknologi baru, saya selalu terbuka untuk koneksi yang
        bermakna. Jangan ragu untuk mengirimi saya permintaan koneksi atau
        pesan.
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col rounded-lg border-2 border-gray-400 bg-gray-200 max-h-full w-full h-full"
      >
        <div className="flex flex-col py-6 px-2 flex-grow">
          <label htmlFor="email" className="font-bold my-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grayC  leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="from_name"
            type="email"
            placeholder="Example@gmail.com"
            required
          />
          <label htmlFor="content" className="font-bold my-2">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full h-60 py-2 px-3  text-grayC  leading-tight focus:outline-none focus:shadow-outline resize-none mb-6 text-start"
            name="message"
            id="content"
            placeholder="Write Message Here..."
            required
          />
          <input type="hidden" name="to_name" value="Danu Haerida Putra" />
          <div className="flex w-full justify-center items-center">
            <AnimatePresence>
              <motion.button
                className="font-bold sm:flex items-center justify-center bg-black text-gray-100 rounded-xl px-10 py-2 hover:bg-pink duration-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                type="submit"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </motion.button>
            </AnimatePresence>
          </div>
        </div>
      </form>
    </div>
  )
}

export function MailText() {
  return (
    <div className="rounded-lg h-full w-full flex flex-col">
      <h1 className="text-xl font-bold mb-4">Experience</h1>
      <ul>
        <li>
          <h1 className="font-bold my-4">
            💻Programming Community Bumigora University (2023 - Present)
          </h1>
          <p>
            Sebagai Anggota Komite Divisi Kurikulum di Programming Community
            Bumigora University sejak September 2023, saya terlibat dalam sesi
            mentoring mingguan, pembuatan materi pembelajaran terstruktur,
            berbagi pengetahuan, serta berpartisipasi dalam perencanaan dan
            pelaksanaan acara organisasi.
          </p>
        </li>
        <li>
          <h1 className="font-bold my-4">
            🌐 FREELANCE SOCIAL MEDIA(2025 - Present)
          </h1>
          <p>
            Sebagai Digital Illustration Artist, saya berinteraksi dengan klien
            untuk memahami visi dan kebutuhan mereka, memberikan saran kreatif,
            mengembangkan konsep visual, mengelola tenggat waktu proyek, serta
            menangani tugas administratif seperti penagihan, kontrak, dan
            komunikasi klien melalui email atau media sosial.
          </p>
        </li>
      </ul>
    </div>
  )
}
