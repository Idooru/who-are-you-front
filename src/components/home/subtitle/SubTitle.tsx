import subTitleStyle from './SubTitle.module.css';
import '../../../common/style/common.css';

const SubTitle = () => {
  return (
    <>
      <div className={`${subTitleStyle.area} sort_box`}>
        <p className={subTitleStyle.text}>The Modern Chatting App</p>
      </div>
    </>
  );
};

export default SubTitle;
