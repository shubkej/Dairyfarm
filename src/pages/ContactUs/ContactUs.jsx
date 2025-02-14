import React from "react";
import "./Contact.css";
const Contact = () => {
    return (
        <div>

            <div class="contact-us">
                <div class="contact-us-content">
                    <div class="contact-layout">
                        <div class="contact-sub-title">
                            <img className="images" src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg" loading="lazy" alt="Title Icon" />
                            <div>Contact us</div>
                        </div>
                        <div className="contact-title">

                            <h1>We're here to help</h1>
                        </div>

                    </div>
                    <p class="help-text">Your satisfaction is our top priority. Our team is available 24/7 to assist with any questions or concerns.</p>
                </div>
                <div class="contact-us-image-content-wrapper hide-on-tab">
                    <img  
                        src="https://images.pexels.com/photos/27915160/pexels-photo-27915160/free-photo-of-a-cow-with-horns-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="contact-us-image images"
                    />
                </div>
            </div>






            <div class="contact-form-block">
                <div class="sub-title">
                    <img className="images" src="https://cdn.prod.website-files.com/660feff9e6770765774f4a4f/6659b299906d5895eeb0229b_ic-subtitle.svg" loading="lazy" alt="Title Icon" />
                    <div>Get In Touch</div>
                </div>




                <form class="form">
                    <h2 className="contact-title">Send Us a Message</h2>
                    <div className="input-filed-wrapper">
                        <div className="input-field-block">
                            <input
                                class="input-field w-input"
                                maxlength="256"
                                name="name"
                                data-name="Name"
                                placeholder="Enter your name"
                                type="text"
                                id="name"
                                required
                            ></input>
                        </div>
                        <div class="input-field-block">
                            <input
                                class="input-field w-input"
                                maxlength="256"
                                name="Phone-number"
                                data-name="Phone number"
                                placeholder="Enter  phone number"
                                type="tel"
                                id="Phone-number"
                            ></input>
                        </div>
                        <div class="input-field-block">
                            <input
                                class="input-field w-input"
                                maxlength="256"
                                name="Email"
                                data-name="Email"
                                placeholder="Email address"
                                type="email"
                                id="Email"
                                required
                            ></input>
                        </div>
                        <div class="input-field-block">
                            <input
                                class="input-field w-input"
                                maxlength="256"
                                name="Address"
                                data-name="Address"
                                placeholder="Your address"
                                type="text"
                                id="Address"
                            >

                            </input>
                            <div class="input-field-block">
                                <textarea class="input-field-text-area w-input"
                                    id="Message"
                                    name="Message"
                                    maxlength="5000"
                                    data-name="Message"
                                    placeholder="Write your message"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <input type="sumbit" className="contact-submit-button w-button" value="Send Message"></input>
                </form>
                <div class="w-form-done" tabindex="-1" role="region" aria-label="Contact Form success">
                    <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="w-form-fail" tabindex="-1" role="region" aria-label="Contact Form failure">
                    <div>Oops! Something went wrong while submitting the form.</div>
                </div>
            </div>

            <div>

                <div class="cta">
                    <div class="w-layout-blockcontainer container w-container">
                        <div class="cta-wrap">
                            <div class="cta-data">
                                <h2 class="cta-title">SURPRISE YOUR LOVED ONES WITH DAIRY PRODUCT GIFT CARDS!</h2>
                                <p class="cta-text">
                                    Sed gravida fringilla malesuada vel eleifend enim urna maecenas id. Neque turpis volutpat mollis donec odio velit faucibus.
                                    Non nibh dapibus faucibus diam fringilla volutpat sollicitudin.</p>
                                <div class="cta-button-wrap">
                                    <a href="" aria-current="page" class="cta-button w-inline-block w--current">
                                        <div>Join Our Team</div></a>
                                </div>

                            </div>
                            <div className="cta-img images">
                                <img src="https://images.pexels.com/photos/2928377/pexels-photo-2928377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="image1" />

                            </div>
                            <div className="cta-thumb-img images">
                                <img src="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="image2" />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <section class="contact-info">
                    <div class="w-layout-blockcontainer container w-container">
                        <div class="contact-wrapper">
                            <div class="contact-data">
                                <div class="contact-top">
                                    <div>
                                        <h4>Contact Information</h4>
                                        <p class="single-text">
                                            Our dedicated team is ready to assist you with any inquiries about our dairy products, nutritional information, or consultation needs. Reach out today, and let’s start the conversation about your dairy preferences and goals!</p>
                                    </div>
                                    <div>
                                        <p class="contact-address"> Address: Bihar , Bhagalpur ,813206</p>
                                        <a href="tel:987456321" class="plain-link">(91) 7470489417</a>
                                        <div class="contact-btm">
                                            <a href="mailto:ghra@support.com">info@dairyfarm.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};
export default Contact;
