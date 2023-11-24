import React from 'react';

interface HandleEmail {
  event: React.ChangeEvent<HTMLInputElement>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setIsValidEmail: React.Dispatch<React.SetStateAction<boolean>>;
}

export const handleEmail = ({
  event,
  email,
  setEmail,
  setIsValidEmail,
}: HandleEmail) => {
  setEmail(event.target.value);
  const regex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  regex.test(email) ? setIsValidEmail(true) : setIsValidEmail(false);
};
