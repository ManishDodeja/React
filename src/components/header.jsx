import React from 'react'
import PropTypes from 'prop-types'

function header({text, bgColor, textColor}) {
    const headerStyle={
        backgroundColor: bgColor, 
        color: textColor
    }

  return (
    <header style={headerStyle}>
        <div className="container">
            <h2>
                {text}
            
            </h2>
        </div>
    </header>
  )
}


// if the props is not sended by component then we can also use default props using component name with property of defaultProps
header.defaultProps = {
    text:"Feedback UI",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor:'#ff6a95'
}


// this is something for checking the error, or setting the data type of props property like the props should be only text, not any other type
header.propTypes={
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor:PropTypes.string
}

export default header