import { Mail, MailText } from '../components/Mail'

function MailToMe() {
  return (
    <div
      id="contact"
      className="flex flex-col-reverse h-auto w-full md:flex-row md:h-full bg-gray-100"
    >
      <div className="flex flex-col h-full w-full md:w-[50%] px-4 py-16 md:px-16">
        <Mail />
      </div>
      <div className="flex flex-col h-full w-full md:w-[50%] py-16 text-justify px-4 md:pr-16">
        <MailText />
      </div>
    </div>
  )
}
export default MailToMe
