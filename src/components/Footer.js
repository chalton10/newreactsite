import logo from '/newreactsite/src/logo.svg';

function Footer() {
    return (
        <div className="container">
            <div id='logo' className='w-16 m-auto'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <p className='text-white text-center'>Edit <code>src/App.js</code> and save to reload.</p>
        </div>
    );
}

export default Footer;