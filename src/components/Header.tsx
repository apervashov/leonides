import React, { useState, useEffect } from 'react';
import BurgerIcon from '../components/icons/BurgerIcon';
import CloseIcon from '../components/icons/CloseIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  
  useEffect(() => {
    const sections = ['hero', 'about', 'portfolio', 'services', 'team', 'contact'];

    const handleScroll = () => {
      
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const leftNavItems = [
    { id: 'hero', label: '' },
    { id: 'about', label: '' },
    { id: 'portfolio', label: '' }
  ];

  
  const rightNavItems = [
    { id: 'services', label: '' },
    { id: 'team', label: '' },
    { id: 'contact', label: '' }
  ];

  
  const mobileMenuItems = [
    { id: 'about', number: '01', label: 'O SPOLOČNOSTI', image: '/assets/menu/menu-01.jpg' },
    { id: 'services', number: '02', label: 'ČO PONÚKA LEONIDES?', image: '/assets/menu/menu-02.jpg' },
    { id: 'team', number: '03', label: 'POTREBY ĽUDÍ', image: '/assets/menu/menu-03.jpg' },
    { id: 'portfolio', number: '04', label: 'ZMEŇ SVOJ ŽIVOT', image: '/assets/menu/menu-04.jpg' },
    { id: 'partners', number: '05', label: 'PARTNERI', image: '/assets/menu/menu-05.jpg' },
    { id: 'contact', number: '06', label: 'KONTAKT', image: '/assets/menu/menu-06.jpg' }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container header__container">
          <nav className="header__nav header__nav--left">
            {leftNavItems.map(item => (
              <div key={item.id} className="header__nav-item">
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </nav>


          <div className="header__burger-container" onClick={toggleMenu}>
            <button 
              className={`header__burger ${isMenuOpen ? 'active' : ''}`}
              aria-label="Меню"
            >
              <BurgerIcon className="burger-svg" />
            </button>
          </div>


          <nav className="header__nav header__nav--right">
            {rightNavItems.map(item => (
              <div key={item.id} className="header__nav-item">
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </header>


      <div className={`fullscreen-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="fullscreen-menu__header">
          <div className="fullscreen-menu__title">MENU</div>
          <div className="fullscreen-menu__close" onClick={closeMenu}>
            <div className="fullscreen-menu__close-triangle">
              <CloseIcon className="close-svg" />
            </div>
          </div>
        </div>

        <div className="fullscreen-menu__grid">
          {mobileMenuItems.map(item => (
            <div className="fullscreen-menu__item" key={item.id}>
              <a href={`#${item.id}`} onClick={closeMenu}>
                <div className="fullscreen-menu__item-number">{item.number}</div>
                <div className="fullscreen-menu__item-image">
                  <div
                    className="circle-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                </div>
                <div className="fullscreen-menu__item-label">{item.label}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
