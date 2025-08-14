import { ButtonSkills } from '../components/Buttons'
import { motion } from 'framer-motion'

import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faFigma,
  faFlutter,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { getAge } from '../components/CalculateAge'
import { useContext } from 'react'
import { DarkMode } from '../context/darkMode'

function SectionOne() {
  const { isDarkMode } = useContext(DarkMode)
  const age = getAge('2002-10-02')

  return (
    <div
      id="about"
      className={`flex flex-col h-auto w-full md:flex-row md:h-screen
        ${isDarkMode ? ' bg-light  text-dark' : 'bg-dark text-light'}
      `}
    >
      <div className=" flex flex-col justify-start w-full p-8 md:w-3/6 h-full ">
        <div
          className="h-80 w-full rounded-xl bg-cover bg-center shadow-sm shadow-gray-400"
          style={{ backgroundImage: `url(${'self.jpg'})` }}
        ></div>
        <div className="flex flex-col items-start h-auto w-full py-4">
          <h1 className="font-bold text-5xl">DANU HAERIDA PUTRA</h1>
          <ul className="mb-5 font-thin">
            <li>✨ Interest, Learn, Develop and Apply</li>
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
        </div>
      </div>
      <div className=" text-justify  flex flex-col w-full md:w-3/6 h-full ">
        <div className="p-6">
          <h1 className="font-bold text-3xl mb-4">BIODATA</h1>
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
                <td>: Fullstack Developer</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-6">
          <h1 className="font-bold text-3xl">ABOUT ME</h1>
          <p>
            Saya seorang mahasiswa Ilmu Komputer dengan minat kuat pada aplikasi
            seluler dan pengembangan web. Mahir dalam mengembangkan aplikasi web
            menggunakan React.js dan aplikasi seluler menggunakan Flutter,
            termasuk pengembangan UI, implementasi CRUD REST API, desain
            responsif, ilustrasi aset, dan desain database. Saya memiliki
            pengalaman bekerja dalam tim dan saya sangat termotivasi untuk terus
            meningkatkan keterampilan saya di bidang teknologi dan berkontribusi
            pada aspek sosial industri
          </p>
        </div>
        <div className="p-6">
          <h1 className="font-bold text-3xl">Skills</h1>
          <div className="h-auto">
            <ul className="flex flex-wrap">
              <ButtonSkills isDark={isDarkMode} name="Javascript" icon={faJs} />
              <ButtonSkills isDark={isDarkMode} name="HTML 5" icon={faHtml5} />
              <ButtonSkills isDark={isDarkMode} name="CSS" icon={faCss3} />
              <ButtonSkills
                isDark={isDarkMode}
                name="Flutter"
                icon={faFlutter}
              />
            </ul>
            <ul className="flex flex-wrap">
              <ButtonSkills
                isDark={isDarkMode}
                name="React JS"
                icon={faReact}
              />
              <ButtonSkills
                isDark={isDarkMode}
                name="Tailwind"
                iconSrc={isDarkMode ? 'Tailwind CSS-min.png' : 'tw.png'}
              />
              <ButtonSkills isDark={isDarkMode} name="Figma" icon={faFigma} />
              <ButtonSkills
                isDark={isDarkMode}
                name="MySql"
                icon={faDatabase}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne
