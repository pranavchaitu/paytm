export const InputBox = ({label,placeHolder,onChange}) => {
    return <div className="mt-1">
        <div>
            {label}
        </div>
        <input onChange={onChange} type="text" placeholder={placeHolder} className="border border-gray-600 rounded p-2"/>
    </div>
}