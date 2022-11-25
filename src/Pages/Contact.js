import React from 'react';
import Fade from 'react-reveal/Fade';


const Contact = () => {
    return (
        <div className="max-w-[1200px] mx-auto my-3 ">
            <div className=" mt-20">
                <p className="uppercase font-bold text-xl text-primary text-center">Contact us</p>
                <h1 className="font-bold text-4xl text-center">Stay Connected With Us</h1>

                <div className="max-w-1200 my-16 mx-auto md:flex md:items-center">
                    <Fade right delay={100}>
                        <div className="md:w-1/2 mx-auto px-2 md:px-0">
                            <img src='https://i.ibb.co/gJW5BVX/Group-10-1.png' className="mx-auto" />
                        </div>
                    </Fade>

                    <div className="md:w-1/2 mx-3 md:px-5">

                        <Fade right delay={500}><input type="email" placeholder="Your Email" className="input mx-auto input-bordered input-primary w-full " /></Fade>
                        <Fade right delay={1200}><input type="text" placeholder="Subject" className="input mt-5  mx-auto input-bordered input-primary w-full " /></Fade>
                        <Fade right delay={2000}><textarea placeholder="Your Message" className="textarea mt-5  mx-auto input-bordered input-primary w-full " /></Fade>
                        <Fade top delay={3000}><button className="btn mt-5  mx-auto bg-primary btn-primary w-full " >Submit</button></Fade>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;