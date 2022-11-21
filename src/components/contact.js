import './contact.scss';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cvtp133', 'template_fop0rfa', form.current, 'wLSvmsGdgt4ziE9ng')
            .then((result) => {
                window.alert("Email sent!");
            }, (error) => {
                console.log(error.text);
            });

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title" id="contact-title">contact me</div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="input">
                    <label className="input-label">Name: </label>
                    <input type="text" id="name" name="name" className="input-field" required />
                </div>
                <div className="input">
                    <label className="input-label">Email: </label>
                    <input type="email" id="email" name="email" className="input-field" required />
                </div>
                <div className="input">
                    <label className="input-label">Message: </label>
                    <textarea id="message" name="message" className="input-field" required></textarea>
                </div>
                <div className="action">
                    <input type="submit" value="Send" className='action-button' />
                </div>
            </form>
        </div>
    );
}

export default Contact;