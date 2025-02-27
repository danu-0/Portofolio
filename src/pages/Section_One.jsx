import { Button, ButtonSkills } from '../components/Buttons'
import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faFigma,
  faFlutter,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

function SectionOne() {
  return (
    <div
      id="about"
      className="flex flex-col bg-gray-100 h-auto w-full md:flex-row md:h-screen"
    >
      <div className=" flex flex-col justify-start w-full p-8 md:w-3/6 h-full ">
        <div
          className="h-80 w-full rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${'self.jpg'})` }}
        ></div>
        <div className="flex flex-col items-start h-auto w-full py-4">
          <h1 className="font-bold text-5xl">DANU HAERIDA PUTRA</h1>
          <ul className="mb-5 font-thin">
            <li>✨ Interest, Learn, Develop and Apply</li>
          </ul>
          <Button name="My CV" />
        </div>
      </div>
      <div className=" text-justify  flex flex-col w-full md:w-3/6 h-full ">
        <div className="p-6">
          <h1 className="font-bold text-3xl mb-4">BIODATA</h1>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">Nama:</span> Danu
              <br />
              <span className="font-semibold">Umur:</span> 23 tahun
              <br />
              <span className="font-semibold">Negara:</span> Indonesia
              <br />
              <span className="font-semibold">Job Desk:</span> Fullstack
              Developer
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
