import React, { Component } from 'react';
import { button, Modal } from 'react-bootstrap';



export default class Sidebar extends Component {

  state = {
    options: [
      { text: 'doNothing', value: 'doNothing' },
      { text: 'openModal', value: 'openModal' }
    ],
    open: false
  };

  onClose = () => this.setState({ open: false });
  onChange = (selected) => {
  
  }




  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="brand-img" style={{ backgroundImage: 'url(images/brandlogo2.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">HUMMA FITNESS & TRAINING</a></h1>
              <span className="brand"> Catchy tag line</span>
            </div>
            <br></br>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#offer" data-nav-section="offer">What We Offer</a></li>
                  <li><a href="#information" data-nav-section="information">Information</a></li>



                  <div className="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Contact Us<span class="caret"></span></button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">

                      <li>
                      <button onClick={this.handleOpenModal}>Hours</button>
                          <Modal open={this.state.open} onClose={this.onClose}>
                            <Modal.Header>Hours</Modal.Header>
                              <Modal.Description>
                                <p>Mon - Sat</p>
                                <p>7 a.m. to 9 pm</p>
                              </Modal.Description>
                            </Modal>
                      </li>
                      <li>
                        <button onClick={this.handleOpenModal}>Location</button>

                        <Modal open={this.state.open} onClose={this.onClose}>
                            <Modal.Header>Locatoin</Modal.Header>
                              <Modal.Description>
                                <p>Anywhere, USA</p>
                              </Modal.Description>
                            </Modal>
                      </li>

                    </ul>

                  </div>

                </ul>
              </div>
            </nav>

            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="mailto:email@address.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail5" /></a></li>
              </ul>
            </nav>
           {/* <div className="colorlib-footer">
              <p><small>
                Thanks goes out to <a href="https://dbarochiya.github.io/me/" target="_blank" rel="noopener noreferrer">Dhruv Barochiya</a></small></p>
               </div> */ }
          </aside>
        </div>
      </div>
    )
  }
}
