export default function SignUp() {
    return (
        <>
            <div className="w-full h-100 bg-green-600  min-h-screen text-black flex justify-center items-center">
                <div className="w-[400px] h-[380px] bg-white text-black rounded-lg">
                    <div className="w-[100%] h-[50px] border">
                        <h1>Sign Up</h1>
                        <p className="text-sm">Enter your details below to create your account and get started.</p>            
                    </div>
                    <div className="w-[100%] h-[30px] bg-white flex ">
                        <div className="w-[100%] h-[100%] border">
                            <div className="w-[100%] h-auto border">
                                <label htmlFor="">Firstname</label>
                                <input type="text" placeholder="enter......." className="w-[100%] border border-gray-300 rounded-[5px]" />
                            </div>
                            <div className="w-[100%] h-auto border">
                                <label htmlFor="">Lastname</label>
                                <input type="text" placeholder="enter......." className="w-[100%] border border-gray-300 rounded-[5px]" />
                            </div>
                            <div className="w-[100%] h-auto border">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="example@gmail.com" className="w-[100%] border border-gray-300 rounded-[5px]" />
                            </div>
                            <div className="w-[100%] h-auto border">
                                <label htmlFor="">ID Type</label>
                                <input type="text" placeholder="example@gmail.com" className="w-[100%] border border-gray-300 rounded-[5px]" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};