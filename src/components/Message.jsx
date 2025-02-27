import PropTypes from 'prop-types'

const MessageCard = ({ role, message }) => {
  return (
    <div
      className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`p-3 max-w-[75%] rounded-xl shadow-md break-words ${
          role === 'user'
            ? 'bg-pink text-lightC self-end rounded-br-none'
            : 'bg-lightC text-grayC self-start rounded-bl-none'
        }`}
      >
        {message}
      </div>
    </div>
  )
}

MessageCard.propTypes = {
  role: PropTypes.oneOf(['assistant', 'user']).isRequired,
  message: PropTypes.string.isRequired,
}

export default MessageCard
