import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy;All rights reserved | MARIE ALLPRESS  <script type="text/JavaScript"> var theDate=new Date() document.write(theDate.getFullYear()) </script> | Built with: <a href="https://www.gatsbyjs.org/" target="_blank" >Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer