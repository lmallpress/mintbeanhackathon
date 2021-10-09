import PropTypes from 'prop-types'

import React from 'react'
import ReactPlayer from 'react-player'
import { StaticImage } from "gatsby-plugin-image"

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
            I joined my first hackathon (Thank you Navi Mann and Monarch Wadia of <a href="https://info.mintbean.io/" target="_blank" >mintbean</a>) knowing I was jumping in over my head, but hoping to gain some skills in the process, and a better understanding of what is involved in a hackathon so that I can jump in full force next time
          </p>

          <p>
            Coding, as with learning in general, is much like trying to climb this tall building (I'm sure someone has, but that is not me). It is extremely challenging, and even when you think you have a foot hold, as a novice free climber, you often slip. I've slipped a lot during my coding journey, but I love making things come to life on the page. My game is extremely simple. Most could have programmed it in under 30 minutes. It took me hours and hours, but I had so much fun, frustration, and aha moments. I can't wait to do it again
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
            <a href="https://mintbean-game.vercel.app/" target="_blank" >Brick Breaker</a>
          </h2>
          <span className="image main">
            <StaticImage src="../images/brickwall.jpg" alt="brick" />
          </span>
          <p>
            This is my first attempt at creating a 2D game.  To begin playing, you can click anywhere on the game board. The ship starts fast, so you may need a few attempts to get going.  Click the game title, above, to go to the game site, or <a href="https://mintbean-game.vercel.app/" target="_blank" >HERE</a>
          </p>

          <p>
            <ReactPlayer
              className='react-player fixed-bottom'
              url='https://www.youtube.com/watch?v=x4bzFXl4nLo'
              width='100%'
              height='340px'
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
          <h2 className="major">The Architect </h2>
          <span className="image main">
            <StaticImage src="../images/me.jpg" alt="architect" />
          </span>
          <p>
            Hello!  My name is Marie, a Front End Developer.  I've spent the core of my life as an IT Professional - mostly tech support - and a Munitions Systems Specialist in the Air National Guard, but my passion is code.  Coding drives me crazy, and is something that I can do for hours; designing, tweaking, playing. I've been chasing this dream for years and will one day become a coding superhero
          </p>

          <p>
            In my spare time, when I'm not sharpening my baby coding fangs, I'm teaching myself to play guitar
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