import '../../../common/style/basic_layout.css';
import Title from '../title/Title';
import Login from '../login/Login';
import SubTitle from '../subtitle/SubTitle';

const HomeLayout = () => {
  return (
    <div className={'area'}>
      <Title />
      <div className={'right'}>
        <SubTitle />
        <Login />
      </div>
    </div>
  );
};

export default HomeLayout;
