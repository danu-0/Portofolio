function FooterSection() {
  return (
    <>
      <div className="h-[0.5px] w-full bg-lightO"></div>
      <div
        id="footer"
        className="flex justify-start flex-col w-full h-auto bg-dark text-lightC px-10 py-10 text-sm"
      >
        <div>
          <h1 className="text-2xl font-semibold mb-2">DANU HAERIDA PUTRA</h1>
        </div>
        <div className="flex justify-evenly mt">
          <div className="flex flex-col leading-8">
            <h2 className="font-bold text-lg mb-2">Social Media</h2>
            <a
              href="https://www.facebook.com/share/otLoN2wJZB3o7ipL/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/danuzxo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/6282340017349"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <div className="flex flex-col leading-8">
            <h2 className="font-bold text-lg mb-2">Business Contact</h2>
            <a
              href="https://github.com/danu-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:danuhaeridaputra07@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/danu-putra"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div className="flex flex-col leading-8">
            <h2 className="font-bold text-lg mb-2">Role</h2>
            <a href="#">Fullstack Developer</a>
            <a href="#">Web and Android Developer</a>
            <a href="#">UI / UX Designer</a>
          </div>
        </div>
        <hr className="border-t border-gray-600 my-5" />
        <p className="text-center ">
          © 2024 Copyright Danu Haerida Putra. All rights reserved.
        </p>
      </div>
    </>
  )
}
export default FooterSection
