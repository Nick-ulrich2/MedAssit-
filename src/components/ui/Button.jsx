export function Button({buttonText}){
    return(
        <button 
            className="
                w-full
                py-1.5
                my-4
                rounded-lg
                text-white
                font-medium
                bg-blue-600
                text-xs    
                hover:bg-blue-700
                md:px-8
            ">
                {buttonText}
        </button>
    )
}

export function CodeButton({icone, text}){
    return(
        <button 
            className="
                flex
                justify-center
                w-full
                py-1.5
                rounded-lg
                font-medium
                border-3
                border-blue-800
                bg-blue-50
                hover:text-white
                hover:bg-blue-700
                md:w-full
                md:px-8
            ">
            <span className="md:mr-5" >{icone}</span>
            <span 
                className="
                    text-sm
                    whitespace-nowrap
                    text-[0.65rem]
                    md:text-base
                " >{text}</span>
                
        </button>
    )
}