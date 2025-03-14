import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <section className="section portfolio" id="portfolio" style={{ position: 'relative', padding: 0, margin: 0 }}>
      <div className="container" style={{ padding: 0, margin: 0, width: '100vw' }}>

        <div 
          className="portfolio__wide-image" 
          style={{
            height: '90vh',
            width: '100vw',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url("/assets/images/image01.jpg")',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: '50%',
              width: '50%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              transformOrigin: 'right center',
              transform: isHovered1 ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.5s ease'
            }}></div>
            
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              width: '50%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              transformOrigin: 'left center',
              transform: isHovered1 ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.5s ease'
            }}></div>
            
            <div style={{
              position: 'relative',
              color: '#fff',
              fontSize: '24px',
              opacity: isHovered1 ? 1 : 0,
              transition: 'opacity 0.3s ease 0.2s',
              zIndex: 3
            }}>
              <span>Lorem ipsum dolor sit amet </span>
            </div>
          </div>
        </div>

        <div className="portfolio__split" style={{ display: 'flex', width: '100vw' }}>
          <div className="portfolio__left" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <div 
              className="portfolio__image" 
              style={{
                background: '#d0d0d0',
                height: '50vh',
                width: '50vw',
                backgroundImage: 'url("/assets/images/image02.jpg")',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: '50%',
                  width: '50%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  transformOrigin: 'right center',
                  transform: isHovered2 ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.5s ease'
                }}></div>
                
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  width: '50%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  transformOrigin: 'left center',
                  transform: isHovered2 ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.5s ease'
                }}></div>
                
                <div style={{
                  position: 'relative',
                  color: '#fff',
                  fontSize: '24px',
                  opacity: isHovered2 ? 1 : 0,
                  transition: 'opacity 0.3s ease 0.2s',
                  zIndex: 3
                }}>
                  <span>Lorem ipsum dolor sit amet </span>
                </div>
              </div>
            </div>
            <div 
              className="portfolio__image" 
              style={{
                background: '#c0c0c0',
                height: '50vh',
                width: '50vw',
                backgroundImage: 'url("/assets/images/image03.jpg")',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: '50%',
                  width: '50%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  transformOrigin: 'right center',
                  transform: isHovered3 ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.5s ease'
                }}></div>
                
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  width: '50%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  transformOrigin: 'left center',
                  transform: isHovered3 ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.5s ease'
                }}></div>
                
                <div style={{
                  position: 'relative',
                  color: '#fff',
                  fontSize: '24px',
                  opacity: isHovered3 ? 1 : 0,
                  transition: 'opacity 0.3s ease 0.2s',
                  zIndex: 3
                }}>
                  <span>Lorem ipsum dolor sit amet </span>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio__right" style={{ flex: 1 }}>
            <div 
              className="portfolio__image" 
              style={{
                background: '#b0b0b0',
                height: '100vh',
                width: '50vw',
                backgroundImage: 'url("/assets/images/image04.jpg")',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: '50%',
                  width: '50%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  transformOrigin: 'right center',
                  transform: isHovered4 ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.5s ease'
                }}></div>
                
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  width: '50%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  transformOrigin: 'left center',
                  transform: isHovered4 ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.5s ease'
                }}></div>
                
                <div style={{
                  position: 'relative',
                  color: '#fff',
                  fontSize: '24px',
                  opacity: isHovered4 ? 1 : 0,
                  transition: 'opacity 0.3s ease 0.2s',
                  zIndex: 3
                }}>
                  <span>Lorem ipsum dolor sit amet </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 