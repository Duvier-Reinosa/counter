import React from "react"

function Button({text = '', onClick}) {
    return <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5" onClick={onClick}>
            {text}
        </button>
    </div>
}

export default Button