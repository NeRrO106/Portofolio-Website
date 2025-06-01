import React from "react";
import './skill.css';
import bootstrapImg from '../../../img/other-skills-img/Bootstrap_logo.png';
import dotnetImg from '../../../img/other-skills-img/dotnet.png';
import gitImg from '../../../img/other-skills-img/git.png';
import bashImg from '../../../img/other-skills-img/bash.png';
import ubuntuImg from '../../../img/other-skills-img/Ubuntu.png';
import windowsImg from '../../../img/other-skills-img/windows.png';
import mysqlImg from '../../../img/other-skills-img/mysqlworkbench.png';
import unityImg from '../../../img/other-skills-img/unity.png';
import vscodeImg from '../../../img/other-skills-img/vscode.png';
import visualStudioImg from '../../../img/other-skills-img/Visual-Studio-logo.png';
import intellijImg from '../../../img/other-skills-img/IntelliJ.png';
import pycharmImg from '../../../img/other-skills-img/PyCharm.png';
import NetBeansImg from '../../../img/other-skills-img/netbeans.png';
import awsImg from '../../../img/other-skills-img/aws.png';
import figmaImg from '../../../img/other-skills-img/Figma.png';
import slackImg from '../../../img/other-skills-img/Slack.png';
import githubImg from '../../../img/other-skills-img/github_desktop.png';

const Skills = () =>{
    return(
        <div className="skills-container">
        <div className="programming-skills">
            <p>Programing language skills</p>
            <div className="container-progress">
                <div className="column">
                    <div className="mb-3 w-75">
                        <div className="progress-header">C</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '80%'}} 
                                aria-valuenow="80" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >80%</div>
                        </div>
                    </div>
                    <div className="mb-3 w-75">
                        <div className="progress-header">C++</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '80%'}} 
                                aria-valuenow="80" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >80%</div>
                        </div>
                    </div>
                    <div className="mb-3 w-75">
                        <div className="progress-header">C#</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '75%'}}  
                                aria-valuenow="75" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >75%</div>
                        </div>
                    </div>
                    <div className="mb-3 w-75">
                        <div className="progress-header">Java</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '85%'}}  
                                aria-valuenow="75" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >75%</div>
                        </div>
                    </div>
                    <div className="mb-3 w-75">
                        <div className="progress-header">Python</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '85%'}} 
                                aria-valuenow="85" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >85%</div>
                        </div>
                    </div>
                    <div className="mb-3 w-75">
                        <div className="progress-header">MYSQL</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '90%'}}  
                                aria-valuenow="90" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >90%</div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="mb-3 w-75">
                        <div className="progress-header">HTML</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '80%'}}
                                aria-valuenow="80" 
                                aria-valuemin="0" 
                                aria-valuemax="100">80%</div>
                        </div>
                    </div>
                    <div className="mb-3 w-75">
                        <div className="progress-header">CSS</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '75%'}} 
                                aria-valuenow="75" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >75%</div>
                        </div>
                    </div>
                    <div className="mb-3 w-75">
                        <div className="progress-header">Java-Script</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '60%'}}
                                aria-valuenow="60" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >60%</div>
                        </div>
                    </div>
                    <div className="mb-3 w-75">
                        <div className="progress-header">React</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '50%'}}
                                aria-valuenow="50" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >50%</div>
                        </div>
                    </div>
                    <div className="mb-3 w-75">
                        <div className="progress-header">Django</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '40%'}}
                                aria-valuenow="40" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >40%</div>
                        </div>
                    </div>
                    <div className="mb-3 w-75">
                        <div className="progress-header">Node.JS</div>
                        <div className="progress">
                            <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '40%'}}
                                aria-valuenow="40" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >40%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="other-skills">
            <p>Other skills</p>
            <div className="content">
                <div className="card" style={{width: '10rem'}}>
                    <img src= {bootstrapImg} className="card-img-top" alt="Bootstrap5"/>
                    <div className="card-body">
                      <p>
                        Bootstrap5
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={dotnetImg} className="card-img-top" alt=".net"/>
                    <div className="card-body">
                      <p>
                        .Net Windows Form
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={gitImg} className="card-img-top" alt="Git"/>
                    <div className="card-body">
                      <p>
                        Git
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={bashImg} className="card-img-top" alt="Bash"/>
                    <div className="card-body">
                      <p>
                        Bash
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={ubuntuImg} className="card-img-top" alt="Ubuntu"/>
                    <div className="card-body">
                      <p>
                        Ubuntu
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={windowsImg} className="card-img-top" alt="Windows"/>
                    <div className="card-body">
                      <p>
                        Windows
                      </p>
                    </div>
                </div>
                  <div className="card" style={{width: '10rem'}}>
                    <img src={mysqlImg} className="card-img-top" alt="MYSQL Benchmark"/>
                    <div className="card-body">
                      <p>
                        MYSQL Benchmark
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={unityImg} className="card-img-top" alt="Unity"/>
                    <div className="card-body">
                      <p>
                        Unity
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={vscodeImg} className="card-img-top" alt="VS Code"/>
                    <div className="card-body">
                      <p>
                        VS Code
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={visualStudioImg} className="card-img-top" alt="VS"/>
                    <div className="card-body">
                      <p>
                        Visual Studio
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={intellijImg} className="card-img-top" alt="Intellij"/>
                    <div className="card-body">
                      <p>
                        Intellij
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={pycharmImg} className="card-img-top" alt="PyCharm"/>
                    <div className="card-body">
                      <p>
                        PyCharm
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={NetBeansImg} className="card-img-top" alt="NetBeans"/>
                    <div className="card-body">
                      <p>
                        NetBeans
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={awsImg} className="card-img-top" alt="AWS"/>
                    <div className="card-body">
                      <p>
                        AWS
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={figmaImg} className="card-img-top" alt="Figma"/>
                    <div className="card-body">
                      <p>
                        Figma
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={slackImg} className="card-img-top" alt="Slack"/>
                    <div className="card-body">
                      <p>
                        Slack
                      </p>
                    </div>
                </div>
                <div className="card" style={{width: '10rem'}}>
                    <img src={githubImg} className="card-img-top" alt="Github Desktop"/>
                    <div className="card-body">
                      <p>
                        Github Desktop
                      </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="language-skills">
            <p>Languages skills</p>
            <ul>
                <li>
                    <b>Romanian</b>
                    <p>Native</p>
                </li>
                <li>
                    <b>English</b>
                    <p>B1</p>
                </li>
                <li>
                    <b>French</b>
                    <p>A2</p>
                </li>
                <li>
                    <b>Spanish</b>
                    <p>A1</p>
                </li>
            </ul>
        </div>
    </div>
    );
}
export default Skills;