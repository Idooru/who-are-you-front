import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import loginStyle from './login.module.css';
import '../../../common/style/common.css';
import React, { useEffect, useRef, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };

  return (
    <>
      <div className={loginStyle.box}>
        <div id={loginStyle.title} className={'sort_box'}>
          <p>LOGIN</p>
        </div>
        <div id={loginStyle.form} className={'sort_box'}>
          <form>
            <label htmlFor={'email_input'}>
              <FontAwesomeIcon icon={faEnvelope} className={loginStyle.icons} />
            </label>
            <input
              id={'email_input'}
              className={`${loginStyle.input_box} none_line`}
              type={'text'}
              placeholder={'Email'}
              onChange={onChangeEmail}
              ref={emailInputRef}
              autoComplete={'off'}
            />
            <label htmlFor={'password_input'}>
              <FontAwesomeIcon icon={faLock} className={loginStyle.icons} />
            </label>
            <input
              id={'password_input'}
              className={`${loginStyle.input_box} none_line`}
              type={'password'}
              placeholder={'password'}
              onChange={onChangePassword}
              autoComplete={'off'}
            />
            <div id={loginStyle.remember_user}>
              <input type={'checkbox'} />
              <p
                id={loginStyle.remember_user_text}
                className={loginStyle.font_style}
              >
                Remember Me
              </p>
            </div>
            <input
              id={loginStyle.submit_button}
              className={'sort_box none_line'}
              type={'submit'}
              value={'LOGIN'}
              onClick={onSubmit}
            />
          </form>
        </div>
        <div id={loginStyle.option} className={'sort_box'}>
          <a className={loginStyle.font_style}>Register</a>
          <a className={loginStyle.font_style}>Find Account</a>
        </div>
      </div>
    </>
  );
};

export default Login;
