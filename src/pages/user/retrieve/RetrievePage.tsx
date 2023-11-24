import '../../../common/style/common.css';
import Title from '../../../components/home/title/Title';
import Retrieve from '../../../components/user/retrieve/Retrieve';
import UserInputState from '../../../common/hooks/UserInputState';

const RetrievePage = () => {
  const {
    emailState,
    passwordState,
    passwordCorrectState,
    isValidEmailState,
    isValidPasswordState,
    isValidPasswordCorrectState,
    notAllowState,
  } = UserInputState();

  return (
    <>
      <div className={'area'}>
        <Title />
        <div className={'right'}></div>
        <Retrieve
          emailState={emailState}
          passwordState={passwordState}
          passwordCorrectState={passwordCorrectState}
          isValidEmailState={isValidEmailState}
          isValidPasswordState={isValidPasswordState}
          isValidPasswordCorrectState={isValidPasswordCorrectState}
          notAllowState={notAllowState}
        />
      </div>
    </>
  );
};

export default RetrievePage;
