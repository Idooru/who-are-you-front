import React from 'react';
import '../../../common/style/common.css';

interface ShowEmailErrorProps {
  email: string;
  isValidEmail: boolean;
}

const ShowEmailError = ({ email, isValidEmail }: ShowEmailErrorProps) => {
  return !isValidEmail && email.length > 0 ? (
    <div className={'error_box'}>@를 포함한 도메인 입력을 입력해주세요.</div>
  ) : (
    <div></div>
  );
};

export default ShowEmailError;
