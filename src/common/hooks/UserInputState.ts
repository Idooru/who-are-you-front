import {
  EmailState,
  ImageState,
  IsValidEmailState,
  IsValidNicknameState,
  IsValidPasswordCorrectState,
  IsValidPasswordState,
  NicknameState,
  NotAllowState,
  PasswordCorrectState,
  PasswordState,
} from './UserInputStateType';
import { useState } from 'react';

const UserInputState = () => {
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

export default UserInputState;
