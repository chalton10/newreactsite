import logo from '../logo.svg';
import '../App.css';
import Menu from './Menu';

const Header = () => {
  return (
    <div className="App">
        <header className="App-header flex justify-between items-center">
          <div id='logo' className='w-32'>
            <a href='/'>
                <img src={logo} className="App-logo" alt="logo" />
            </a>
          </div>
          <div className='menu'>
            <Menu />
          </div>
        </header>
    </div>
  );
}

export default Header;