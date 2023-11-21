import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import loginStyle from './login.module.css';
import '../../../common/style/common.css';
import React, { useEffect, useRef, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const emailInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  useEffect(() => {
    isValidEmail && isValidPassword ? setNotAllow(false) : setNotAllow(true);
  }, [isValidEmail, isValidPassword]);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    regex.test(email) ? setIsValidEmail(true) : setIsValidEmail(false);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    regex.test(password) ? setIsValidPassword(true) : setIsValidPassword(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };

  return (
    <>
      <div className={loginStyle.box}>
        <div className={'title sort_box'}>
          <p>LOGIN</p>
        </div>
        <div id={loginStyle.form} className={'sort_box'}>
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
              ref={emailInputRef}
              autoComplete={'off'}
            />
            {!isValidEmail && email.length > 0 && (
              <div className={'error_box'}>
                Please format your email correctly
              </div>
            )}
            <label htmlFor={'password_input'}>
              <FontAwesomeIcon icon={faLock} className={loginStyle.icons} />
            </label>
            <input
              id={'password_input'}
              className={'input_box none_line'}
              type={'password'}
              placeholder={'password'}
              onChange={onChangePassword}
              autoComplete={'off'}
            />
            {!isValidPassword && password.length > 0 && (
              <div className={'error_box'}>
                Please format your password correctly
              </div>
            )}
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
              disabled={notAllow}
              className={'submit_button sort_box none_line'}
              type={'submit'}
              value={'LOGIN'}
              onClick={onSubmit}
            />
          </form>
        </div>
        <div id={loginStyle.option} className={'sort_box'}>
          <Link className={loginStyle.font_style} to={'/user/register'}>
            Register
          </Link>
          <Link
            className={loginStyle.font_style}
            to={'/user/recovery/password'}
          >
            Forgot Password
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
