import React from 'react';

function Contact() {
    return (
        <div className='contact-form'>
            <h1>Skontaktuj się ze mną</h1>
            <form>
                <label>
                    Imię:
                </label>
                <input type="text" name='name' required />
                <label>
                    Email:
                </label>
                <input type="text" name='name' required />
                <label>
                    Wiadomość:
                </label>
                <textarea required></textarea>
                <button type='submit'>WYŚLIJ</button>
            </form>
        </div>
    );
}

export default Contact;