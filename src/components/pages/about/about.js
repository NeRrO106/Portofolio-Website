import React from "react";
import './about.css';
import portret from '../../../img/imgportret.jpg';

const AboutMe = () =>{
    return(
        <div className="container">
            <div className="image">
                <img src={portret} alt="Imagine externă" height="500"/>
            </div>
            <div className="description">
                <h1>Andrei Cosma</h1>
                <h3>Software engineer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reiciendis quasi maiores! Magni, dicta repellendus? Eligendi itaque maiores dolor velit modi? Ipsa accusantium aperiam explicabo quae commodi voluptatum, quibusdam aliquid. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit illo dicta sunt quisquam corrupti ipsam veniam vero aspernatur provident dignissimos asperiores, culpa voluptates ratione, temporibus sed quod non fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ad officiis modi ducimus veniam sequi rem! Quasi tenetur voluptatum iste suscipit tempora perspiciatis dolor quod, ducimus cum, beatae officiis ipsa!</p>
                <div>
                    <button className="btn btn-custom">Curriculum vitae</button>
                    <button className="btn btn-custom">Certification</button>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;