import './projects.css';
import healthupPhoto from '../assets/medium.png';
import pythonSVG from "../assets/icons/python.svg";
import javascriptSVG from "../assets/icons/javascript.svg"
import flaskSVG from "../assets/icons/flask.svg";
import htmlSVG from "../assets/icons/html.svg";
import soliditySVG from "../assets/icons/solidity.svg";
import cssSVG from "../assets/icons/css.svg";

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
                <div className='project-title'>HealthUP (Nov 2022)</div>
                <div className='project-desc'>
                    <img src={healthupPhoto} alt=""></img>
                    <br></br>
                    <p>
                        HealthUP is a webapp that aims to help users manage their health options.
                        It runs on a decentralised user ID management system. Users are entered into
                        the system via peer-to-peer validation and the data is stored on the blockchain.
                        HealthUP currently supports creation of user profiles, booking appointments and updating of user info
                    </p>
                    <flex className="image-library">
                        <img className='html-svg' src={htmlSVG} alt="" />
                        <img className='css-svg' src={cssSVG} alt="" />
                        <img className='js-svg' src={javascriptSVG} alt="" />
                        <img className='flask-svg' src={flaskSVG} alt="" />
                        <img className='python-svg' src={pythonSVG} alt="" />
                        <img className='solidity-svg' src={soliditySVG} alt="" />
                    </flex>
                </div>
            </div>

            <div className='project-writing'>
                <div className='project-title'>Go Big Mode (Nov 2022)</div>
                <div className='project-desc'>
                    <br></br>
                    <p>
                        Go Big Mode (GBM) is a decentralised user ID management system. Users are entered into the
                        system via peer-to-peer validation and the data is stored on the blockchain. GBM currently
                        supports creation of user profiles, updating of user password and clicks on the whale,
                        user roles, sessions and deletion of users.
                    </p>
                    <flex className="image-library">
                        <img className='html-svg' src={htmlSVG} alt="" />
                        <img className='css-svg' src={cssSVG} alt="" />
                        <img className='python-svg' src={pythonSVG} alt="" />
                        <img className='solidity-svg' src={soliditySVG} alt="" />
                    </flex>
                </div>
            </div>
            <div>

            </div>
        </flex>
    );
}

export default Projects;