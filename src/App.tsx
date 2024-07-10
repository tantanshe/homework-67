import './App.css';
import Password from './containers/Password/Password';
import Display from './containers/Display/Display';

const App = () => {

  return (
    <div className='password-system'>
      <Display/>
      <Password/>
    </div>
  );
};

export default App;
