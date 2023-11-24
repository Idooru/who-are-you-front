import registerStyle from './Register.module.css';
import '../../../common/style/common.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faUser,
  faEnvelope,
  faLock,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef } from 'react';
import defaultUserImg from '../../../assets/user/default_user.jpg';
import {
  EmailState,
  ImageState,
  IsValidEmailState,
  IsValidNicknameState,
  IsValidPasswordState,
  IsValidPasswordCorrectState,
  NicknameState,
  NotAllowState,
  PasswordCorrectState,
  PasswordState,
} from '../../../common/hooks/UserInputStateType';
import { handleNickname } from '../../../utils/handleNickname';
import { handleEmail } from '../../../utils/handleEmail';
import { handlePassword } from '../../../utils/handlePassword';
import { handlePasswordCorrect } from '../../../utils/handlePasswordCorrect';
import { handleImage } from '../../../utils/handleImage';
import ShowNicknameError from '../common/ShowNicknameError';
import ShowEmailError from '../common/ShowEmailError';
import ShowPasswordError from '../common/ShowPasswordError';
import ShowPasswordCorrectError from '../common/ShowPasswordCorrectError';
import { useNavigate } from 'react-router-dom';

interface RegisterProps {
  imageState: ImageState;
  nicknameState: NicknameState;
  emailState: EmailState;
  passwordState: PasswordState;
  passwordCorrectState: PasswordCorrectState;
  isValidNicknameState: IsValidNicknameState;
  isValidEmailState: IsValidEmailState;
  isValidPasswordState: IsValidPasswordState;
  isValidPasswordCorrectState: IsValidPasswordCorrectState;
  notAllowState: NotAllowState;
}

const Register = ({
  imageState,
  nicknameState,
  emailState,
  passwordState,
  passwordCorrectState,
  isValidNicknameState,
  isValidEmailState,
  isValidPasswordState,
  isValidPasswordCorrectState,
  notAllowState,
}: RegisterProps) => {
  const [image, setImage] = imageState;
  const [nickname, setNickname] = nicknameState;
  const [email, setEmail] = emailState;
  const [password, setPassword] = passwordState;
  const [passwordCorrect, setPasswordCorrect] = passwordCorrectState;

  const [isValidNickname, setIsValidNickname] = isValidNicknameState;
  const [isValidEmail, setIsValidEmail] = isValidEmailState;
  const [isValidPassword, setIsValidPassword] = isValidPasswordState;
  const [isValidPasswordCorrect, setIsValidPasswordCorrect] =
    isValidPasswordCorrectState;

  const [notAllow, setNotAllow] = notAllowState;

  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const nicknameInputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    nicknameInputRef.current?.focus();
  }, []);

  useEffect(() => {
    password === passwordCorrect
      ? setIsValidPasswordCorrect(true)
      : setIsValidPasswordCorrect(false);
  }, [password, passwordCorrect]);

  useEffect(() => {
    isValidNickname && isValidEmail && isValidPassword && isValidPasswordCorrect
      ? setNotAllow(false)
      : setNotAllow(true);
  }, [isValidNickname, isValidEmail, isValidPassword, isValidPasswordCorrect]);

  const onClickUpload = () => {
    imageInputRef.current?.click();
  };

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    navigate('/', { replace: true });
  };

  return (
    <div className={registerStyle.box}>
      <div className={'title sort_box'}>
        <p>REGISTER</p>
      </div>
      <div id={registerStyle.form} className={'sort_box'}>
        <form>
          <img
            id={registerStyle.default_image}
            className={'sort_box'}
            src={defaultUserImg}
            alt={'profile images'}
            ref={imageRef}
          />
          <label id={registerStyle.image_label} htmlFor={'image_input'}>
            <FontAwesomeIcon icon={faCamera} className={'icons'} />
          </label>
          <div
            style={{ cursor: 'pointer' }}
            onClick={onClickUpload}
            className={'input_box none_line'}
          >
            <input
              id={'image_input'}
              type={'file'}
              onChange={(event) => handleImage({ event, imageRef, setImage })}
              placeholder={'profile image'}
              ref={imageInputRef}
              style={{ display: 'none' }}
            />
            {image ? (
              <p className={registerStyle.image_text}>{image.name}</p>
            ) : (
              <p className={registerStyle.image_text}>Profile image</p>
            )}
          </div>
          <label htmlFor={'nickname_input'}>
            <FontAwesomeIcon icon={faUser} className={'icons'} />
          </label>
          <input
            id={'nickname_input'}
            className={'input_box none_line'}
            type={'text'}
            placeholder={'Nickname'}
            ref={nicknameInputRef}
            value={nickname}
            onChange={(event) =>
              handleNickname({
                event,
                nickname,
                setNickname,
                setIsValidNickname,
              })
            }
            autoComplete={'off'}
            maxLength={10}
          />
          <ShowNicknameError
            nickname={nickname}
            isValidNickname={isValidNickname}
          />
          <label htmlFor={'email_input'}>
            <FontAwesomeIcon icon={faEnvelope} className={'icons'} />
          </label>
          <input
            id={'email_input'}
            className={'input_box none_line'}
            type={'text'}
            placeholder={'Email'}
            value={email}
            onChange={(event) =>
              handleEmail({ event, email, setEmail, setIsValidEmail })
            }
            autoComplete={'off'}
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
          <label htmlFor={'password_correct_input'}>
            <FontAwesomeIcon icon={faKey} className={'icons'} />
          </label>
          <input
            id={'password_correct_input'}
            className={'input_box none_line'}
            type={'password'}
            placeholder={'password correct'}
            onChange={(event) =>
              handlePasswordCorrect({
                event,
                setPasswordCorrect,
              })
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
            value={'REGISTER'}
            onClick={onSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
