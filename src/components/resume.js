import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component{
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={require('./standingside.jpeg')}
                alt="avatar"
                style={{height: '350px', borderRadius: '30%'}}
              />
            </div>

            <h1 style={{paddingTop: '2em'}}>Simon Choren</h1>
            <h4 style={{color: 'red'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #3f51b5', width: '50%'}}/>
            <p>As a full-stack web developer I'm skilled at creating solutions. Comfortable working with small teams and large organizations. Innovative project manager and developer with experience in business management and end to end product fulfillment. Seeking opportunities in a rapidly growing environment. I'm always up for a challenge. Great at building relationships with employees across all levels of an organization. Focused on developing and adjusting to business needs and always remaining a student.</p>
            <hr style={{borderTop: '3px solid #3f51b5', width: '50%'}}/>
            <h5>Address</h5>
            <p>Miami, Fl 33190</p>
            <h5>Phone</h5>
            <p>(786) 277-4465</p>
            <h5>Email</h5>
            <p>DadeCapo@hotmail.com</p>
            <h5>Web</h5>
            <p>www.simonillo.com</p>
            <hr style={{borderTop: '3px solid #3f51b5', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2005}
              endYear={2007}
              schoolName="Hanover College"
              schoolDescription="Liberal Arts College"
              />
              <Education
                startYear={2018}
                endYear={2019}
                schoolName="Wyncode Academy"
                schoolDescription="Full Stack Coding Bootcamp"
                />
                <hr style={{borderTop: '3px solid white'}} />
              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Enhanced Publications System • Back-end developer"
              jobDescription="• EPS is a full-stack web app for editing and certifying publications (documents) for the United States Air Force. • Developed the back-end of the app using Ruby on Rails • Built our own API • Turned the data into a Json response so that we manipulate it with React.js on the front-end • We meet remotely and collaborate through GitHub • Deployed the app using Heroku"
            />
            <Experience
              startYear={2015}
              endYear={2018}
              jobName="Lead Trust Media Group • Design Team / Customer Service Manager"
              jobDescription="• Focused on testing and development of our in-house CRM for the business • Daily tested the functionality of the page with a check-list style process • Basic CSS experience developing the front end of the CRM • Transitioned into a Customer Service Manager and support for development"
            />
            <Experience
              startYear={2011}
              endYear={2015}
              jobName="RedVentures • Team Performance Manager"
              jobDescription="• Developed over 15 teams of 10-20 sales agents (including bilingual sales in spanish) from all ranges of sales experience • Coached team on following compliance rules on each phone call and maximizing sale opportunities • Presented weekly strategies on how to improve the team performance and hit company goals • Completed 4 leadership training retreats focused on Team building and Sales Strategies"
            />
            <Experience
              startYear={2009}
              endYear={2011}
              jobName="Kennametal Inc • Account Manager"
              jobDescription="• Kept records of Volkswagen monthly purchase orders for their tooling and turning equipment • Communicated through email/phone with clients from small businesses to large corporations in order to maintain a great relationship • Worked on SAP to handle all customer accounts preparing daily, weekly, and monthly reports of purchases and contracts"
            />
            <hr style={{borderTop: '3px solid white'}} />
            <h2>Skills</h2>
            <Skills
              skill="HTML/CSS"
              progress={100}
            />
            <Skills
              skill="Javascript"
              progress={78}
            />
            <Skills
              skill="Ruby on Rails"
              progress={80}
            />
            <Skills
              skill="React"
              progress={60}
            />
            <Skills
              skill="Github"
              progress={75}
            />
            <Skills
              skill="API"
              progress={80}
            />
            <Skills
              skill="Trello"
              progress={75}
            />
            <Skills
              skill="Basecamp"
              progress={50}
            />
            <Skills
              skill="Airtable"
              progress={45}
            />
            <Skills
              skill="Invision Studio"
              progress={65}
            />
            <Skills
              skill="Marvel App"
              progress={75}
            />
            <Skills
              skill="Wix"
              progress={85}
            />
            <Skills
              skill="Wordpress"
              progress={70}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
