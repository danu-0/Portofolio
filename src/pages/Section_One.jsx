import { ButtonSkills } from '../components/Buttons'
import { motion, AnimatePresence } from 'framer-motion'

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

function SectionOne() {
  const age = getAge('2002-10-02')

  return (
    <div
      id="about"
      className="flex flex-col bg-gray-100 h-auto w-full md:flex-row md:h-screen"
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
          <AnimatePresence>
            <motion.button
              className="font-bold sm:flex items-center justify-center bg-black text-gray-100 rounded-xl px-10 py-2 hover:bg-pink duration-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1pnT-idiPL0ni5760BzS7g9QlKAPeztaL/view?usp=sharing',
                  '_blank'
                )
              }
            >
              My CV
            </motion.button>
          </AnimatePresence>
        </div>
      </div>
      <div className=" text-justify  flex flex-col w-full md:w-3/6 h-full ">
        <div className="p-6">
          <h1 className="font-bold text-3xl mb-4">BIODATA</h1>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Name:</span> Danu Haerida Putra
              <br />
              <span className="font-semibold">Age:</span> {age} YO
              <br />
              <span className="font-semibold">Country:</span> Indonesia
              <br />
              <span className="font-semibold">Role:</span> Fullstack Developer
              <br />
            </p>
          </div>
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
              <ButtonSkills name="Javascript" icon={faJs} />
              <ButtonSkills name="HTML 5" icon={faHtml5} />
              <ButtonSkills name="CSS" icon={faCss3} />
              <ButtonSkills name="Flutter" icon={faFlutter} />
            </ul>
            <ul className="flex flex-wrap">
              <ButtonSkills name="React JS" icon={faReact} />
              <ButtonSkills name="Tailwind" iconSrc="Tailwind CSS.png" />
              <ButtonSkills name="Figma" icon={faFigma} />
              <ButtonSkills name="MySql" icon={faDatabase} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne
