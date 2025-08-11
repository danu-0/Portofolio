import { useContext } from 'react'
import { Mail, MailText } from '../components/Mail'
import { DarkMode } from '../context/darkMode'

function MailToMe() {
  const { isDarkMode } = useContext(DarkMode)
  return (
    <div
      className={`flex flex-col items-start ${
        isDarkMode ? 'bg-light text-dark ' : 'bg-dark text-light '
      }`}
    >
      <h1 className="flex w-full font-bold text-3xl px-8">Touch Me 📫</h1>
      <div
        id="contact"
        className="flex flex-col h-auto w-full md:flex-row md:h-full  "
      >
        <div className="flex flex-col md:h-full w-full md:w-[50%] py-6 text-justify px-4 ">
          <MailText />
        </div>
        <div className="flex flex-col md:h-full w-full md:w-[50%] px-4 py-6 md:px-16 ">
          <Mail />
        </div>
      </div>
    </div>
  )
}
export default MailToMe
