import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'

export function ButtonSkills({ icon, name , iconSrc}) {
    return (
        <button className="h-8 w-32 border border-neutral-900 hover:border-pink rounded-sm m-2 flex flex-row justify-center items-center gap-2">
            {!iconSrc && icon && <FontAwesomeIcon icon={icon}/>}
            {iconSrc &&(
                 <img src={iconSrc} alt={name} className="h-4 w-4" />
            )}
            {name}
            </button>
    );
}


export function Button ({ name }) {
    return(
        <button className="h-10 w-40 bg-neutral-900 hover:bg-pink text-lightC font-bold rounded-lg">{name}</button>
    );
}


ButtonSkills.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    iconSrc: PropTypes.string
}
Button.propTypes = {
    name : PropTypes.string.isRequired
}
