import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Landing extends Component{
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src={require('./leftsideface.jpg')}
              alt="logoimage"
              className="logo-image"
            />
            <div className="banner-text">

              <h1 className="w3-animate-fading">Full Stack Web Developer</h1>

              <hr className="w3-animate-fading"/>

              <p className="w3-animate-fading" >HTML/CSS | Javascript | React | Ruby on Rails | Wix | GitHub | </p>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/simonchoren/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square w3-animate-fading" aria-hidden="true"/>
                </a>
                <a href="https://github.com/DadeCapo" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square w3-animate-fading" aria-hidden="true"/>
                </a>
                <a href="https://www.instagram.com/dadecapo/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram w3-animate-fading"/>
                </a>
                <a href="https://www.facebook.com/ForexCapito" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square w3-animate-fading"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing
