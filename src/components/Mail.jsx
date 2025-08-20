import emailjs from 'emailjs-com'
import { useContext, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DarkMode } from '../context/darkMode'
import PropTypes from 'prop-types'

export function Mail() {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const { isDarkMode } = useContext(DarkMode)

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
        className={`flex flex-col rounded-lg border-2 max-h-full w-full h-full ${
          isDarkMode ? 'border-gray-400 bg-light' : 'border-grayC bg-dark'
        }`}
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
                className={`font-bold sm:flex items-center justify-cente rounded-xl px-10 py-2 hover:bg-pink duration-500 ${
                  isDarkMode ? 'bg-black text-gray-100' : 'bg-light text-dark'
                }`}
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

export function MailText({ isDark }) {
  const experiences = [
    {
      image: 'pc.png',
      title: 'Programming Community',
      role: 'committee',
      period: '2023 - Present',
      description: `Sebagai Anggota Komite Divisi Kurikulum di Programming Community Bumigora University sejak September 2023, saya terlibat dalam sesi mentoring mingguan, pembuatan materi pembelajaran terstruktur, berbagi pengetahuan, serta berpartisipasi dalam perencanaan dan pelaksanaan acara organisasi.`,
    },
    {
      image: 'flss.webp',
      title: 'Full Stack Lombok',
      role: 'Front End Developer',
      period: '2025 - Present',
      description: `Mengembangkan dan memelihara aplikasi web menggunakan JavaScript, TypeScript, React.js, dan Next.js, sambil berkolaborasi dengan klien dan anggota tim untuk membahas persyaratan dan pembaruan proyek, serta menerapkan seo dan menguji fitur baru untuk memastikan kompatibilitas di seluruh browser dan perangkat.`,
    },
  ]

  return (
    <div className="rounded-lg h-full w-full flex flex-col relative ">
      <h1 className="text-2xl font-bold mb-6">Experience</h1>

      <div className="relative pl-10">
        {/* Garis timeline vertikal */}
        <div
          className={`absolute left-2 md:left-5 w-[3px] h-full ${
            isDark ? 'bg-darkO' : 'bg-lightO'
          }`}
        ></div>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative flex items-start group">
            {/* Dot timeline */}
            <div
              className={`absolute -left-[38px] md:-left-[26px] mt-1 w-4 h-4 rounded-full z-10 group-hover:bg-pink transition-transform duration-300 group-hover:scale-125 ${
                isDark ? 'bg-dark' : 'bg-light'
              } `}
            ></div>

            <div className="ml-6">
              <div className="flex flex-row justify-start items-center gap-2">
                <img src={exp.image} alt={exp.title} className="w-auto h-10" />
                <h2 className="font-semibold text-start text-lg">
                  {exp.title}
                </h2>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {`${exp.period} (${exp.role})`}
              </span>
              <p className="mt-2 text-left md:text-justify">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
MailText.propTypes = {
  isDark: PropTypes.bool,
}
