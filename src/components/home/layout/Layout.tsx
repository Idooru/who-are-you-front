import layoutStyle from './Layout.module.css';
import Title from '../title/Title';
import Login from '../login/Login';

const Layout = () => {
  return (
    <div className={layoutStyle.area}>
      {/*<div className={`${layoutStyle.box} ${layoutStyle.left}`}>left</div>*/}
      {/*<div className={`${layoutStyle.box} ${layoutStyle.right}`}>right</div>*/}
      <Title />
      <Login />
    </div>
  );
};

export default Layout;
