import logo from "../assets/purple.jpeg"

export default function Login() {
    return (
        <>
            <div className="w-full h-100  min-h-screen  bg-gradient-to-br from-purple-600 via-white to-purple-600 text-black flex justify-center items-center">
                <div className="w-[400px] h-[300px] bg-white text-black rounded-lg flex flex-col justify-around items-center p-4 shadow-xl rounded-xl">
                    <div className="w-[100%]  h-[90px] flex justify-around flex-col">
                        <img src={logo} alt="Logo" className="w-[50px] h-[25px] object-cover rounded-md" />
                        <h1>Welcome back</h1>
                        <p className="text-[10px]">Glad to see you again</p>
                        <p className="text-[10px]">Login to your account below</p>
                    </div>
                    <div className="w-full h-full  flex justify-around items-center">
                        <div className="w-[100%] h-[100%] flex flex-col justify-around items-center">
                            <div className="w-[100%] h-auto">
                                <input type="text" placeholder="Email" className="w-[100%] border border-gray-300 rounded-[5px]" />
                            </div>
                            <div className="w-[100%] h-auto ">
                                <input type="text" placeholder="password" className="w-[100%] border border-gray-300 rounded-[5px]" />
                            </div>
                            <div className="w-full h-auto flex gap-4 p-4">
                                <button className="w-[50%] px-6 py-2 bg-purple-700  text-white font-semibold rounded-lg shadow-md ">  
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
