import '../../../common/style/common.css';
import Title from '../../../components/home/title/Title';
import Register from '../../../components/user/register/Register';
import UserInputState from '../../../common/hooks/UserInputState';

const RegisterPage = () => {
  const {
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
  } = UserInputState();

  return (
    <>
      <div className={'area'}>
        <Title />
        <div className={'right'}>
          <Register
            imageState={imageState}
            nicknameState={nicknameState}
            emailState={emailState}
            passwordState={passwordState}
            passwordCorrectState={passwordCorrectState}
            isValidNicknameState={isValidNicknameState}
            isValidEmailState={isValidEmailState}
            isValidPasswordState={isValidPasswordState}
            isValidPasswordCorrectState={isValidPasswordCorrectState}
            notAllowState={notAllowState}
          />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
