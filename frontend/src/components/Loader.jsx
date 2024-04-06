import { InfinitySpin } from "react-loader-spinner"

export const Loader = () =>  {
    return <div className="flex justify-center items-center h-screen">
        <InfinitySpin
        visible={true}
        width="200"
        color="black"
        ariaLabel="infinity-spin-loading"
        />
    </div>
}
