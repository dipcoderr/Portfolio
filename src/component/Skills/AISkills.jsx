import { Tilt } from "react-tilt";

const AISkills = () => {
    const tiltOptions = {
        max: 45,
        scale: 1,
        speed: 750
    };

    return (
        <Tilt className="skills-content" options={tiltOptions}>
            <h3 className="skills-title">AI & Machine Learning</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <div>
                            <i className="bx bx-brain skills-icon ai"></i>
                            <h3 className="skills-name">Generative AI</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <i className="bx bx-link-alt skills-icon ai"></i>
                            <h3 className="skills-name">LangChain</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <i className="bx bx-git-branch skills-icon ai"></i>
                            <h3 className="skills-name">LangGraph</h3>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <div>
                            <i className="bx bx-search-alt skills-icon ai"></i>
                            <h3 className="skills-name">RAG</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <i className="bx bx-bot skills-icon ai"></i>
                            <h3 className="skills-name">Agentic AI</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <i className="bx bx-bot skills-icon ai"></i>
                            <h3 className="skills-name">AI Agents</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default AISkills;
