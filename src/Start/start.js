import React from "react";
import "./style.css"
import Logo from "./../assets/logo.png"

export default function Start() {
    const [selected, setSelected] = React.useState(true);

    if(selected){
    return (
            <div className = "Start">
                <div className="logo-start">
                    <img src={Logo} alt="logo do jogo" />
                    <h1>ZapReacall</h1>
                </div>
                <button className="button-start" onClick={() => setSelected(false)}>Iniciar Recall!</button>
            </div>
    )}else{
        return(
            <>
            </>
        )
    }
}