import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section about" id="about" style={{
      backgroundImage: 'url("/assets/images/bg-about.svg")',
      position: 'relative'
    }}>
      <div className="container">
        <div className="about__title-container" style={{ position: 'relative', textAlign: 'center' }}>
          <h2 className="about__title" style={{
            backgroundImage: 'url("/assets/images/header-about.svg")',
            backgroundSize: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '150px 0',
            width: '50%',
            color: '#444446',
            textAlign: 'center',
            position: 'relative',
            margin: '0 auto',
            display: 'inline-block'
          }}>O SPOLOČNOSTI</h2>
          
          <div className="about__ornament" style={{
            backgroundImage: 'url("/assets/images/ornament.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '30px',
            width: '100%',
            position: 'absolute',
            bottom: '40px',
            left: 0,
            right: 0
          }}></div>
        </div>
        
        <div className="about__grid-photos">
          <div className="about__grid-photo">
            <h3 className="about__grid-title">INŠPIROVANÝ<br />HISTÓRIOU</h3>
            <div className="about__grid-line"></div>
            <div className="photo-placeholder photo-placeholder-1" style={{ height: '500px', width: '100%', backgroundImage: 'url("/assets/menu/menu-01.jpg")' }}></div>
          </div>
          <div className="about__grid-photo">
            <h3 className="about__grid-title">VÍZIA A<br />POSLANIE</h3>
            <div className="about__grid-line"></div>
            <div className="photo-placeholder photo-placeholder-2" style={{ height: '500px', width: '100%', backgroundImage: 'url("/assets/menu/menu-02.jpg")' }}></div>
          </div>
          <div className="about__grid-photo">
            <h3 className="about__grid-title">HODNOTY<br />LEONIDES</h3>
            <div className="about__grid-line"></div>
            <div className="photo-placeholder photo-placeholder-3" style={{ height: '500px', width: '100%', backgroundImage: 'url("/assets/menu/menu-03.jpg")' }}></div>
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__section">
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut nisi ultrices, rhoncus nisl quis, tempor sem. Donec at arcu nunc. In tincidunt egestas nulla, et semper mi pellentesque nec.
            </p>
          </div>
          <div className="about__section">
            <p className="about__text">
              Cras nec scelerisque risus, quis cursus nunc. Morbi condimentum dui et lacus venenatis faucibus. Nullam consectetur euismod justo, pulvinar congue neque interdum eget. Vestibulum eget lectus nec eros tempus faucibus.
            </p>
          </div>
          <div className="about__section">
            <p className="about__text">
              Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut nisi ultrices, rhoncus nisl quis, tempor sem. Donec at arcu nunc. In tincidunt egestas nulla, et semper mi pellentesque nec.
            </p>
          </div>
          <div className="about__section">
            <p className="about__text">
              Additional content for the fourth section. You can add more text here to match the style of the other sections.
            </p>
          </div>
        </div>
        
        <img src="/assets/images/money copy.png" alt="Money" style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          width: '200px',
          height: 'auto'
        }} />
      </div>
    </section>
  );
};

export default About; 