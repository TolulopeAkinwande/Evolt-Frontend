export default function SignUp() {
    return (
        <>
            <div className="w-full h-100 bg-green-600  min-h-screen  bg-gradient-to-r from-pink-100 to-blue-100 text-black flex justify-center items-center">
                <div className="w-[400px] h-[430px] bg-white text-black rounded-lg flex flex-col justify-around items-center p-4">
                    <div className="w-[100%] h-[50px] border">
                        <h1>Sign Up</h1>
                        <p className="text-[12px]">Enter your details below to create your account and get started.</p>
                    </div>
                    <div className="w-full h-[300px] bg-white  flex justify-around items-center ">
                        <div className="w-[100%] h-[100%] border flex flex-col justify-around items-center">
                            <div className="w-[100%] h-auto">
                                <input type="text" placeholder="Firstname" className="w-[100%] border border-gray-300 rounded-[5px]" />
                            </div>
                            <div className="w-[100%] h-auto">
                                <input type="text" placeholder="Lastname" className="w-[100%] border border-gray-300 rounded-[5px]" />
                            </div>
                            <div className="w-[100%] h-auto">
                                <input type="text" placeholder="Email" className="w-[100%] border border-gray-300 rounded-[5px]" />
                            </div>
                            <div className="w-[100%] h-auto ">
                                <input type="text" placeholder="password" className="w-[100%] border border-gray-300 rounded-[5px]" />
                            </div>
                            <div className="w-[100%] h-auto">
                                <label htmlFor=""></label>
                                <input type="text" placeholder="Phonenumber" className="w-[100%] border border-gray-300 rounded-[5px]" />
                            </div>
                            <div className="w-[100%] h-auto">
                                <button></button>
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function SignupPage() {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     phone: "",
//   });

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     console.log("Form submitted", form);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.5 }}
//       >
//         <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
//           <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
//           <div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required className="w-full p-2 border rounded" />
//               <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required className="w-full p-2 border rounded" />
//               <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded" />
//               <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full p-2 border rounded" />
//               <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
//               <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Sign Up</button>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
