import './about.css';
import portret from '../../../img/imgportret.jpg';
import CVAndrei from '../../../pdfs/Andrei.pdf';
import Certification from '../../../pdfs/Certificari_Andrei_Cosma.pdf';

const AboutMe = () =>{
    return(
        <div className="container">
            <div className="image">
                <img src={portret} alt="Imagine externă" height="500"/>
            </div>
            <div className="description">
                <h1>Andrei Cosma</h1>
                <h3>Software engineer</h3>
                <p>
                    Student la Inginerie, cu o pasiune pentru programare și rezolvarea problemelor complexe. Sunt dedicat dezvoltării
                    continue și îmbunătățirii abilităților mele tehnice în diverse limbaje de programare și tehnologii emergente. Caut
                    oportunități care să-mi permită să aplic cunoștințele acumulate și să contribui la proiecte inovatoare, fiind eficient atât
                    în munca individuală, cât și în echipe colaborative.
                </p>
                <div>
                    <a href={CVAndrei} download="Andrei" rel="noopener">
                        <button className="btn btn-custom">Curriculum vitae(download)</button>
                    </a>
                    <a href={Certification} download="Certificari_Andrei_Cosma" rel="noopener">
                        <button className="btn btn-custom">Certification(download)</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;