import React from 'react';
import '../../../common/style/common.css';

interface ShowPasswordCorrectErrorProps {
  password: string;
  passwordCorrect: string;
}

const ShowPasswordCorrectError = ({
  password,
  passwordCorrect,
}: ShowPasswordCorrectErrorProps) => {
  return password !== passwordCorrect ? (
    <div className={'error_box'}>입력된 비밀번호가 일치하지 않습니다.</div>
  ) : (
    <div></div>
  );
};

export default ShowPasswordCorrectError;
