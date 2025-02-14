import PropTypes from 'prop-types'

const Button = ({label, iconURL ,backgroundColor,
  borderColor,
  textColor,fullWidth}) => {
  return (
    <button className={`flex justify-center 
    items-center gap-2 px-7 py-4 font-montserrat
    text-lg leading-none
    ${backgroundColor ?`${backgroundColor} ${textColor} ${borderColor}`:
     "bg-coral-red text-white border-coral-red"} rounded-full ${fullWidth && "w-full"}`}>
      {label}
     {iconURL && <img
      src={iconURL}
      alt="arrow" 
      className="ml-2 rounded-full w-5 h-5"/>} 
      </button>
  )
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconURL: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor:PropTypes.string,
  textColor:PropTypes.string,
  fullWidth:PropTypes.string
};

// Define default props for the component
Button.defaultProps = {
  iconURL: '',
  backgroundColor: "",
  borderColor: "",
  textColor:"",
  fullWidth:""
};

export default Button