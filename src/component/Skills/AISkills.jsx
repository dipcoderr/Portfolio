import { Tilt } from "react-tilt";
import generativeAI from "../../assets/generative-ai.png";
import langgraph from "../../assets/langgraph.png";
import langchain from "../../assets/langchain.png";
import rag from "../../assets/rag.png";
import agenticAI from "../../assets/agentic-ai.jpg";
import aiAgents from "../../assets/ai-agents.jpg";
import claude from "../../assets/Claude.webp";
import ollama from "../../assets/ollama.png";

const AISkills = () => {
    const tiltOptions = { max: 45, scale: 1, speed: 750 };

    return (
        <Tilt className="skills-content ai-skills" options={tiltOptions}>
            <h3 className="skills-title">AI & Machine Learning</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <div>
                            <img src={generativeAI} alt="Generative AI" className="skills-img skills-img-generative-ai" />
                            <h3 className="skills-name">GenAI</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <img src={langchain} alt="LangChain" className="skills-img skills-img-langchain" />
                            <h3 className="skills-name">LangChain</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <img src={langgraph} alt="LangGraph" className="skills-img skills-img-langgraph" />
                            <h3 className="skills-name">LangGraph</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <img src={rag} alt="RAG" className="skills-img skills-img-rag" />
                            <h3 className="skills-name">RAG</h3>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <div>
                            <img src={agenticAI} alt="Agentic AI" className="skills-img skills-img-agentic-ai" />
                            <h3 className="skills-name">Agentic AI</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <img src={aiAgents} alt="AI Agents" className="skills-img skills-img-agents" />
                            <h3 className="skills-name">AI Agents</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <img src={claude} alt="Claude" className="skills-img skills-img-claude" />
                            <h3 className="skills-name">Claude</h3>
                        </div>
                    </div>

                    <div className="skills-data">
                        <div>
                            <img src={ollama} alt="Ollama" className="skills-img skills-img-ollama" />
                            <h3 className="skills-name">Ollama</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default AISkills;
