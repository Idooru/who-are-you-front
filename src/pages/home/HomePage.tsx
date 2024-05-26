import '../../common/style/common.css';
import '../../common/style/basic_layout.css';
import Title from '../../components/home/title/Title';
import SubTitle from '../../components/home/subtitle/SubTitle';
import Login from '../../components/home/login/Login';

const HomePage = () => {
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

export default HomePage;
