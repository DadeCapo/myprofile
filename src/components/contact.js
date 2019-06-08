import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component{
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Simon Choren</h2>
            <img
              src={require('./sideblack.jpeg')}
              alt="avatar"
              style={{height: '250px', borderRadius:'75px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am originally born in Venezuela and moved to Miami when I was in elementary school. I grew a passion for football so I earned a scholarship to play for Hanover College in Hanover Indiana. I later moved to Charlotte North Carolina and eventually worked my way back to Miami. I have always worked sales but have had a passion for technology since my younger days. I was lucky enough to find Wyncode Academy and now I am able to use the skills I learned there to create things and really take my skills in Software Developtment to the next level.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (786) 277-4465
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    dadecapo@hotmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
