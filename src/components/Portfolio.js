import React, { Component } from 'react';


export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
       {/* reconfigure modals to work with the resume jsondata and a .map */}
       <div id="modal-0" className="modal-center mfp-hide row">
          <div className="five columns modal-video">
          <iframe width="500" height="275" src="https://www.youtube.com/embed/oathqT81wiA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <h3 className="video-text">GreenSpace<span className="modal-links"> • <a href="https://github.com/Case757/greenspace-front-end" target="_blank" rel="noopener noreferrer">github</a> </span></h3>
          <p>This is a plantcare and notekeeping app. Never forget to water or fertilize your plants again! Built using a custom Ruby on Rails backend API, and ReactJS frontend, utilizing Redux for statemanagement. <a href="https://www.youtube.com/watch?v=w-2N2BCxono" target="_blank" rel="noopener noreferrer"></a></p>
          </div>
        <div id="modal-1" className="modal-center mfp-hide row">
          <div className="five columns modal-video">
            <iframe title="LetterLagoon Video" width="100%" height="100%" src="https://www.youtube.com/embed/MUpAzyjMhyA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
          </div>
          <h3 className="video-text">LetterLagoon <span className="modal-links"> • <a href="https://github.com/polezo/LetterLagoon" target="_blank" rel="noopener noreferrer">github</a> </span></h3>
          <p>This is a spelling and phonics game for elementary school children. Built in React Native, it utilizes Redux for state management and AirBNB's Lottie framework for animations. It has 2 different game modes, over 50 words, 25+ unique animations, 100+ audio elements, and a lot of happy playtesting from my daughter :). See more detail on the animations by viewing <a href="https://www.youtube.com/watch?v=w-2N2BCxono" target="_blank" rel="noopener noreferrer">this video.</a></p>
          </div>
        <div id="modal-2" className="modal-center mfp-hide row">
          <div className="five columns modal-video">
          <iframe title="BrewQueue Video" width="100%" height="100%" src="https://www.youtube.com/embed/qxlLTEEbWWc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
          </div>
          <h3 className="video-text">BrewQueue<span className="modal-links"> • <a href="https://github.com/polezo/brewQueue" target="_blank" rel="noopener noreferrer">github</a></span></h3>
          <p>I built this as a part of Flatiron School with my friend <a href="https://sergioaperez.com/" target="_blank" rel="noopener noreferrer">Sergio Perez</a> (who narrates this video). It was an experiment to see how robust a site we could make without JS. We tapped the OpenBreweryDB API for breweries around the country for users to visit and rate. Designed from scratch and styled using Bootstrap and custom CSS, users can save their favorite breweries, meet beer fans who share their tastes and more.</p> 
          </div>
          <div id="modal-3" className="modal-center mfp-hide row">
          <div className="five columns modal-video">
          <a href="https://atfmakes.com/numbercommander/" target="_blank" rel="noopener noreferrer"><img width="100%" src="https://atfmakes.com/img/NumberCommanderSplash2.jpg" alt="NumberCommander"></img></a>
          </div>
          <h3 className="video-text">NumberCommander <span className="modal-links"> • <a href="https://atfmakes.com/numbercommander/" target="_blank" rel="noopener noreferrer">demo</a>  • <a href="https://github.com/polezo/NumberCommander" target="_blank" rel="noopener noreferrer">github</a> </span></h3>
          
<p>NumberCommander is an math game that I'm currently developing for web using the HTML5 canvas and THREE.js. Inspired by old Apple II games like Number Munchers and Math Blasters, NumberCommander has three fun and simple math gamemodes with a unique space theme that kids are sure to love.<a href="https://atfmakes.com/numbercommander" target="_blank" rel="noopener noreferrer"> Try the alpha out now!</a></p><br></br>
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