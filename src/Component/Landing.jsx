import Data from "./Data";
function Landing() {
    return (
        <div className="absolute rounded-3xl top-1/2 left-1/2 transform bg-opacity-45 -translate-x-1/2 -translate-y-1/2 bg-white w-[1100px] h-[720px]">
            <div className="flex justify-end mt-2 mr-[23px]">
                <div className="rounded-sm w-[44px] h-[22px] border-solid border-2 border-opacity-45 bg-gray-300 border-gray-500">
                    <span className="block mt-4 w-5 h-1 bg-gray-700 mx-auto"></span>
                </div>
                <div className="rounded-sm w-[44px] h-[22px] border-solid border-2 bg-gray-300 border-gray-400">
                    <span className=" absolute block ml-[9px] w-5 h-5 bg-gray-700"></span>
                    <span className=" relative block ml-[12px] mt-[2px] w-[14px] h-[14px] bg-gray-300"></span>
                </div>
                <div className="rounded-sm w-[55px] h-[22px] bg-red-600 relative">
                    <h1 className=" font-bold ml-5 -mt-[5px] text-2xl text-white">X</h1>
                </div>
            </div>
            <div className="rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black w-[1060px] h-[650px]">
                    <Data />
                </div>
            </div>
        
    );
}

export default Landing;
