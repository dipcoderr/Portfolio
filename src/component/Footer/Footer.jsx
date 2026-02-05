// import React from 'react';
import "../Footer/footer.css";
import leetcodeIcon from "../../assets/leetcode.png";

export default function Footer() {
return (
    <footer className="footer">
        <div className="footer-container container">
            {/* <hr/> */}
            <h1 className="footer-title">Dipanshu Kumar Mishra</h1>

            <ul className="footer-list">
                <li>
                    <a href="#about" className="footer-link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer-link">Skills</a>
                </li>
                <li>
                    <a href="#project" className="footer-link">Projects</a>
                </li>
            </ul>

            <div className="footer-social">
            <a href="https://www.linkedin.com/in/dipcoderr/" className="footer-social-link" rel="noreferrer" target="_blank">
            <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/dipcoderr" rel="noreferrer" className="footer-social-link" target="_blank">
            <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://leetcode.com/u/dipcoderr/" rel="noreferrer" className="footer-social-link" target="_blank">
            <img src={leetcodeIcon} alt="LeetCode" className="social-icon-img" />
            </a>
            </div>

            <span className="footer-copy">&#169; Dipanshu Kumar Mishra. 2024</span>
        </div>
    </footer>
)
}
