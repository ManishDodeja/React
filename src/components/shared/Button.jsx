import PropTypes from 'prop-types'

function Button({children, type, version, isDisabled}) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}   
    </button>
  )
}



Button.propTypes={
    type: PropTypes.string.isRequired, 
    version: PropTypes.string, 
    children:PropTypes.node, 
    isDisabled:PropTypes.bool
}

Button.defaultProps={
    version:'primary',
    type:'button',
    isDisabled:true
}

export default Button