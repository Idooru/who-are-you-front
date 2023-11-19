import registerStyle from './Register.module.css';
import '../../../../common/style/common.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faUser,
  faEnvelope,
  faLock,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import defaultUserImg from '../../../../assets/user/default_user.jpg';

const Register = () => {
  const [image, setImage] = useState<File | null>(null);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCorrect, setPasswordCorrect] = useState('');

  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const nicknameInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    nicknameInputRef.current?.focus();
  }, []);

  const onClickUpload = () => {
    imageInputRef.current?.click();
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const blob = new Blob([file], { type: file.type });
      const imageUrl = URL.createObjectURL(blob);

      if (imageRef.current?.src) {
        imageRef.current.src = imageUrl;
      }

      setImage(file || null);
    }
  };

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

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

    console.log(image);
    console.log(nickname);
    console.log(email);
    console.log(password);
    console.log(passwordCorrect);
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
            alt={'profile image'}
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
              onChange={onChangeImage}
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
          <label htmlFor={'name_input'}>
            <FontAwesomeIcon icon={faUser} className={'icons'} />
          </label>
          <input
            id={'name_input'}
            className={'input_box none_line'}
            type={'text'}
            placeholder={'Nickname'}
            ref={nicknameInputRef}
            onChange={onChangeNickname}
            autoComplete={'off'}
          />
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
          />
          <label htmlFor={'password_input'}>
            <FontAwesomeIcon icon={faLock} className={'icons'} />
          </label>
          <input
            id={'password_input'}
            className={'input_box none_line'}
            type={'password'}
            placeholder={'password'}
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
            placeholder={'password correct'}
            onChange={onChangePasswordCorrect}
            autoComplete={'off'}
          />
          <input
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
