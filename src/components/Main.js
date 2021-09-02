import PropTypes from 'prop-types'

import React from 'react'
import ReactPlayer from 'react-player'
import { StaticImage } from "gatsby-plugin-image"

//import gameVid from '../images/video/gameVid.mp4'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <StaticImage src="../images/bldg.jpg" alt="building" />
          </span>
          <p>
            
          </p>
          <p>
          
          </p>
          {close}
        </article>

        <article
          id="game"
          className={`${this.props.article === 'game' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">
            <a href="https://marie-allpress-brickgame.netlify.app/" target="_blank" >Brick Breaker</a>
          </h2>
          <span className="image main">
            <StaticImage src="../images/brickwall.jpg" alt="brick" />
          </span>
          <p>
            This is my first attempt at creating a 2D game.  To begin playing, you can click anywhere on the game board. The ship starts fast, so you may need a few attempts to get going.  Click the game title, above, to go to the game site, or <a href="https://marie-allpress-brickgame.netlify.app/" target="_blank" >HERE</a>
          </p>

          <p>
            <ReactPlayer
              className='react-player fixed-bottom'
              url='../video/gameVid.mp4'
              width='100%'
              controls={true}
            />
          </p>

          {close}
        </article>


        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About the Architect </h2>
          <span className="image main">
            <StaticImage src="../images/me.jpg" alt="architect" />
          </span>
          <p>
            Hello!  My name is Marie, a Front End Developer.  I've spent the core of my life as an IT Professional - mostly tech support - and a Munitions Systems Specialist in the Air National Guard, but my passion is code.  Coding drives me crazy, and is something that I can do for hours; designing, tweaking, playing. I've been chasing this dream for years and will one day become a coding superhero
          </p>

          <p>
            In my spare time, when I'm not sharpening my baby coding skills, I'm teaching myself to play guitar
          </p>

          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/marieallpress//" target="_blank" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lmallpress/mintbean_game" target="_blank" className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>

          {close}
        </article>
     </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main