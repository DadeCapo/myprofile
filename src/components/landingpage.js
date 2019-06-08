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
              <h1>Full Stack Web Developer</h1>

              <hr/>

              <p>HTML/CSS | Javascript | React | Ruby on Rails | Wix | GitHub | </p>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/simonchoren/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="https://github.com/DadeCapo" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/dadecapo/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/ForexCapito" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square"></i>
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
