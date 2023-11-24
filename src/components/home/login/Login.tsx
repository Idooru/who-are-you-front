import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import loginStyle from './login.module.css';
import '../../../common/style/common.css';
import React, { useEffect, useRef } from 'react';
import {
  EmailState,
  IsValidEmailState,
  IsValidPasswordState,
  NotAllowState,
  PasswordState,
} from '../../../common/hooks/UserInputStateType';
import { handleEmail } from '../../../utils/handleEmail';
import { handlePassword } from '../../../utils/handlePassword';
import ShowEmailError from '../../user/common/ShowEmailError';
import ShowPasswordError from '../../user/common/ShowPasswordError';

interface LoginProps {
  emailState: EmailState;
  passwordState: PasswordState;
  isValidEmailState: IsValidEmailState;
  isValidPasswordState: IsValidPasswordState;
  notAllowState: NotAllowState;
}

const Login = ({
  emailState,
  passwordState,
  isValidEmailState,
  isValidPasswordState,
  notAllowState,
}: LoginProps) => {
  const [email, setEmail] = emailState;
  const [password, setPassword] = passwordState;

  const [isValidEmail, setIsValidEmail] = isValidEmailState;
  const [isValidPassword, setIsValidPassword] = isValidPasswordState;
  const [notAllow, setNotAllow] = notAllowState;

  const emailInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  useEffect(() => {
    isValidEmail && isValidPassword ? setNotAllow(false) : setNotAllow(true);
  }, [isValidEmail, isValidPassword]);

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
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
              onChange={(event) =>
                handleEmail({ event, email, setEmail, setIsValidEmail })
              }
              ref={emailInputRef}
              autoComplete={'off'}
              maxLength={25}
            />
            <ShowEmailError email={email} isValidEmail={isValidEmail} />
            <label htmlFor={'password_input'}>
              <FontAwesomeIcon icon={faLock} className={loginStyle.icons} />
            </label>
            <input
              id={'password_input'}
              className={'input_box none_line'}
              type={'password'}
              placeholder={'password'}
              onChange={(event) =>
                handlePassword({
                  event,
                  password,
                  setPassword,
                  setIsValidPassword,
                })
              }
              autoComplete={'off'}
              maxLength={30}
            />
            <ShowPasswordError
              password={password}
              isValidPassword={isValidPassword}
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
