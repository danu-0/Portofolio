import { useContext, useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { fetchProjectById } from '../db/api'
import { ButtonsProject } from './Buttons'
import { TailSpin } from 'react-loader-spinner'
import { DarkMode } from '../context/darkMode'
import { Mail } from './Mail'
import FooterSection from '../pages/Footer'

const Detail = () => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [project, setProject] = useState(location.state || null)
  const [loading, setLoading] = useState(!location.state)
  const { isDarkMode } = useContext(DarkMode)

  useEffect(() => {
    if (!project) {
      fetchProjectById(id)
        .then((data) => setProject(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    }
  }, [id, project])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    navigate(-1)
  }
  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <TailSpin color="blue" height={80} width={80} />
      </div>
    )
  }

  if (!project) {
    return <p>Project tidak di temukan</p>
  }

  return (
    <>
      <div
        className={`absolute h-full w-full inset-0 pointer-events-none ${
          isDarkMode ? 'bg-grid-black-05' : 'bg-grid-white-05'
        } [mask-image:radial-gradient(ellipse_at_bottom,transparent_1%,black)]`}
      ></div>
      <div
        className={`h-auto w-full flex flex-col items-center py-4 gap-4 ${
          isDarkMode ? 'bg-light text-dark' : 'bg-dark text-light'
        }`}
      >
        <div className="w-[80%] md:w-[50%] h-auto gap-4 flex flex-col items-center">
          <img
            className="rounded-xl border border-pink "
            src={project.image}
            alt={project.title}
          />
        </div>
        <div className="flex flex-col w-[80%] items-center">
          <div className="flex flex-wrap gap-4 my-4">
            <ButtonsProject
              isDark={isDarkMode}
              text="GitHub"
              onClick={() => window.open(project.link, '_blank')}
              className="px-4 md:px-12 py-4"
            />
            <ButtonsProject
              isDark={isDarkMode}
              text="Live Demo"
              onClick={() => window.open(project.deploy, '_blank')}
              className="px-4 md:px-12 py-4"
            />
            <ButtonsProject
              isDark={isDarkMode}
              text="Back"
              onClick={handleBack}
              className="px-4 md:px-12 py-4"
            />
          </div>
          <h1 className="text-3xl md:text-xl font-extrabold mb-4 underline">
            {project.title}
          </h1>
          <p className="text-base md:text-md leading-relaxed mb-6 text-justify">
            {project.description}
          </p>
          <div
            className={`h-[1px] w-full ${isDarkMode ? 'bg-dark' : 'bg-light'}`}
          ></div>
          <Mail className="items-center mt-4" />
        </div>
      </div>
      <FooterSection />
    </>
  )
}
export default Detail

{
  /* <div
      className={`flex flex-col-reverse md:flex-row w-full min-h-screen ${
        isDarkMode ? 'bg-light text-dark' : 'bg-dark text-light'
      }`}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-justify">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4">
          <ButtonsProject
            isDark={isDarkMode}
            text="GitHub"
            onClick={() => window.open(project.link, '_blank')}
            className="px-4 md:px-12 py-4"
          />
          <ButtonsProject
            isDark={isDarkMode}
            text="Live Demo"
            onClick={() => window.open(project.deploy, '_blank')}
            className="px-4 md:px-12 py-4"
          />
          <ButtonsProject
            isDark={isDarkMode}
            text="Back"
            onClick={handleBack}
            className="px-4 md:px-12 py-4"
          />
        </div>
      </div>

      <div className=" flex-col gap-2 w-full md:w-1/2 bg-pink flex items-center justify-center p-4 text-2xl md:text-3xl">
        <h1 className="font-semibold text-white">✨ UI View</h1>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl shadow-lg max-h-[400px] w-full object-cover"
        />
      </div>
    </div> */
}
