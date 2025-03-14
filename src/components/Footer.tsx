import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <a href="/">LEONIDES</a>
        </div>
        
        <div className="footer__content">
          <div className="footer__column">
            <h3 className="footer__title">O NAS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.
            </p>
          </div>
          
          <div className="footer__column">
            <h3 className="footer__title">TELEFÓN</h3>
            <p>+421 905 181 972</p>
          </div>
          
          <div className="footer__column">
            <h3 className="footer__title">EMAIL</h3>
            <p>leonides@gmail.com</p>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} LEONIDES</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 