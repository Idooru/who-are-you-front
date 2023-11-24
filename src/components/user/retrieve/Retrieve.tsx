import retrieveStyle from './Retrieve.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faLock } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import {
  EmailState,
  IsValidEmailState,
  IsValidPasswordCorrectState,
  IsValidPasswordState,
  NotAllowState,
  PasswordCorrectState,
  PasswordState,
} from '../../../common/hooks/UserInputStateType';
import { useNavigate } from 'react-router-dom';
import ShowEmailError from '../common/ShowEmailError';
import { handleEmail } from '../../../utils/handleEmail';
import { handlePassword } from '../../../utils/handlePassword';
import ShowPasswordError from '../common/ShowPasswordError';
import { handlePasswordCorrect } from '../../../utils/handlePasswordCorrect';
import ShowPasswordCorrectError from '../common/ShowPasswordCorrectError';

interface RetrieveProps {
  emailState: EmailState;
  passwordState: PasswordState;
  passwordCorrectState: PasswordCorrectState;
  isValidEmailState: IsValidEmailState;
  isValidPasswordState: IsValidPasswordState;
  isValidPasswordCorrectState: IsValidPasswordCorrectState;
  notAllowState: NotAllowState;
}

const Retrieve = ({
  emailState,
  passwordState,
  passwordCorrectState,
  isValidEmailState,
  isValidPasswordState,
  isValidPasswordCorrectState,
  notAllowState,
}: RetrieveProps) => {
  const [email, setEmail] = emailState;
  const [password, setPassword] = passwordState;
  const [passwordCorrect, setPasswordCorrect] = passwordCorrectState;

  const [isValidEmail, setIsValidEmail] = isValidEmailState;
  const [isValidPassword, setIsValidPassword] = isValidPasswordState;
  const [isValidPasswordCorrect, setIsValidPasswordCorrect] =
    isValidPasswordCorrectState;

  const [notAllow, setNotAllow] = notAllowState;

  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  useEffect(() => {
    password === passwordCorrect
      ? setIsValidPasswordCorrect(true)
      : setIsValidPasswordCorrect(false);
  }, [password, passwordCorrect]);

  useEffect(() => {
    isValidEmail && isValidPassword && isValidPasswordCorrect
      ? setNotAllow(false)
      : setNotAllow(true);
  }, [isValidEmail, isValidPassword, isValidPasswordCorrect]);

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    navigate('/', { replace: true });
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
            onChange={(event) =>
              handleEmail({ event, email, setEmail, setIsValidEmail })
            }
            autoComplete={'off'}
            ref={emailInputRef}
            maxLength={25}
          />
          <ShowEmailError email={email} isValidEmail={isValidEmail} />
          <label htmlFor={'password_input'}>
            <FontAwesomeIcon icon={faLock} className={'icons'} />
          </label>
          <input
            id={'password_input'}
            className={'input_box none_line'}
            type={'password'}
            placeholder={'New password'}
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
          <label htmlFor={'password_correct_input'}>
            <FontAwesomeIcon icon={faKey} className={'icons'} />
          </label>
          <input
            id={'password_correct_input'}
            className={'input_box none_line'}
            type={'password'}
            placeholder={'New password correct'}
            onChange={(event) =>
              handlePasswordCorrect({ event, setPasswordCorrect })
            }
            autoComplete={'off'}
            maxLength={30}
          />
          <ShowPasswordCorrectError
            password={password}
            passwordCorrect={passwordCorrect}
          />
          <input
            disabled={notAllow}
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
