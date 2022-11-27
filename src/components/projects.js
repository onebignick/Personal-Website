import './projects.css';
import healthupPhoto from '../assets/medium.png';
import pythonSVG from "../assets/icons/python.svg";
import javascriptSVG from "../assets/icons/javascript.svg"
import flaskSVG from "../assets/icons/flask.svg";
import htmlSVG from "../assets/icons/html.svg";
import soliditySVG from "../assets/icons/solidity.svg";
import cssSVG from "../assets/icons/css.svg";
import NavButton from './navbutton';

const Projects = () => {
    return (
        <flex className='projects' id='projects'>
            <div className='projects-title' id="projects-title">
                my projects
            </div>
            <div className='exerpt'>
                A collection of the projects that I have done. Most of these were in my own spare time or at hackathons.
                A full list can be found on my github.
            </div>

            <div className='project-writing'>
                <div className='project-title'>Personal Website (Nov 2022)</div>
                <div className='project-desc'>
                    <NavButton name="source code" link="https://github.com/onebignick/me" />
                    <NavButton name="website" link="https://onebignick.github.io" />
                    <br></br>
                    <p>
                        My own personal website to document my progress as a programmer. Built
                        using ReactJS with React Bootstrap and EmailJS for contact form.
                    </p>
                    <flex className="image-library">
                        <img className='logo-svg' src={htmlSVG} alt="" />
                        <img className='logo-svg' src={cssSVG} alt="" />
                        <img className='logo-svg' src={javascriptSVG} alt="" />
                    </flex>
                </div>
            </div>


            <div className='project-writing'>
                <div className='project-title'>HealthUP (Nov 2022)</div>
                <div className='project-desc'>
                    <NavButton name="source code" link="https://github.com/onebignick/HackConcode2022" />
                    <br />
                    <img className='healthup-img' src={healthupPhoto} alt=""></img>
                    <br />
                    <p>
                        HealthUP is a webapp that aims to help users manage their health options.
                        It runs on a decentralised user ID management system. Users are entered into
                        the system via peer-to-peer validation and the data is stored on the blockchain.
                        HealthUP currently supports creation of user profiles, booking appointments and updating of user info
                    </p>
                    <flex className="image-library">
                        <img className='logo-svg' src={htmlSVG} alt="" />
                        <img className='logo-svg' src={cssSVG} alt="" />
                        <img className='logo-svg' src={javascriptSVG} alt="" />
                        <img className='logo-svg' src={flaskSVG} alt="" />
                        <img className='logo-svg' src={pythonSVG} alt="" />
                        <img className='logo-svg' src={soliditySVG} alt="" />
                    </flex>
                </div>
            </div>

            <div className='project-writing'>
                <div className='project-title'>Go Big Mode (Nov 2022)</div>
                <div className='project-desc'>
                    <NavButton name="source code" link="https://github.com/onebignick/STC-2022" />
                    <br></br>
                    <p>
                        Go Big Mode (GBM) is a decentralised user ID management system. Users are entered into the
                        system via peer-to-peer validation and the data is stored on the blockchain. GBM currently
                        supports creation of user profiles, updating of user password and clicks on the whale,
                        user roles, sessions and deletion of users.
                    </p>
                    <flex className="image-library">
                        <img className='logo-svg' src={htmlSVG} alt="" />
                        <img className='logo-svg' src={cssSVG} alt="" />
                        <img className='logo-svg' src={pythonSVG} alt="" />
                        <img className='logo-svg' src={soliditySVG} alt="" />
                    </flex>
                </div>
            </div>
            <div>

            </div>
        </flex>
    );
}

export default Projects;