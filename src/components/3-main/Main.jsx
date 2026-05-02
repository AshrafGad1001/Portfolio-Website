import { useState } from 'react';
import './main.css';





const main = () => {


    const [currentActive, setcurrentActive] = useState("all");

    return (
        <main className="flex">




            <section className="left-section">
                <button onClick={() => { setcurrentActive("all") }} className={currentActive === "all" ? "active" : " "}>All Projects</button>
                <button onClick={() => { setcurrentActive("css") }} className={currentActive === "css" ? "active" : " "}>Pure HTML & CSS</button>
                <button onClick={() => { setcurrentActive("js") }} className={currentActive === "js" ? "active" : " "} >JavaScript</button>
                <button onClick={() => { setcurrentActive("react") }} className={currentActive === "react" ? "active" : " "} >React</button>
                <button onClick={() => { setcurrentActive("nodejs") }} className={currentActive === "nodejs" ? "active" : " "} >Node JS - Express</button>
            </section>






            <section className="right-section">



                <article className='card'>
                    <div className='img-container'>
                        <img src="./project 001.jpg" alt="project-img " />
                    </div>


                    <div className="box">
                        <h2 className="title">Porject 1</h2>
                        <p className="sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="project-link">

                            <div className="icons">
                                <div className="icon-link icon"></div>
                                <div className="icon-github icon"></div>
                            </div>


                            <button className="show-more">
                                more <span className="icon-arrow_forward"></span>
                            </button>

                        </div>
                    </div>
                </article>



                <article className='card'>
                    <div className='img-container'>
                        <img src="./project 002.jpg" alt="project-img " />
                    </div>


                    <div className="box">
                        <h2 className="title">Porject 2</h2>
                        <p className="sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="project-link">

                            <div className="icons">
                                <div className="icon-link icon"></div>
                                <div className="icon-github icon"></div>
                            </div>


                            <button className="show-more">
                                more <span className="icon-arrow_forward"></span>
                            </button>

                        </div>
                    </div>
                </article>





                <article className='card'>
                    <div className='img-container'>
                        <img src="./project 003.jpg" alt="project-img " />
                    </div>


                    <div className="box">
                        <h2 className="title">Porject 3</h2>
                        <p className="sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="project-link">

                            <div className="icons">
                                <div className="icon-link icon"></div>
                                <div className="icon-github icon"></div>
                            </div>


                            <button className="show-more">
                                more <span className="icon-arrow_forward"></span>
                            </button>

                        </div>
                    </div>
                </article>






                <article className='card'>
                    <div className='img-container'>
                        <img src="./project 004.jpg" alt="project-img " />
                    </div>


                    <div className="box">
                        <h2 className="title">Porject 4</h2>
                        <p className="sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="project-link">

                            <div className="icons">
                                <div className="icon-link icon"></div>
                                <div className="icon-github icon"></div>
                            </div>


                            <button className="show-more">
                                more <span className="icon-arrow_forward"></span>
                            </button>

                        </div>
                    </div>
                </article>





                <article className='card'>
                    <div className='img-container'>
                        <img src="./project 005.jpg" alt="project-img " />
                    </div>


                    <div className="box">
                        <h2 className="title">Porject 5</h2>
                        <p className="sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="project-link">

                            <div className="icons">
                                <div className="icon-link icon"></div>
                                <div className="icon-github icon"></div>
                            </div>


                            <button className="show-more">
                                more <span className="icon-arrow_forward"></span>
                            </button>

                        </div>
                    </div>
                </article>





                <article className='card'>
                    <div className='img-container'>
                        <img src="./project 006.jpg" alt="project-img " />
                    </div>


                    <div className="box">
                        <h2 className="title">Porject 6</h2>
                        <p className="sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="project-link">

                            <div className="icons">
                                <div className="icon-link icon"></div>
                                <div className="icon-github icon"></div>
                            </div>


                            <button className="show-more">
                                more <span className="icon-arrow_forward"></span>
                            </button>

                        </div>
                    </div>
                </article>



            </section>
        </main>
    );
}




export default main;