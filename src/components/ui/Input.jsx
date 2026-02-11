
export function Input({type, placeholder, icone}){
    return(
        <div className="
            flex 
            items-center
            my-2
            p-1.5 md:p-2
            w-full
            rounded-lg
            md:w-auto
            md:px-4 
            border
            border-gray-300
            shadow-md   
        ">
            <label 
                htmlFor="input"
                className="
                    border-r
                    pr-2
                    mr-2
                "
            >
                {icone}
            </label>
            <input 
                type={type} 
                placeholder={placeholder}
                className="
                    w-full
                    outline-none
                    text-[0.65rem]
                "  
            />
        </div>
    )
}