import HeadShot from "../img/head_shot.jpg"

export default function About() {
    return (
        <>
        <div className="wrapper">
        <h1>Hello</h1>
        <p>
            I am a Software Engineer, with a background <br/>
            in Mechanical Engineering and Visual Art. <br/> 
            Take a look around and reach out with any questions.
        </p>   
        <img src={HeadShot} alt="Kathryn Image"/>
        </div>
        </>
    );
}
