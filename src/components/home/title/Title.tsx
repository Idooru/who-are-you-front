import titleStyle from './Title.module.css';

const Title = () => {
  return (
    <>
      <div>
        <div id={titleStyle.who} className={titleStyle.font}>
          Who
        </div>
        <div id={titleStyle.are} className={titleStyle.font}>
          Are
        </div>
        <div id={titleStyle.you} className={titleStyle.font}>
          You
        </div>
      </div>
    </>
  );
};

export default Title;
