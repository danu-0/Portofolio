import LogoLoop from '../components/Animations/LogoLoop/LogoLoop'
import { useContext } from 'react'
import { DarkMode } from '../context/darkMode'
import PropTypes from 'prop-types'
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiGit,
} from 'react-icons/si'

const techLogos = [
  {
    node: <SiJavascript />,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    node: <SiHtml5 />,
    title: 'HTML',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    node: <SiCss3 />,
    title: 'CSS',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  { node: <SiFlutter />, title: 'Flutter', href: 'https://flutter.dev' },
  { node: <SiReact />, title: 'React JS', href: 'https://react.dev' },
  {
    node: <SiTailwindcss />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
  { node: <SiMysql />, title: 'MySQL', href: 'https://www.mysql.com' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com' },
]

const Skil = ({ direction }) => {
  const { isDarkMode } = useContext(DarkMode)
  return (
    <div
      className={`flex flex-col md:gap-2 mb-10 md:mb-0 ${
        isDarkMode ? 'bg-light text-dark' : 'bg-dark text-light'
      }`}
    >
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction={direction}
        logoHeight={36}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
      />
    </div>
  )
}

Skil.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
}

export default Skil
