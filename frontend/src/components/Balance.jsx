
export const Balance = ({balance}) => {


    return <div className="h-14 flex flex-col justify-center px-4">
        <div className="flex">
            <span className="font-bold mr-4">
                Your Balance
            </span>
            <span>
                Rs.{Math.ceil(balance)}
            </span>
        </div>
    </div>
}