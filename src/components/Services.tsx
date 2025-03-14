import React, { useState } from 'react';

const Services: React.FC = () => {
  const [hoveredImage1, setHoveredImage1] = useState(false);
  const [hoveredImage2, setHoveredImage2] = useState(false);
  const [hoveredImage3, setHoveredImage3] = useState(false);
  const [hoveredImage4, setHoveredImage4] = useState(false);
  
  return (
    <section className="services" id="services">
      <div className="services__hero" style={{
        backgroundImage: 'url("/assets/images/bg-black.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/assets/images/head.svg")',
          backgroundSize: '30%',
          opacity: 0.2,
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/assets/images/bg-needs-sircles.svg")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2,
          opacity: 1
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 3
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>LEONIDES</h1>
          <p style={{
            fontSize: '24px'
          }}>Transform your life!</p>
        </div>
      </div>
      
      <div className="services__needs" style={{
        padding: '100px 0',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{
            backgroundImage: 'url("/assets/images/header-need.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: '50px 0',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#444446',
              marginBottom: '10px'
            }}>POTREBY LUDI</h2>
            <p style={{
              fontSize: '24px',
              color: '#a19271'
            }}>LEONIDES</p>
            
            <div style={{
              backgroundImage: 'url("/assets/images/ornament.svg")',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '30px',
              width: '100%',
              marginTop: '20px'
            }}></div>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            margin: '50px 0'
          }}>
            <div style={{
              textAlign: 'center',
              margin: '20px',
              width: '200px'
            }}>
              <h3 style={{
                fontSize: '18px',
                marginBottom: '15px',
                color: '#444446'
              }}>DETI</h3>
              <div style={{
                width: '150px',
                height: '150px',
                margin: '0 auto',
                overflow: 'hidden',
                borderRadius: '50%'
              }}
                onMouseEnter={() => setHoveredImage1(true)}
                onMouseLeave={() => setHoveredImage1(false)}
              >
                <img 
                  src="/assets/menu/menu-need-1.jpg" 
                  alt="DETI" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: hoveredImage1 ? 'grayscale(0%)' : 'grayscale(100%)',
                    transition: 'filter 0.4s ease'
                  }}
                />
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              margin: '20px',
              width: '200px'
            }}>
              <h3 style={{
                fontSize: '18px',
                marginBottom: '15px',
                color: '#444446'
              }}>BYVANIE</h3>
              <div style={{
                width: '150px',
                height: '150px',
                margin: '0 auto',
                overflow: 'hidden',
                borderRadius: '50%'
              }}
                onMouseEnter={() => setHoveredImage2(true)}
                onMouseLeave={() => setHoveredImage2(false)}
              >
                <img 
                  src="/assets/menu/menu-need-2.jpg" 
                  alt="BYVANIE" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: hoveredImage2 ? 'grayscale(0%)' : 'grayscale(100%)',
                    transition: 'filter 0.4s ease'
                  }}
                />
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              margin: '20px',
              width: '200px'
            }}>
              <h3 style={{
                fontSize: '18px',
                marginBottom: '15px',
                color: '#444446'
              }}>SPORENIE</h3>
              <div style={{
                width: '150px',
                height: '150px',
                margin: '0 auto',
                overflow: 'hidden',
                borderRadius: '50%'
              }}
                onMouseEnter={() => setHoveredImage3(true)}
                onMouseLeave={() => setHoveredImage3(false)}
              >
                <img 
                  src="/assets/menu/menu-need-3.jpg" 
                  alt="SPORENIE" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: hoveredImage3 ? 'grayscale(0%)' : 'grayscale(100%)',
                    transition: 'filter 0.4s ease'
                  }}
                />
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              margin: '20px',
              width: '200px'
            }}>
              <h3 style={{
                fontSize: '18px',
                marginBottom: '15px',
                color: '#444446'
              }}>DOCHODOK</h3>
              <div style={{
                width: '150px',
                height: '150px',
                margin: '0 auto',
                overflow: 'hidden',
                borderRadius: '50%'
              }}
                onMouseEnter={() => setHoveredImage4(true)}
                onMouseLeave={() => setHoveredImage4(false)}
              >
                <img 
                  src="/assets/menu/menu-need-4.jpg" 
                  alt="DOCHODOK" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: hoveredImage4 ? 'grayscale(0%)' : 'grayscale(100%)',
                    transition: 'filter 0.4s ease'
                  }}
                />
              </div>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            margin: '50px 0'
          }}>
            <div style={{ flex: '1', padding: '0 20px', minWidth: '300px' }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut nisi ultrices, rhoncus nisl quis, tempor sem.</p>
            </div>
            <div style={{ flex: '1', padding: '0 20px', minWidth: '300px' }}>
              <p>Donec at arcu nunc. In tincidunt egestas nulla, et semper mi pellentesque nec. Cras nec scelerisque risus, quis cursus nunc. Morbi condimentum dui et lacus venenatis faucibus.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="services__map" style={{
        height: '400px',
        position: 'relative'
      }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.9574244017374!2d17.11197881564712!3d48.143645459323785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89401963d4e3%3A0x9faebc0b607daaa3!2sHviezdoslavovo%20n%C3%A1mestie%2C%20811%2002%20Bratislava%2C%20Slovakia!5e0!3m2!1sen!2sus!4v1632481641572!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy">
        </iframe>
      </div>
    </section>
  );
};

export default Services; 