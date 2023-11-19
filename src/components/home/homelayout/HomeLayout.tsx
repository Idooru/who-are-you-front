import homeLayoutStyle from './HomeLayout.module.css';
import Title from '../title/Title';
import Login from '../login/Login';
import SubTitle from '../subtitle/SubTitle';

const HomeLayout = () => {
  return (
    <div className={homeLayoutStyle.area}>
      <Title />
      <div className={homeLayoutStyle.right}>
        <SubTitle />
        <Login />
      </div>
    </div>
  );
};

export default HomeLayout;
