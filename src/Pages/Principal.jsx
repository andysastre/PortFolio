import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../style/Principal.css"


const Principal = () => {
    return (
        <article>
            <div className="header">
                <div className="principal_content">
                    <p >Hi, i`m</p>
                    <h1>Andy Sastre</h1>
                    <p className='text-muted'>Fronted Developer</p>
                    <img src="https://i.imgur.com/vr4luUF.png" className='Me' alt="" />
                </div>
               <div className='button_container'>
                <button className="btn btn-outline-success">Download CV</button>
                <button className="btn btn-outline-success">Let's talk</button>
                </div>
            </div>

            <section className='about_me'>
                <div className="card border-danger mb-3 about_me" >
                    <div className="card-header "><h3>About me</h3></div>
                    <div className="card-body Description_me about_me">
                        <img src="https://i.imgur.com/zHTlEtp.jpeg" className='Kali' />
                        <p className="card-text">Constantly learning and being self-taught, I like things to look nice and work well. My goal is to keep progressing and become a professional. I really like video games and playing sports.
                            Her name is Kali and she is the one who helps me when things are not going well.

                            Cheers!</p>
                    </div>
                    <div className='Certified about_me'>
                        <div className='Left about_me'>
                            <img src="https://jovenesaprogramar.edu.uy/storage/app/media/logo-jap-2020.svg" className='Certified_Img1' />
                            <p className='text-muted'>Certyfied by J.A.P( Jovenes a programar)</p>
                        </div>
                        <div className='Right about_me'>
                            <img src="https://www.academlo.com/academlo-icon-shadow.png" className='Certified_Img2' />
                            <p className='text-muted'>Certyfied by Academlo</p>
                        </div>
                    </div>

                </div>
                <div className='Xp_Soft'>
                    <section className='Experience'>
                        <div className="card text-white bg-danger mb-3 " >
                            <div className="card-header ">Experience</div>
                            <div className="card-body ">
                                <p className="card-text">ReactJs:<span class="badge rounded-pill bg-dark">Intermediate</span></p>
                                <p className="card-text">Javascript: <span class="badge rounded-pill bg-dark">Intermediate</span></p>
                                <p className="card-text">HTML: <span class="badge rounded-pill bg-dark">Advanced</span></p>
                                <p className="card-text">CSS: <span class="badge rounded-pill bg-dark">Intermediate</span></p>
                                <p className="card-text">Boostrap: <span class="badge rounded-pill bg-dark">Intermediate</span></p>
                            </div>
                        </div>
                    </section>
                    
                    <section className='Soft_Skills'>
                        <div class="card text-white bg-primary mb-3 ">
                            <div class="card-header ">Soft Skills</div>
                            <div class="card-body">

                                <p class="card-text"><span class="badge rounded-pill bg-danger">Leadership</span><p>
                                    I like to lead, always maintaining harmony and better performance to always progress</p></p>
                                <p class="card-text"><span class="badge rounded-pill bg-danger">Work under pressure</span><p>I can recognize risks and act accordingly</p></p>
                                <p class="card-text"><span class="badge rounded-pill bg-danger">Fast learner</span><p>I love learning and facing new challenges</p></p>
                                <p class="card-text"><span class="badge rounded-pill bg-danger">Proactivo</span><p>I like to keep a rhythm so I can make good progress</p></p>

                            </div>
                        </div>
                    </section>
                    

                </div>

            </section>

            <section className='Portfolio'>
                <div className='Card_Container'>

                    <div className="card_portfolio">
                        <div className="content">
                            <div className="front">
                                <h3 className="title">Hey</h3>
                                <p className="subtitle">I'm working on my projects</p>
                            </div>

                            <div className="back">
                                <p className="description">
                                    Stay tuned ;)
                                </p>
                            </div>
                        </div>




                    </div>


                </div>


            </section>

            <section className='Contact'>
                <div className="card text-white bg-warning mb-3" >
                    <div className="card-header">Contact me!</div>
                    <div className="card-body">
                        <h4 className="card-title"><span class="badge rounded-pill bg-dark">Email: sastreandy@gmail.com</span></h4>
                        
                    </div>
                </div>

            </section>


        </article>
    );
};

export default Principal;