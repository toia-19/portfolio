import React from "react";
import './style.css';

export default function Footer(){
    return (
        <>
            <footer className="crumbs">
                <ol>
                    <li className="crumb"><a href="">Inicio</a></li>
                    <li className="crumb"><a href="">Contacto</a></li>
                    <li className="crumb"><a href="">Más Información</a></li>
                    <li className="crumb">Copyright © 2024 RN, Argentina</li>
                </ol>
            </footer>
        </>
    )
}