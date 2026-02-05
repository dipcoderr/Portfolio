// import React from 'react';
import "../Home/home.css"
import leetcodeIcon from "../../assets/leetcode.png"

export default function Social() {
return (
    <div className='home-social'>
        <a href="https://www.linkedin.com/in/dipcoderr/" className="home-social-icon" rel="noreferrer" target="_blank">
            <i className="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/dipcoderr" className="home-social-icon" 
            rel="noreferrer" target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>
        <a href="https://leetcode.com/u/dipcoderr/" className="home-social-icon" 
            rel="noreferrer" target="_blank">
            <img src={leetcodeIcon} alt="LeetCode" className="social-icon-img" />
        </a>
    </div>
)
}
