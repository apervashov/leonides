import React from 'react';

const Hero: React.FC = () => {

  return (
    <section 
      className="hero" 
      id="hero" 
      style={{
        backgroundImage: 'url("/assets/images/bg-black.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">LEONIDES</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero; 