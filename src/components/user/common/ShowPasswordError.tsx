import React from 'react';
import '../../../common/style/common.css';

interface showPasswordErrorProps {
  password: string;
  isValidPassword: boolean;
}

const ShowPasswordError = ({
  password,
  isValidPassword,
}: showPasswordErrorProps) => {
  return !isValidPassword && password.length > 0 ? (
    <div className={'error_box'}>
      대소문자, 숫자, 특수문자를 포함시켜주세요.
    </div>
  ) : (
    <div></div>
  );
};

export default ShowPasswordError;
