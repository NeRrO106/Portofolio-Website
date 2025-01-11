import React from "react";
import "./contact.css";

import portret from '../../../img/imgportret.jpg';

import linkedInImg from '../../../img/social-media-img/linkedIn.png';
import githubImg from '../../../img/social-media-img/github.png';
import instaImg from '../../../img/social-media-img/insta.png'
import youtubeImg from '../../../img/social-media-img/youtube.png';
import discordImg from '../../../img/social-media-img/Discord-Logo.png';

const Contact = () => {
  return (
    <div>
      <div className="content">
        <img src={portret} alt="Poza" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit
          fugit accusamus dolore, odio quo soluta vero aliquid dolorem iusto hic
          distinctio ullam impedit qui laudantium, sunt omnis explicabo
          consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Alias sapiente neque nulla quibusdam rerum impedit voluptatem,
          voluptates eaque, odio officia cum velit possimus quasi dolore
          laboriosam natus laborum, soluta consequatur? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Illum autem illo quae quaerat
          necessitatibus quos explicabo perferendis? Eos, quaerat sit repellat
          harum sapiente impedit distinctio cum labore, quo ipsam mollitia?
        </p>
        <div className="social-media">
          <div className="mb-3 custom-social">
            <a
              href="https://www.linkedin.com/in/andrei-cosma-28b720273/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInImg} alt="LinkedIN" />
            </a>
            <p>LinkedIn</p>
          </div>
          <div className="mb-3 custom-social">
            <a href="https://github.com/NeRrO106" target="_blank" rel="noopener noreferrer">
              <img src={githubImg} alt="Github" />
            </a>
            <p>Github</p>
          </div>
          <div className="mb-3 custom-social">
            <a href="https://www.instagram.com/candy_software/" target="_blank" rel="noopener noreferrer">
              <img src={instaImg} alt="Instagram" />
            </a>
            <p>Instagram</p>
          </div>
          <div className="mb-3 custom-social">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src={youtubeImg} alt="youtube" />
            </a>
            <p>Youtube</p>
          </div>
          <div className="mb-3 custom-social">
            <a
              href="https://discordapp.com/users/249491106457190400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={discordImg} alt="discord" />
            </a>
            <p>Discord</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
