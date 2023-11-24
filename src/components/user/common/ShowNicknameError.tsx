import React from 'react';
import '../../../common/style/common.css';

interface ShowNicknameErrorProps {
  nickname: string;
  isValidNickname: boolean;
}

const ShowNicknameError = ({
  nickname,
  isValidNickname,
}: ShowNicknameErrorProps) => {
  return !isValidNickname && nickname.length > 0 ? (
    <div className={'error_box'}>영어 한글 숫자 가능, 특수문자 금지입니다.</div>
  ) : (
    <div></div>
  );
};

export default ShowNicknameError;
