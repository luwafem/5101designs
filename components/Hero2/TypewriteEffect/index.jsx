import Typewriter from "typewriter-effect";
// import './style.css';

const HeroTypeWriter = () => {

 
 
 return (

    <>
        <Typewriter
            options={{
            strings: [
                " Helping Startups Build Successful businesses.",
                " Helping Enterprenuers Build Sustainable businesses.",
                " Building and Growing A Bootstrap Private Equity Company.",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            }}
        />
    </>

 ) 

}

export default  HeroTypeWriter;