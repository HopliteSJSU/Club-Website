import React from 'react';

const AboutUs = ({ styles }) => (
    <div className="container" id="about-us">
        <p>
            Established in 2018, <b>Hoplite</b> at San José State University 
            brings together Spartans with the common goal of acing technical 
            coding interviews. We curate challenging interview level questions 
            and mimic resources available during interviews to help members gain 
            confidence and experience. We analyze problems and demonstrate practical 
            techniques and methodologies that can be used during real interviews. We 
            are growth focused and emphasize collaboration and knowledge sharing to 
            strengthen our group and individual members.
        </p>
    </div>
);

AboutUs.defaultProps = {
    styles: {}
};

export default AboutUs;