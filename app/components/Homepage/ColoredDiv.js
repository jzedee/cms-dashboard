import React from 'react'

const ColoredDiv = (props) => {
    return (
        <div>
            <div className={`py-1 px-2 w-fit font-semibold  border rounded-lg border-${props.color}-300 text-${props.color}-700 bg-${props.color}-100`}>{props.title} </div>
        </div>
    )
}

export default ColoredDiv
