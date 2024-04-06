
export const AppBar = ({name}) => {
    
    return <>
        <div className="flex justify-between shadow h-14 px-4 fixed left-0 right-0 top-0 z-10 bg-white">
            <div className="flex flex-col justify-center h-full">
                PayTM App
            </div>
            <div className="flex">
                <div className="h-full flex flex-col justify-center mr-4">
                    {name}
                </div>
                <div className="mt-1 bg-slate-200 rounded-full w-12 h-12">
                    <div className="flex flex-col justify-center items-center h-full text-xl">
                        {(name[0].toUpperCase())}
                    </div>
                </div>
            </div>
        </div>
    </>
}

