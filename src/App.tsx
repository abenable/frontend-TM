import './App.css';

function App() {
  return (
    <>
      <div className='main-message'>
        <span>message</span>
      </div>
      <div>
        <div className='header-1'>
          <div>currency</div>
          <div className='nav1'>
            <span>blog</span>
            <span>contact us</span>
            <span>sign in</span>
            <span>create account</span>
            <span>sing in with socials</span>
          </div>
        </div>
        <div className='header-main'>
          <div className='logo'>logo</div>
          <div className='search-field'>
            <input type='text' name='search' id='search' />
          </div>
          <div className='contact'>call us now</div>
          <div></div>
          <span>account</span>
          <span>cart</span>
        </div>
        <div className='header-3'>
          <span>home</span>
          <span>categories</span>
          <span>products</span>
          <span>about us</span>
          <span>cart</span>
        </div>
      </div>
      <h1>Welcome to trendyMart</h1>
    </>
  );
}

export default App;
