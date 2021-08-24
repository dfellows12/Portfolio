import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

<div className="row skill">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
<div className="row skill">
  <div className="three columns header-col">
    <h1><span>Skills</span></h1>
  </div>

  <div className="nine columns main-col">
    <h1>Languages and Frameworks:</h1>
    <ul>
      <li>JavaScript (ES6)</li>
      <li>ReactJS and Redux</li>
      <li>NextJS</li>
      <li>GraphQL, PostgreSQL, and SQL</li>
      <li>Ruby (and Object-Oriented programming)</li>
      <li>Sinatra (a Ruby DSL)</li>
      <li>Ruby on Rails (as a full-stack and API-only framework)</li>
      <li>MVC Software Architecture</li>
      <li>Test-writing (RSpec framework for Ruby, Jest/Enzyme for ReactJS)</li>
      <li>HTML5, CSS, and SASS</li>
    </ul>
    <h1>Tools and Methodologies:</h1>
    <ul> 
      <li>Github</li>
      <li>Agile Development Practices</li>
      <li>Pair Programming</li>
    </ul>
  </div>
</div>

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
  



      </section>
    );
  }
}