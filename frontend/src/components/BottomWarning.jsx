import { Link } from "react-router-dom"

export const BottomWarning = ({state}) => {
    return <>
        <div className="text-sm">
            {state === "true" ? <>
                <span>Don't have an account ?</span>
                <a className="underline">
                    <Link to='/signup'>
                        Sign up
                    </Link>
                </a>                
            </> : <>
                <span>Aldready have a account ?</span>
                <a className="underline">
                    <Link to='/signin'>
                        Sign in
                    </Link>
                </a>
            </>}
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