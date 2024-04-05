export const InputBox = ({label,placeHolder,onChange}) => {
    return <div className="mt-1">
        <div>
            {label}
        </div>
        <input onChange={onChange} type="text" placeholder={placeHolder} spellCheck="false" className="border border-gray-600 rounded py-2 pl-2 outline-none"/>
    </div>
}