import Header from "../components/common/header/Header"
import Footer from "../components/common/footer/Footer"
import HeadShot from "../img/head_shot.jpg"
import "../css/main.css"

export default function Welcome() {
    return (
        <>
        <div className="wrapper">
        <Header/>
        <h1>Hello</h1>
        <p>
            I am a Software Engineer, with a background <br/>
            in Mechanical Engineering and Visual Art. <br/> 
            Take a look around and reach out with any questions.
        </p>   
        <img src={HeadShot} alt="Kathryn Image"/>
        <Footer/>
        </div>
        </>
    );
}
