import { useContext, useEffect, useState } from 'react'
import { DarkMode } from '../context/darkMode'
import { SiGithub } from 'react-icons/si'
import { TailSpin } from 'react-loader-spinner'

function Cuntributor() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { isDarkMode } = useContext(DarkMode)
  const url = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    setLoading(true)
    fetch(`${url}/github/contributions/danu-0`)
      .then((res) => res.json())
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Gagal fetch data Kontribusi')
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) return <p>{error}</p>

  // Hitung tambahan
  const total = data?.totalContributions ?? 0
  const allDays = data?.weeks.flatMap((week) => week.contributionDays) ?? []
  const thisWeek = allDays
    .slice(-7)
    .reduce((a, b) => a + b.contributionCount, 0)
  const bestDay =
    allDays.length > 0
      ? Math.max(...allDays.map((d) => d.contributionCount))
      : 0
  const average = allDays.length > 0 ? Math.round(total / allDays.length) : 0

  const cont = [
    {
      title: 'Total',
      nilai: total,
    },
    {
      title: 'This Week',
      nilai: thisWeek,
    },
    {
      title: 'Best Day',
      nilai: bestDay,
    },
    {
      title: 'Avarage / day',
      nilai: average,
    },
  ]

  return (
    <div
      className={`flex flex-col h-full w-full pt-4 justify-between ${
        isDarkMode ? 'text-dark' : 'text-light'
      }`}
    >
      <div className="flex flex-row gap-2 items-center">
        <SiGithub />
        <h1>Contributions Github</h1>
      </div>
      <p className="font-light text-sm">
        My contributions from last year on github.
      </p>
      <div className=" w-80 grid grid-cols-2 gap-2 pt-2 px-1">
        {cont.map((e, index) => (
          <div
            key={index}
            className={`h-auto w-auto rounded-lg py-1 px-2 flex flex-col ${
              isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
          >
            <p className="font-light text-sm">{e.title}</p>
            {loading ? (
              <TailSpin color="blue" height={30} width={30} />
            ) : (
              <p className="text-pink font-extrabold text-3xl">{e.nilai}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cuntributor
