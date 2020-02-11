import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="https://lh3.googleusercontent.com/32qCOZP5EmuSifExLCUAPwkePbsYbD2BhR33D2To0xMGUwTdMPsqmNBN_oZ01WB0QQmvDNVL0pO5OPjtrLL0d_1P1PXhoGpmkS3krWKRZNYZh2Xdn3HmWTbQHAtpzgGK6WHbNGzYog=w763-h722-no" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
            </div>
         </div>
      </section>
    );
  }
}