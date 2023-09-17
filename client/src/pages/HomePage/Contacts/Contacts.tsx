import React, { FC } from 'react';
import { ContactsForm } from './ContactsForm';
import './Contacts.scss';

export const Contacts: FC = () => {
  return (
    <section className="container message-us__container">
      <div className="message-us__container-inner">
        <div className="message-us__wrapper">
          <div className="message-us__form-wrapper">
            <h2 className="title message-us__top-title">have any questions?</h2>
            <p className="message-us__top-hint">
              Here few ways to get in touch with us:
            </p>
            <ContactsForm />

            {/* <form className="message-us__form" action="#">
              <p className="message-us__form-title">Message us</p>

              <input
                className="message-us__form-item"
                type="text"
                name="name"
                required
                placeholder="Name"
              />

              <input
                className="message-us__form-item"
                type="email"
                name="email"
                required
                placeholder="Email"
              />

              <textarea
                rows={1}
                className="message-us__form-item message-us__form-message"
                name="message"
                required
                placeholder="Message"
                maxLength={250}
              />

              <Button variant={buttonVariant.SUBMIT}>Submit</Button>
            </form> */}
          </div>

          <div className="message-us__contact">
            <div className="message-us__contact-item">
              <p className="message-us__contact-item-title">Our phone</p>
              <p className="message-us__contact-item-content">
                +44 098 454 56 34
              </p>
            </div>
            <div className="message-us__contact-item">
              <p className="message-us__contact-item-title">Our email</p>
              <p className="message-us__contact-item-content">
                potrpots@gmail.com
              </p>
            </div>
            <div className="message-us__contact-item">
              <p className="message-us__contact-item-title">Our office</p>
              <p className="message-us__contact-item-content">
                United Kingdom 99 Staple Hill Road, Bristol, BS16 5AD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
