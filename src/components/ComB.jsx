import React from 'react'
import { Fisrtname } from '../App'
function comB() {
    return (
        <>
            <Fisrtname.Consumer> 
                {(fname) => {
                    return <h1>{fname}</h1>
                }} 
            </Fisrtname.Consumer>
        </> 
    )
}

export default comB