import AboutUs from "../AboutPageSections/AboutUs";
import OurPromise from "../AboutPageSections/OurPromise";
import WhatWeOffer from "../AboutPageSections/WhatWeOffer";
import WhoWeAre from "../AboutPageSections/WhoWeAre";

const About=()=>{
    return(
        <div>
          <AboutUs></AboutUs>
          <WhoWeAre></WhoWeAre>
          <WhatWeOffer></WhatWeOffer>
          <OurPromise></OurPromise>
        </div>
    )
}
export default About;