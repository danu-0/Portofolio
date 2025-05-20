import { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { fetchProjectById } from '../db/api'
import { ButtonsProject } from './Buttons'
import { TailSpin } from 'react-loader-spinner'

const Detail = () => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [project, setProject] = useState(location.state || null)
  const [loading, setLoading] = useState(!location.state)

  useEffect(() => {
    if (!project) {
      fetchProjectById(id)
        .then((data) => setProject(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false))
    }
  }, [id, project])

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
    <div className="flex flex-col-reverse md:flex-row w-full min-h-screen bg-white text-gray-800">
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 bg-gradient-to-br from-gray-100 to-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-base md:text-lg leading-relaxed mb-6 text-justify">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4">
          <ButtonsProject
            text="GitHub"
            onClick={() => window.open(project.link, '_blank')}
            className="px-4 md:px-12 py-4 bg-gray-900"
          />
          <ButtonsProject
            text="Live Demo"
            onClick={() => window.open(project.deploy, '_blank')}
            className="px-4 md:px-12 py-4 bg-gray-900"
          />
          <ButtonsProject
            text="Back"
            onClick={handleBack}
            className="px-4 md:px-12 py-4 bg-gray-900"
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
    </div>
  )
}
export default Detail
