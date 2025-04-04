import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import '../style/index.css'
// import { useNavigate } from "react-router-dom"

function Navbb() {
  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Project', href: '#project' },
    { text: 'Contact', href: '#contact' },
  ]

  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = () => {
    setIsOpen(!isOpen)
  }

  const handleMenuClick = (href) => {
    if (href.startsWith('#')) {
      const targetId = href.slice(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className={`relative`}>
      <div
        className={`h-20 flex justify-between items-center px-6 py-3 bg-gray-100 text-black z-10 ${
          isOpen ? 'fixed top-0 left-0 w-full bg-neutral-900 text-pink' : ''
        }`}
      >
        <h1 className="font-bold text-xl">DANU HAERIDA PUTRA</h1>

        <div className="hidden sm:flex gap-8 items-center justify-center">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleMenuClick(item.href)
              }}
              className="hover:text-pink"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.text}
            </motion.a>
          ))}
        </div>
        <motion.button
          className="font-bold hidden sm:flex items-center justify-center bg-black text-gray-100 rounded-xl px-10 py-2 hover:bg-pink duration-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
          onClick={() => window.open('https://github.com/danu-0', '_blank')}
        >
          Git Hub
        </motion.button>

        <div className="sm:hidden">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleNavBar}
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-gray-200 cursor-pointer" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-custom-secondary cursor-pointer" />
            )}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-20 left-0 w-full h-screen bg-neutral-900 z-50 transition-all"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-4 text-gray-200">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleMenuClick(item.href)
                    setIsOpen(false)
                  }}
                  className="block px-6 py-2 hover:bg-gray-700 transition-all montserrat-regular"
                  initial={{ opacity: 0.5, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0.5, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.text}
                </motion.a>
              ))}
            </div>
            <div className="flex justify-start py-4 px-4">
              <motion.button
                className="bg-gray-200 text-custom-secondary font-normal rounded-xl px-10 py-2 montserrat-bold hover:bg-pink hover:text-gray-100 transition duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.4 }}
                onClick={() =>
                  window.open('https://github.com/danu-0', '_blank')
                }
              >
                Git Hub
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbb
