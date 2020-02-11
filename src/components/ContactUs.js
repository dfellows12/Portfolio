import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me at dfellows12@gmail.com or by using the links below
              </p>
            </div>
          </div>
          
        </section>
        );
  }
}