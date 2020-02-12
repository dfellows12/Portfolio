import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h1>Contact me:</h1>
              <p className="lead">
              Feel free to contact me at <a href='mailto:dfellows12@gmail.com?'>dfellows12@gmail.com</a> or by using the links below
              </p>
            </div>
          </div>
          
        </section>
        );
  }
}