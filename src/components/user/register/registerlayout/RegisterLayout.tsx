import '../../../../common/style/basic_layout.css';
import Title from '../../../home/title/Title';
import Register from '../register/Register';

const RegisterLayout = () => {
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

export default RegisterLayout;
