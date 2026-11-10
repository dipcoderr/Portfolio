import "../Home/home.css";
import leetcodeIcon from "../../assets/leetcode.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";

export default function Social() {
    return (
        <div className='home-social'>
            <a href="https://www.linkedin.com/in/dipcoderr/" className="home-social-icon" rel="noreferrer" target="_blank">
                <img src={linkedinIcon} alt="LinkedIn" className="social-icon-img" />
            </a>
            <a href="https://github.com/dipcoderr" className="home-social-icon" rel="noreferrer" target="_blank">
                <img src={githubIcon} alt="GitHub" className="social-icon-img" />
            </a>
            <a href="https://leetcode.com/u/dipcoderr/" className="home-social-icon" rel="noreferrer" target="_blank">
                <img src={leetcodeIcon} alt="LeetCode" className="social-icon-img" />
            </a>
        </div>
    );
}
