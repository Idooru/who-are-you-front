import retrieveStyle from './Retrieve.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faLock } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';

const Retrieve = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCorrect, setPasswordCorrect] = useState('');

  const emailInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCorrect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCorrect(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
    console.log(passwordCorrect);
  };

  return (
    <div className={retrieveStyle.box}>
      <div className={'title sort_box'}>
        <p>RECOVERY</p>
      </div>
      <div id={retrieveStyle.query} className={'sort_box'}>
        <p id={retrieveStyle.font_style}>
          If you would like to recover your password, please enter your email
          address and desired password.
        </p>
      </div>
      <div id={retrieveStyle.form} className={'sort_box'}>
        <form>
          <label htmlFor={'email_input'}>
            <FontAwesomeIcon icon={faEnvelope} className={'icons'} />
          </label>
          <input
            id={'email_input'}
            className={'input_box none_line'}
            type={'text'}
            placeholder={'Email'}
            onChange={onChangeEmail}
            autoComplete={'off'}
            ref={emailInputRef}
          />
          <label htmlFor={'password_input'}>
            <FontAwesomeIcon icon={faLock} className={'icons'} />
          </label>
          <input
            id={'password_input'}
            className={'input_box none_line'}
            type={'password'}
            placeholder={'New password'}
            onChange={onChangePassword}
            autoComplete={'off'}
          />
          <label htmlFor={'password_correct_input'}>
            <FontAwesomeIcon icon={faKey} className={'icons'} />
          </label>
          <input
            id={'password_correct_input'}
            className={'input_box none_line'}
            type={'password'}
            placeholder={'New password correct'}
            onChange={onChangePasswordCorrect}
            autoComplete={'off'}
          />
          <input
            style={{ marginTop: '25px' }}
            className={'submit_button sort_box none_line'}
            type={'submit'}
            value={'RECOVERY'}
            onClick={onSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Retrieve;
