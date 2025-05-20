import { fetchData } from '../db/api'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ButtonsProject } from '../components/Buttons'

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const [projectList, setProjectList] = useState([])
  const navigate = useNavigate()

  const getData = async () => {
    const chaced = sessionStorage.getItem('projectList')
    if (chaced) {
      setProjectList(JSON.parse(chaced))
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
      className="flex flex-col items-center h-screen py-4 bg-gray-100 "
    >
      <h1 className="flex w-full font-bold text-3xl px-8 md:pb-8">
        Project List ✨
      </h1>
      {/* Container Carousel */}
      <div className="flex overflow-hidden items-center w-11/12 relative h-full rounded-lg mx-6">
        {projectList.map((project, index) => {
          const offset = (index - activeIndex) * 100 // jarak antara card
          const scale = index === activeIndex ? 1 : 0.9 // Scaling card yang aktif dan tidak aktif
          const opacity = index === activeIndex ? 1 : 0.7 // Opacity card yang tidak aktif
          const shadow = index === activeIndex ? '0px 0px 5px gray' : 'none' //shadow

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
                  <p className="text-gray-700 mb-4 line-clamp-6 font-light text-sm">
                    {project.description}
                  </p>
                  <AnimatePresence>
                    <div className="flex gap-2 flex-row justify-around">
                      <ButtonsProject
                        text="Git Hub"
                        onClick={() => window.open(`${project.link}`, '_blank')}
                        className="px-2 md:px-6 py-2 bg-gray-900"
                      />
                      <ButtonsProject
                        text="Deploy"
                        onClick={() =>
                          window.open(`${project.deploy}`, '_blank')
                        }
                        className="px-2 md:px-6 py-2 bg-gray-900"
                      />
                      <motion.button
                        className="font-bold sm:flex items-center justify-center bg-gray-900 text-gray-100 rounded-xl px-2 md:px-4 py-2 hover:bg-pink duration-500"
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

      <div className="md:mt-8 flex space-x-8">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-12 h-12"
        >
          <div className="triangle-left"></div>
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12"
        >
          <div className="triangle-right"></div>
        </button>
      </div>
    </div>
  )
}

export default ProjectCarousel
