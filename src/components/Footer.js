import React from "react";

export default function Footer() {
    return (
        <footer id="footer" >
            <p className="copyright">&copy;All rights reserved | MARIE ALLPRESS - {new Date().getUTCFullYear()} | Built with: <a href="https://www.gatsbyjs.org/" target="_blank" >Gatsby.js</a></p>
        </footer>
    );
}