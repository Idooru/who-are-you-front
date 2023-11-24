import '../../../common/style/common.css';
import Title from '../../../components/home/title/Title';
import Register from '../../../components/user/register/Register';

const RegisterPage = () => {
  return (
    <>
      <div className={'area'}>
        <Title />
        <div className={'right'}>
          <Register />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
