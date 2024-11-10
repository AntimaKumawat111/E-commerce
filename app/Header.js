import CloseIcon from '@mui/icons-material/Close';

function Header() {
  return (
    <>

      <div className="page1">
        <div className="header">
        <CloseIcon id="closeBtn" />
          <h2>Sign up and get 20% off to your first order.</h2>
          <a href="#" id='headerAncherTag'> Sign Up Now  </a>
        </div>
      </div>
    </>
  );
}

export default Header;