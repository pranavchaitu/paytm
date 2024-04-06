import { Link } from "react-router-dom"

export const BottomWarning = ({label,buttonText,to}) => {
    return <>
        <div className="text-sm py-2 ">
            {label} 
            <Link className="underline pl-1" to={to}>
                {buttonText}
            </Link>                
        </div>
    </>
}


// import { Link } from "react-router-dom"

// export const BottomWarning = (props) => {
//     return <>
//         <div>
//             {props.state === "true" ? "true" : "false"} 
//         </div>
//     </>
// }