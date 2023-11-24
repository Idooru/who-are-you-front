import React from 'react';

interface HandleNickname {
  event: React.ChangeEvent<HTMLInputElement>;
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  setIsValidNickname: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handleNickname = ({
  event,
  nickname,
  setNickname,
  setIsValidNickname,
}: HandleNickname) => {
  setNickname(event.target.value);
  const regex = /^[a-zA-Z0-9가-힣]+$/;

  regex.test(nickname) ? setIsValidNickname(true) : setIsValidNickname(false);
};
