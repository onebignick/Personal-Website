import './landing.css';
import NavButton from './navbutton';
const Landing = () => {
    return (

        <flex id="landing-page">
            <div className="main-title">nicholas ong</div>
            <div className="main-title-description">full-stack developer</div>
            <br></br>
            <flex className="title-links">
                <NavButton name="linkedin" link="https://www.linkedin.com/in/nicholasongzk" />
                <NavButton name="github" link="https://github.com/onebignick" />
                <NavButton name="resume" />
            </flex>
        </flex>
    );
}

export default Landing;