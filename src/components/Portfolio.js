import React, { Component } from 'react';


export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
       {/* reconfigure modals to work with the resume jsondata and a .map */}
       <div id="modal-0" className="modal-center mfp-hide row">
          <div className="five columns modal-video">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oathqT81wiA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <h3 className="video-text">GreenSpace<span className="modal-links"> • <a href="https://github.com/Case757/greenspace-front-end" target="_blank" rel="noopener noreferrer">github</a> </span></h3>
          <div><p>This is a plantcare and notekeeping app. Never forget to water or fertilize your plants again! Built using a custom Ruby on Rails backend API, and ReactJS frontend, utilizing Redux for statemanagement. <a href="https://www.youtube.com/watch?v=w-2N2BCxono" target="_blank" rel="noopener noreferrer"></a></p>
          </div></div>
        <div id="modal-1" className="modal-center mfp-hide row">
          <div className="five columns modal-video">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EmmLf4yQxNg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <h3 className="video-text">NightLife <span className="modal-links"> • <a href="https://github.com/kh45/mod-4-project-frontend" target="_blank" rel="noopener noreferrer">github</a> </span></h3>
          <p>I built this app with classmate and friend Khaled Hassan. It provides users with info regarding events in their area with live data from the Ticketmaster public API. Created using Ruby on Rail and React, with Bootstrap improving the UI.</p>
          </div>
        <div id="modal-2" className="modal-center mfp-hide row">
          <div className="five columns modal-video">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HCt2VD8V_h0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <h3 className="video-text">FluffFinder<span className="modal-links"> • <a href="" target="_blank" rel="noopener noreferrer">github</a></span></h3>
          <p>I built this app with classmate and friend Kailey Lee. It is a Vanilla JS project that utilizes the FriendFinder public API to connect users with adoption opportunities in their area!</p> 
          </div>

      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Portfolio</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
              return(
                
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={`#modal-${index}`}>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
        }
}