import React from "react";
import logoImg from "../../public/img/ethiclo-logo.JPEG";
import Image from "next/image";


function Login() {
    return (
        <div className="flex bg-primary ">
            <div>
                <Image height="400" width="500" src={logoImg}></Image>
            </div>
            <div className="text-center">
                <h1 className="text-white" >Welcome to Ethiclo!</h1>
            </div>
        </div>
    )
}

export default Login
