import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export function ButtonSkills({ icon, name, iconSrc }) {
  return (
    <button className="h-8 w-32 border border-gray-900 hover:border-pink rounded-sm m-2 flex flex-row justify-center items-center gap-2">
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

export const ButtonsProject = ({ text, onClick, className = '' }) => {
  return (
    <motion.button
      className={`font-bold sm:flex items-center justify-center text-gray-100 rounded-xl hover:bg-pink duration-500 ${className} `}
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
}
