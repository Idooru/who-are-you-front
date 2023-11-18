import layoutStyle from './Layout.module.css';
import Title from '../title/Title';
import Login from '../login/Login';
import SubTitle from '../subtitle/SubTitle';

const Layout = () => {
  return (
    <div className={layoutStyle.area}>
      <Title />
      <div className={layoutStyle.right}>
        <SubTitle />
        <Login />
      </div>
    </div>
  );
};

export default Layout;
