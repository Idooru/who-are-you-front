import '../../../common/style/common.css';
import Title from '../../../components/home/title/Title';
import Retrieve from '../../../components/user/retrieve/Retrieve';

const RetrievePage = () => {
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

export default RetrievePage;
