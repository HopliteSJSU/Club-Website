import React, { Component } from 'react';

class VideoIntro extends Component {

    state = {
        height: 0,
        deviceType: ''
    }

    componentDidMount() {
        this.setState((state, props) => {
            return { height: document.getElementById("videointro").clientHeight,
                     deviceType: this.props <= 850 ? "mobile" : "desktop" };
        });
    }

    render() {

        return (
            <section id="videointro">
            <div className={`container ${this.state.deviceType}`}>
              <h2 className="title has-text-centered">Introduction</h2>
    
                <iframe
                width="100%"
                style={{ height: this.state.height }}
                title="Intro Video"
                src="https://www.youtube.com/embed/HFjyFg2tFcE"
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </div>
            </section>
        );
    }
    
}
    
export default VideoIntro;