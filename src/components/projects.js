import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl'

class Projects extends Component{
  constructor(props){
    super(props)
    this.state = { activeTab : 0 }
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
{/* Project #1*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://66.media.tumblr.com/5ccc7d5fe9225b21cd7b812015784b5c/tumblr_psnd9xeLPP1xl8yxqo1_1280.png) center / cover'}}>Kanye West Yahoo Mockup
            </CardTitle>
            <CardText>
            This is an HTML/CSS mockup of what a yahoo landing page would look like with widgets and latest news. This was a project for school and was completed entirely
            </CardText>
            <CardActions border>
              <Button ripple>Github</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name='share'/>
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
{/* Project #1*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://66.media.tumblr.com/6f4d86c373125f157cafe53376ccca02/tumblr_pson6rBPZc1xl8yxqo1_1280.png) center / cover'}}>Pub 2 Pub
            </CardTitle>
            <CardText>
            This is a project that is built with React. It also uses an external API for Pub information. I was able to link the API to the front end and provide the user a search engine for pubs based on the API info.
            </CardText>
            <CardActions border>
              <Button ripple>Github</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name='share'/>
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return(
        <div className="projects-grid">
{/* Project #1*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://66.media.tumblr.com/ba63a65243beb16db36edcc43e4650b6/tumblr_psondvyjTX1xl8yxqo1_1280.png) center / cover'}}>Enhanced Publication Systems
            </CardTitle>
            <CardText>
            This web application was built using React on the front end and Ruby on Rails for the back end. Scope project for the United States Air Force.
            </CardText>
            <CardActions border>
              <Button ripple>Github</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name='share'/>
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return(
        <div className="projects-grid">
{/* Project #1*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://66.media.tumblr.com/711305c4f903ab794feb229577b72202/tumblr_psonsbkcsd1xl8yxqo1_540.png) center / cover'}}>Our Digital Universe
            </CardTitle>
            <CardText>
            An digital consulting company based out of Miami Florida. Page focuses on the business clients and products they offer. Also has a meet the team area and a contact us page.
            </CardText>
            <CardActions border>
              <Button ripple>Github</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name='share'/>
            </CardMenu>
          </Card>
{/* Project #2*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://66.media.tumblr.com/dc64faa9ae9ccf8f37f6c0aa5da87895/tumblr_psonsyo3W11xl8yxqo1_1280.png) center / cover'}}>Credit Pro Solutions
            </CardTitle>
            <CardText>
            Credit Pro Solutions is a family owned credit repair / consulting business that helps locals with their financial needs and educates on best financial practices.
            </CardText>
            <CardActions border>
              <Button ripple>Github</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name='share'/>
            </CardMenu>
          </Card>
{/* Project #3*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://66.media.tumblr.com/3a4e3a011daa8a476b9dd14ef5f71834/tumblr_psontmWESa1xl8yxqo1_1280.png) center / cover'}}>Beauber
            </CardTitle>
            <CardText>
            Beauber is an ongoing project that is in development stages. This is a landing page to start gathering contacts and sends out an automated email to respond to the user that the information was received.
            </CardText>
            <CardActions border>
              <Button ripple>Github</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name='share'/>
            </CardMenu>
          </Card>
{/* Project #4*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://66.media.tumblr.com/b11fc78b784b9de7f9f8c2c5e34a9f39/tumblr_psontzgksz1xl8yxqo1_1280.png) center / cover'}}>C.O.S.
            </CardTitle>
            <CardText>
            CBD can be used to help with alot of health and mental issues. This page shows products you can purchase directly through the page and some information about the owner and customer as well. Includes shopping cart.
            </CardText>
            <CardActions border>
              <Button ripple>Github</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name='share'/>
            </CardMenu>
          </Card>
{/* Project #5*/}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://66.media.tumblr.com/022da8fd09e8c142e7a28a0773a4f2b8/tumblr_psonvenuaB1xl8yxqo1_1280.png) center / cover'}}>Freedom is Forex
            </CardTitle>
            <CardText>
            Freedom is Forex LLC is an instructional page that shows 2 videos. 1 short video to data capture and funnel visitors to fill in their information. The second video is longer and it talks about iMarketsLive which is a platform that helps you learn the financial world of trading currencies and cryptocurrencies.
            </CardText>
            <CardActions border>
              <Button ripple>Github</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name='share'/>
            </CardMenu>
          </Card>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>HTML/CSS</Tab>
          <Tab>Javascript/React</Tab>
          <Tab>Ruby on Rails</Tab>
          <Tab>Wix</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects
