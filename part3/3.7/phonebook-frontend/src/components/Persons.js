import React from 'react'
import Number from './Number'

const Persons = (props) => {
    return(
    <div>
        {props.display.map(person => 
            <Number key={person.name} person={person} deleteFunc={props.deleteFunc}/>
        )}
    </div>
    )
}

export default Persons