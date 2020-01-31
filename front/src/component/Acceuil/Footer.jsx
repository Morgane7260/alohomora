import React from "react";
import github from "../../images/github.png";
import wild from "../../images/wild.png";
import "./accueil.css";

function Footer(){
    return(
        <div className="footer">
            <a href="https://github.com/Morgane7260"><img src={github} alt="github" className="logo-footer"/></a>
            <a href="https://www.wildcodeschool.com/fr-FR/formations/developpeur-web?campus=toulouse"><img src={wild} alt="logo de la wild code school" className="logo-footer"/></a>
            <p className="logo-footer">© 2020-..</p>
            <p className="logo-footer">Par Morgane Marié</p>
        </div>
    )
}

export default Footer;