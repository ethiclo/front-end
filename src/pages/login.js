import React from "react";
import logoImg from "../../public/img/ethiclo-logo.JPEG";
import Image from "next/image";


function Login() {
    return (
        <div>
            <div className="flex">
            <div>
                <Image src={logoImg} width={700}
                        height={250} />
            </div>
            <div>
                <h3>Sign in here!</h3>
                <div className="">
                    <button className="">
                            Login with Google
                    </button>
                </div>
            </div>
            </div>
            <Footer />

        </div>
        
    )
}

export default Login


export const Footer = () => {
    return (
        <div className="">
            <div className="bg-gray-500 text-white">
                <p className="">Cole Purboo, Rayce Ramsay, Michael Anthony-Dawes, Serah George</p>
                <p>Copyright ETHICLO. All Rights Reserved</p>
            </div>
            <div className="">
                <a href='https://www.linkedin.com/company/onyx-initiative/' target="_blank" rel="noreferrer">
                    <i className="fa-user"> </i>
                </a>
            </div>
        </div>
    )
}