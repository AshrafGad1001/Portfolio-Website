import './contact.css';

const contact = () => {
    return (
        <section className='contact-us'>

            <h2 className='title'>
                <span className='icon-envelope'></span>
                Contact Us
            </h2>

            <p className='sub-title'>Contact Us For More Information and Get notefied when i publish Something New</p>



            <div className="flex">
                <form >
                    <div className='form-group'>
                        <label htmlFor="email">Email Address : </label>
                        <input required placeholder='Enter Your Email' type="email" name="email" id="email" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="message">Your Message : </label>
                        <textarea required placeholder='Enter Your message' name="message" id="message"></textarea>
                    </div>

                    <button className='submit' >Submit</button>
                </form>





                <div className="animation border">animation</div>
            </div>




        </section>
    );
}




export default contact;