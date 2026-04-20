import './hero.css';

const Hero = () => {
    return (
        <section className='hero flex'>


            <div className='hero-info'>

                <div className="parent-avatar flex">
                    <img src="./Personal_Portfolio_img.png" alt="avatar-img" className="avatar" />
                    <div className='icon-verified'></div>
                </div>

                <h1 className='title'>Software Engineer,Web Developer</h1>
                <p className='sub-title'>Web Developer || NTI Trainee Hire Ready Program || Open Source Web Application</p>


                <div className="icons flex">
                    <div className="icon icon-linkedin-square"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-x"></div>
                    <div className="icon icon-facebook"></div>
                </div>



            </div>



            <div className='hero-img'>img</div>


        </section>
    );
}




export default Hero;