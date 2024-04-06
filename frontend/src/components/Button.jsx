export const Button = ({title, onClick}) => {
    return <button type="button" onClick={onClick} className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
        {title}
    </button>
}