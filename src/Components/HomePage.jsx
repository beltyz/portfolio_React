import "./HomePage.css"
import mySelf from "../Assets/mySelf.png"

export default function HomePage()
{
    return(
        <section className="mainPage">
            <div className="container mainpage-container">
                <div>
                    <h3>Hello, I am Dmytro. <br />I am <span className="highlightFrontEndDev">Frontend Developer</span></h3>
                    <p>I can create sites with cool animation by using React.js, TypeScript and Three.js</p>
                    </div>
               <span className="BlurShape"></span> 
               <span className="BlurShape_1"></span>
               <img className="mySelf" src={mySelf}></img>
            </div>
        </section>
    );
};