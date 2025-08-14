import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export function ButtonSkills({ icon, name, iconSrc, isDark }) {
  return (
    <button
      className={`${
        isDark ? 'border-dark' : 'border-light'
      } h-8 w-32 border  hover:border-pink rounded-sm m-2 flex flex-row justify-center items-center gap-2`}
    >
      {!iconSrc && icon && <FontAwesomeIcon icon={icon} />}
      {iconSrc && <img src={iconSrc} alt={name} className="h-4 w-4" />}
      {name}
    </button>
  )
}
ButtonSkills.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconSrc: PropTypes.string,
  isDark: PropTypes.string,
}

export function Button({ name }) {
  return (
    <button className="h-10 w-40 bg-gray-900 hover:bg-pink text-lightC font-bold rounded-lg">
      {name}
    </button>
  )
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
}

export const ButtonsProject = ({ isDark, text, onClick, className = '' }) => {
  return (
    <motion.button
      className={`font-bold sm:flex items-center justify-center  rounded-xl hover:bg-pink duration-500 ${className} ${
        isDark ? 'bg-dark text-light' : ' bg-light text-dark'
      } `}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: 0.4 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  )
}
ButtonsProject.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  isDark: PropTypes.bool.isRequired,
}

export const ToggleDarkMode = ({ onClick, isDark }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`w-16 h-8 rounded-full flex items-center border px-1 ${
        isDark ? 'border-dark bg-light' : 'border-light bg-dark'
      }`}
    >
      <motion.div
        animate={{
          x: isDark ? 28 : 0, // geser posisi icon
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`w-6 h-6 flex items-center justify-center rounded-full shadow ${
          isDark ? 'bg-dark' : 'bg-light'
        }`}
      >
        <FontAwesomeIcon
          icon={isDark ? faSun : faMoon}
          className={`${isDark ? 'text-light' : 'text-dark'}`}
        />
      </motion.div>
    </motion.button>
  )
}

ToggleDarkMode.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
