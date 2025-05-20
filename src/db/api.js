const BASE_URL = import.meta.env.VITE_BASE_URL

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`)
    return response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchProjectById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/project/${id}`)
    if (!response.ok) {
      throw new Error('Project not found')
    }
    return response.json()
  } catch (error) {
    console.error(`Error fetching project with id ${id}:`, error)
    throw error
  }
}
