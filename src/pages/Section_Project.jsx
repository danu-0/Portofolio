import { fetchData } from '../db/api'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const [projectList, setProjectList] = useState([])

  const getData = async () => {
    const data = await fetchData('project')
    setProjectList(data)
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
      <h1 className="flex w-full font-bold text-xl px-8 md:pb-8">
        ✨ Project List
      </h1>
      {/* Container Carousel */}
      <div className="flex overflow-hidden items-center w-11/12 relative h-full rounded-lg mx-6">
        {projectList.map((project, index) => {
          // offset card
          const offset = (index - activeIndex) * 100 // 100 adalah jarak antara card
          const scale = index === activeIndex ? 1 : 0.9 // Scaling untuk card yang aktif dan tidak aktif
          const opacity = index === activeIndex ? 1 : 0.7 // Opacity untuk card yang tidak aktif

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
              <div className="border border-grayC rounded-lg overflow-hidden w-[320px] h-fit md:w-96 md:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 truncate">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 mb-4 line-clamp-6 font-light text-sm">
                    {project.description}
                  </p>
                  <AnimatePresence>
                    <motion.button
                      className="font-bold hidden sm:flex items-center justify-center bg-black text-gray-100 rounded-xl px-10 py-2 hover:bg-pink duration-500"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.4 }}
                      onClick={() => window.open(`${project.link}`, '_blank')}
                    >
                      Git Hub
                    </motion.button>
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
