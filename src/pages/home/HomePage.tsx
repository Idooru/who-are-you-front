import '../../common/style/common.css';
import '../../common/style/basic_layout.css';
import Title from '../../components/home/title/Title';
import SubTitle from '../../components/home/subtitle/SubTitle';
import Login from '../../components/home/login/Login';
import UserInputState from '../../common/hooks/UserInputState';

const HomePage = () => {
  const {
    emailState,
    passwordState,
    isValidEmailState,
    isValidPasswordState,
    notAllowState,
  } = UserInputState();

  return (
    <div className={'area'}>
      <Title />
      <div className={'right'}>
        <SubTitle />
        <Login
          emailState={emailState}
          passwordState={passwordState}
          isValidEmailState={isValidEmailState}
          isValidPasswordState={isValidPasswordState}
          notAllowState={notAllowState}
        />
      </div>
    </div>
  );
};

export default HomePage;
