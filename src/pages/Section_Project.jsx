import { fetchData } from '../db/api'
import { useContext, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ButtonsProject } from '../components/Buttons'
import { DarkMode } from '../context/darkMode'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaProjectDiagram } from 'react-icons/fa'

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const [projectList, setProjectList] = useState([])
  const navigate = useNavigate()
  const { isDarkMode } = useContext(DarkMode)

  const getData = async () => {
    const cached = sessionStorage.getItem('projectList')
    if (cached) {
      setProjectList(JSON.parse(cached))
      return
    }
    const data = await fetchData('project')
    setProjectList(data)
    sessionStorage.setItem('projectList', JSON.stringify(data))
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projectList.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projectList.length - 1 ? 0 : prevIndex + 1
    )
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div
      id="project"
      className={`relative flex flex-col items-center h-screen py-4 overflow-hidden ${
        isDarkMode ? 'bg-light text-dark' : 'bg-dark text-light'
      }`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDarkMode ? 'bg-grid-black-05' : 'bg-grid-white-05'
        }`}
        style={{
          maskImage:
            'radial-gradient(ellipse at bottom, rgba(0,0,0,0.5) 0.50%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at bottom, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0) 100%)',
        }}
      ></div>

      <div className=" w-full flex flex-row justify-start items-center  px-8 md:pb-8 gap-2">
        <FaProjectDiagram size={35} />
        <h1 className="font-bold text-3xl">Project List</h1>
      </div>

      {/* Container Carousel */}
      <div className="flex overflow-hidden items-center w-11/12 relative h-full rounded-lg mx-6 z-10">
        {projectList.map((project, index) => {
          const offset = (index - activeIndex) * 100
          const scale = index === activeIndex ? 1 : 0.9
          const opacity = index === activeIndex ? 1 : 0.7
          const shadow = index === activeIndex ? `0px 0px 5px ` : 'none'

          return (
            <div
              key={project.id}
              className="absolute transition-all duration-300 ease-in-out h-auto w-auto flex justify-center items-center"
              style={{
                transform: `translateX(${offset}%) scale(${scale})`,
                opacity: opacity,
                left: '5%',
              }}
            >
              <div
                className="border-2 border-grayC rounded-lg overflow-hidden w-[320px] h-fit md:w-96 md:h-auto p-2"
                style={{ boxShadow: shadow }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 bg-cover bg-center"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 truncate">
                    {project.title}
                  </h2>
                  <p
                    className={` mb-4 line-clamp-6 font-light text-sm ${
                      isDarkMode ? 'text-gray-800' : 'text-gray-300'
                    }`}
                  >
                    {project.description}
                  </p>
                  <AnimatePresence>
                    <div className="flex gap-2 flex-row justify-around">
                      <ButtonsProject
                        isDark={isDarkMode}
                        text="Git Hub"
                        onClick={() => window.open(`${project.link}`, '_blank')}
                        className="px-2 md:px-6 py-2"
                      />
                      <ButtonsProject
                        isDark={isDarkMode}
                        text="Deploy"
                        onClick={() =>
                          window.open(`${project.deploy}`, '_blank')
                        }
                        className="px-2 md:px-6 py-2"
                      />
                      <motion.button
                        className={`font-bold sm:flex items-center justify-center rounded-xl px-2 md:px-4 py-2 hover:bg-pink duration-500 ${
                          isDarkMode
                            ? 'bg-dark text-light'
                            : 'bg-light text-dark'
                        }`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.4 }}
                        onClick={() =>
                          navigate(`/project/${project.id}`, {
                            state: {
                              title: project.title,
                              description: project.description,
                              image: project.image,
                              link: project.link,
                              deploy: project.deploy,
                            },
                          })
                        }
                      >
                        Detail
                      </motion.button>
                    </div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="md:mt-8 flex space-x-8 z-10">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-12 h-12 hover:text-pink"
        >
          <FontAwesomeIcon icon={faCaretLeft} className="text-4xl" />
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12 hover:text-pink"
        >
          <FontAwesomeIcon icon={faCaretRight} className="text-4xl" />
        </button>
      </div>
    </div>
  )
}

export default ProjectCarousel
