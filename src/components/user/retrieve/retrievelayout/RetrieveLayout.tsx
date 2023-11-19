import '../../../../common/style/basic_layout.css';
import Title from '../../../home/title/Title';
import Retrieve from '../retrieve/Retrieve';

const RetrieveLayout = () => {
  return (
    <>
      <div className={'area'}>
        <Title />
        <div className={'right'}></div>
        <Retrieve />
      </div>
    </>
  );
};

export default RetrieveLayout;
