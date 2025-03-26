import image1 from "../assets/rebrand.jpg"
import { Link } from "react-router";


export default function ProductList() {
    return (
        <>
            <div className="w-[70%] mx-auto">
                <div className="grid grid-cols-3 gap-8 ">
                    <div className="">
                        <img className="h-40 border-2 border-black-100" src={image1} />
                        <p>nam</p>
                        <div className="md:w-1/2 flex flex-col justify-center">
                            <Link className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 flex justify-center" to="/single-product">View</Link>
                        </div>
                    </div>
                    <div className="">
                        <img className="h-40 border-2 border-black-100" src={image1} />
                        <p>Men's shoes</p>
                        <div className="md:w-1/2 flex flex-col justify-center">
                            <Link className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 flex justify-center" to="/single-product">View</Link>
                        </div>
                    </div>
                    <div className="">
                        <img className="h-40 border-2 border-black-100" src={image1} />
                        <p>Men's shoes</p>
                        <div className="md:w-1/2 flex flex-col justify-center">
                            <Link className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 flex justify-center" to="/single-product">View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

