import { useContext } from 'react'
import { Mail, MailText } from '../components/Mail'
import { DarkMode } from '../context/darkMode'
import { MdTouchApp } from 'react-icons/md'

function MailToMe() {
  const { isDarkMode } = useContext(DarkMode)
  return (
    <div
      className={`relative flex flex-col items-start ${
        isDarkMode ? 'bg-light text-dark ' : 'bg-dark text-light '
      }`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDarkMode ? 'bg-grid-black-05' : 'bg-grid-white-05'
        }`}
        style={{
          maskImage:
            'radial-gradient(ellipse at top, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at top, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0) 100%)',
        }}
      ></div>
      <div className="flex flex-row w-full px-8 items-center">
        <MdTouchApp size={35} />
        <h1 className=" font-bold text-3xl">Touch Me</h1>
      </div>
      <div
        id="contact"
        className="flex flex-col h-auto w-full md:flex-row md:h-full  "
      >
        <div className="flex flex-col md:h-full w-full md:w-[50%] py-6 text-justify px-4 ">
          <MailText isDark={isDarkMode} />
        </div>
        <div className="flex flex-col md:h-full w-full md:w-[50%] px-4 py-6 md:px-16 ">
          <Mail />
        </div>
      </div>
    </div>
  )
}
export default MailToMe
