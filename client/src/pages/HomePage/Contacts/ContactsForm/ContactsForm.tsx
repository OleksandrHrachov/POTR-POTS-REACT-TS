import React, { FC, useState } from 'react';
import { Button, buttonVariant } from '../../../../components/shared/Button';
import './ContactsForm.scss';

export const ContactsForm: FC = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [showError, setShowError] = useState(false);

  const onSubmit = () => {
    if (!nameValue || !emailValue || !messageValue) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      setShowError(false);
      setSendingMessage(true);
      setTimeout(() => {
        setNameValue('');
        setEmailValue('');
        setMessageValue('');
        setSendingMessage(false);
      }, 3000);
    }
  };

  return (
    <form className="message-us__form" action="#">
      <p className="message-us__form-title">
        Message us{' '}
        {sendingMessage && (
          <span className="message-us__form-title-sending">sending...</span>
        )}
        {showError && <span className="message-us__form-title-error">not enough data</span>}
      </p>

      <input
        className="message-us__form-item"
        type="text"
        name="name"
        required
        placeholder="Name"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />

      <input
        className="message-us__form-item"
        type="email"
        name="email"
        required
        placeholder="Email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />

      <textarea
        rows={1}
        className="message-us__form-item message-us__form-message"
        name="message"
        required
        placeholder="Message"
        maxLength={250}
        value={messageValue}
        onChange={(e) => setMessageValue(e.target.value)}
      />

      <Button onClick={onSubmit} variant={buttonVariant.SUBMIT}>
        Submit
      </Button>
    </form>
  );
};
