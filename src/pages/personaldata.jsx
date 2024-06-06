import React from "react";
import './pages.css';

export default function Personaldata(){
    return (
        <>
            <div className="personaldata">
                <div className="section">
                    <h2>Información Personal</h2>

                    <h3>Rendimiento Académico</h3>
                    <p>
                        Tec. en Programación. <br />
                        Tec. Superior en Desarrollo de Software <br />
                        Full Stack.
                    </p>

                    <h3>Experiencia Laboral</h3>
                    <p>
                        Profesor de M.E.P. Programación II. <br />
                        Profesor de Base de Datos. <br />
                        Profesor de Programación I.
                    </p>

                    <h3>Idiomas</h3>
                    <p>
                        Español: Nativo. <br />
                        Inglés: Técnico. <br />
                        Aleman: Básico.
                    </p>
                </div>
            </div>
        </>
    )
}