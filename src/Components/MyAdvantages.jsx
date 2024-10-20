import "./MyAdvantages.css"

export default function MyAdvantages(){
    return (
        <section className="MyAdvantages">
            <div className="container">
                <p id="mySkill">MY SKILLS & CERTIFICATES</p>
                <div className="advantagesSkill">
                    <div className="AdvSkill">
                        <h4>Languages</h4>
                    <p>HTML/CSS/JS; C#; Java</p>
                    </div>
                    <div className="AdvSkill">
                    <h4>Frameworks</h4>
                    <p>React.js; TypeScript; Three.js</p>
                    </div>
                   <div className="AdvSkill">
                   <h4>Additional Skills</h4>
                    <p>Figma</p>
                   </div>
                   <div className="AdvSkill">
                   <h4>Backend</h4>
                        <p>Firebase; MySQL</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
    
};