import { useState } from 'react';

import React from 'react';

type ImageState = [
  File | null,
  React.Dispatch<React.SetStateAction<File | null>>,
];

type NicknameState = [string, React.Dispatch<React.SetStateAction<string>>];

type EmailState = [string, React.Dispatch<React.SetStateAction<string>>];

type PasswordState = [string, React.Dispatch<React.SetStateAction<string>>];

type PasswordCorrectState = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

type IsValidNicknameState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];

type IsValidEmailState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];

type IsValidPasswordState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];

type IsValidPasswordCorrectState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];

type NotAllowState = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const useUserInput = () => {
  const imageState: ImageState = useState<File | null>(null);
  const nicknameState: NicknameState = useState('');
  const emailState: EmailState = useState('');
  const passwordState: PasswordState = useState('');
  const passwordCorrectState: PasswordCorrectState = useState('');

  const isValidNicknameState: IsValidNicknameState = useState(false);
  const isValidEmailState: IsValidEmailState = useState(false);
  const isValidPasswordState: IsValidPasswordState = useState(false);
  const isValidPasswordCorrectState: IsValidPasswordCorrectState =
    useState(false);

  const notAllowState: NotAllowState = useState(true);

  return {
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
  };
};

export default useUserInput;
