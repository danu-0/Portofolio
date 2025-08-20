import { motion } from 'framer-motion'

import { getAge } from '../components/CalculateAge'
import { useContext, useEffect, useState } from 'react'
import { DarkMode } from '../context/darkMode'
import Skil from '../components/skill'
import Cuntributor from '../components/Cuntributor'
import { FaCode } from 'react-icons/fa'
import { FaFire } from 'react-icons/fa'
import { BsClipboard2DataFill } from 'react-icons/bs'
import { Helmet } from 'react-helmet-async'

const quotes = [
  '✨ Interest, Learn, Develop and Apply',
  '🚀 Keep building, keep growing',
  "💡 Code is like humor, it works better when it's simple",
  '🌱 Learning never exhausts the mind',
  '🔥 Consistency beats motivation',
]

function SectionOne() {
  const { isDarkMode } = useContext(DarkMode)
  const age = getAge('2002-10-02')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [quotes.length])

  const description = `Saya seorang pengembang web dan aplikasi seluler dengan
  fokus pada pengalaman pengguna dan solusi fungsional. Terbiasa membangun aplikasi modern
  menggunakan React.js untuk web dan Flutter untuk mobile, mencakup desain antarmuka,
  integrasi REST API, hingga perancangan basis data.`

  return (
    <>
      <Helmet>
        <title>Danu Haerida Putra | Front End Developer</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.danuportofolio.online/" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Danu Haerida Putra',
            url: 'https://www.danuportofolio.online/',
            jobTitle: 'Front End Developer',
            description: description,
            image: 'https://www.danuportofolio.online/self.jpg',
            sameAs: [
              'https://github.com/username',
              'https://linkedin.com/in/username',
            ],
          })}
        </script>
      </Helmet>
      <div
        id="about"
        className={`flex overflow-hidden flex-col h-auto w-full md:flex-row md:h-screen lg:h-auto
        ${isDarkMode ? ' bg-light text-dark' : 'bg-dark text-light'}
      `}
      >
        <div
          className={`absolute inset-0 pointer-events-none ${
            isDarkMode ? 'bg-grid-black-05' : 'bg-grid-white-05'
          } [mask-image:radial-gradient(ellipse_at_bottom,transparent_1%,black)]`}
        ></div>

        <div className=" flex flex-col justify-start w-full p-8 md:w-3/6 h-full ">
          <div
            className="h-80 w-full rounded-xl bg-cover bg-center shadow-sm shadow-lightO"
            style={{ backgroundImage: `url(${'self.jpg'})` }}
            role="img"
            aria-label="foto"
          ></div>
          <div className="flex flex-col items-start h-auto w-full py-4">
            <h1 className="font-bold text-5xl">DANU HAERIDA PUTRA</h1>
            <ul className="mb-5 font-light">
              <li>{quotes[index]}</li>
            </ul>

            <motion.button
              className={`font-bold sm:flex items-center justify-center px-10 py-2 hover:bg-pink duration-500 rounded-xl ${
                isDarkMode ? ' bg-dark text-light ' : 'bg-light text-dark'
              }
            `}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1-iaLx8roxEiuuw5ftYK2KJrItBMl_gj9/view?usp=sharing',
                  '_blank'
                )
              }
            >
              My CV
            </motion.button>
            <Cuntributor />
          </div>
        </div>
        <div className=" text-justify  flex flex-col w-full h-auto md:w-3/6">
          <div className="flex flex-col p-6 gap-2">
            <div className="flex flex-row gap-2 items-center">
              <BsClipboard2DataFill size={30} />
              <h1 className="font-bold text-3xl">Biodata</h1>
            </div>
            <table className="table-auto p-2 font-semibold text-lg">
              <tbody>
                <tr>
                  <td className="pr-4">Name</td>
                  <td>: DANU HAERIDA PUTRA</td>
                </tr>
                <tr>
                  <td className="pr-4">Age</td>
                  <td>{`: ${age} YO`}</td>
                </tr>
                <tr>
                  <td className="pr-4">Country</td>
                  <td>: Indonesia</td>
                </tr>
                <tr>
                  <td className="pr-4">Role</td>
                  <td>: Front End Developer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col p-6 gap-2">
            <div className="flex flex-row gap-2 items-center">
              <FaFire size={30} />
              <h1 className="font-bold text-3xl">About Me</h1>
            </div>
            <p>
              Saya seorang pengembang{' '}
              <span className="text-blueE">web dan aplikasi seluler</span>{' '}
              dengan fokus pada pengalaman pengguna dan solusi fungsional.
              Terbiasa membangun aplikasi modern menggunakan{' '}
              <span className="text-blueE">React.js</span> untuk web dan{' '}
              <span className="text-blueE">Flutter</span> untuk mobile, mencakup
              desain antarmuka, integrasi REST API, hingga perancangan basis
              data. Berpengalaman berkolaborasi dalam tim lintas disiplin, saya
              terus mengembangkan keterampilan agar dapat memberikan dampak
              nyata melalui teknologi.
            </p>
          </div>
          <div className="p-6 flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <FaCode size={30} />
              <h1 className="font-bold text-3xl">Skills</h1>
            </div>
            <p className="text-sm md:text-base mb-4">
              Saya terbiasa bekerja dengan teknologi modern untuk membangun
              aplikasi web yang cepat, responsif, dan indah. Berikut beberapa
              tools & framework yang sering saya gunakan:
            </p>
            <div className="h-auto flex flex-col gap-1 md:gap-5">
              <Skil direction="right" />
              <Skil direction="left" />
              <Skil direction="right" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionOne
