import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="https://lh3.googleusercontent.com/5DgUIfqEUtxtJ_OUhS8svI9etxOcaUniIVx-Arud67QXOpVPr0c9ahQRl5Nlf5xughqJSxBsiBb-fXkR0XpPy3FmAIWf48y46o2utteYhPIUkaRTs15lroQGsCEaFvX9Ol3tpoAsbYr4azoE6m7xi3UhNN6Rs25cjm5BSLoNwD7nYlDA-_-K3Mum3jeyplrsPK6w8n5wayLD5XY-zDUnN7a8FYHW4M9b5x0ctYXDL-qIFyclsRbV5jnsJDionDgaSk_a8TeITYxFG9bXnO_S9Deal6hSoglQdchba-0-Ld76nVDDXnH5lDZYOT1YY2yVgViaYuLWeURh3k-npqK3vKwaFDVV_XnD_ozY-mtioEOndhFvUrkMDlTOINyeq_oUZ1B5PPOAkP6amIK2c-moSMDniGZWYRXB7hwWwbeT-t44s9Nvowe8I07kG-JGDayfus2p3EABVA9Gn0dTr9WinNKAeciDiBEJpE1gZlaBVq9EpJ8pDI1U0_3rWVXE_cKP4FWwumhdsgDT4JdxXFz0fWb4LgISKHI9TuxEVj-yAO7NfaGMrDv4WVrDEgcoQfC33psPb2eyqBLZY_dYDoYTcuCE4wX_nWGc6gIhrqCuzuQZVrgwj99b8JApDcOtGz5ykjlbiRmUzNQpJx5mF9eGQ-kW1ej75nqV6vwrLhUWjlvZ2zvyyMQkOU0RkGcbCu0WNtvogwQRCq4md3s7nvdJPrfmZP7geI4sNvKJrzxLo-piRPA=w600-h568-no" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}