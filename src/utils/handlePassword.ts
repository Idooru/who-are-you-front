import React from 'react';

interface HandlePassword {
  event: React.ChangeEvent<HTMLInputElement>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setIsValidPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handlePassword = ({
  event,
  password,
  setPassword,
  setIsValidPassword,
}: HandlePassword) => {
  setPassword(event.target.value);
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  regex.test(password) ? setIsValidPassword(true) : setIsValidPassword(false);
};
