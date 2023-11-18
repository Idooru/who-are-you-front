import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import loginStyle from './login.module.css';
import '../../../common/style/common.css';

const Login = () => {
  return (
    <>
      <div className={loginStyle.box}>
        <div id={loginStyle.title} className={'sort_box'}>
          <p>LOGIN</p>
        </div>
        <div id={loginStyle.form} className={'sort_box'}>
          <form>
            <label htmlFor={'name_input'}>
              <FontAwesomeIcon icon={faUser} className={loginStyle.icons} />
            </label>
            <input
              id={'name_input'}
              className={`${loginStyle.input_box} none_line`}
              type={'text'}
              placeholder={'Username'}
            />
            <label htmlFor={'password_input'}>
              <FontAwesomeIcon icon={faLock} className={loginStyle.icons} />
            </label>
            <input
              id={'password_input'}
              className={`${loginStyle.input_box} none_line`}
              type={'password'}
              placeholder={'password'}
            />
            <div id={loginStyle.remember_user}>
              <input type={'checkbox'} />
              <p
                id={loginStyle.remember_user_text}
                className={loginStyle.font_style}
              >
                Remember Me
              </p>
            </div>
            <input
              id={loginStyle.submit_button}
              className={'sort_box none_line'}
              type={'submit'}
              value={'LOGIN'}
            />
          </form>
        </div>
        <div id={loginStyle.option} className={'sort_box'}>
          <a className={loginStyle.font_style}>Register</a>
          <a className={loginStyle.font_style}>Find Account</a>
        </div>
      </div>
    </>
  );
};

export default Login;
