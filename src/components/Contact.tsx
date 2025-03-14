import React, { useState, useEffect, useRef } from 'react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    telefon: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    telefon: false,
    message: false
  });

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Имя обязательно' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Некорректный email' : '';
      case 'telefon':
        const phoneRegex = /^\+?[0-9\s-]{9,}$/;
        return value !== '' && !phoneRegex.test(value) ? 'Некорректный номер телефона' : '';
      case 'message':
        return value.trim() === '' ? 'Сообщение обязательно' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    
    setTouched(prevTouched => ({
      ...prevTouched,
      [name]: true
    }));

    
    const error = validateField(name, value);
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    
    let formValid = true;
    const newErrors = { ...errors };
    const newTouched = { name: true, email: true, telefon: true, message: true };
    
    
    Object.keys(formData).forEach(key => {
      const fieldName = key as keyof typeof formData;
      const error = validateField(key, formData[fieldName]);
      newErrors[fieldName] = error;
      if (error && (fieldName === 'name' || fieldName === 'email' || fieldName === 'message')) {
        formValid = false;
      }
    });
    
    setErrors(newErrors);
    setTouched(newTouched);
    
    if (formValid) {
      console.log('Form data submitted:', formData);
      
      setFormData({
        name: '',
        email: '',
        telefon: '',
        message: ''
      });
      
      setTouched({
        name: false,
        email: false,
        telefon: false,
        message: false
      });
    }
  };

  return (
    <section 
      className="section contact" 
      id="contact" 
      ref={sectionRef}
      style={{
        backgroundColor: '#f8f8f8',
        padding: '100px 0',
        position: 'relative',
        backgroundImage: 'url("/assets/images/contact-bg.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '40px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
        }}>
          <h2 style={{ 
            fontSize: '42px', 
            fontWeight: 'bold', 
            color: '#444', 
            marginBottom: '5px',
            textTransform: 'uppercase'
          }}>KONTAKT</h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#a19271', 
            marginBottom: '15px',
            letterSpacing: '1px'
          }}>LEONIDES</p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            margin: '20px auto'
          }}>
            <img src="/assets/images/ornament.svg" alt="Divider" style={{ width: '120px', height: 'auto' }} />
          </div>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '50px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
        }}>
          <p style={{ color: '#444', marginBottom: '10px' }}>
            <span style={{ color: '#a19271' }}>ADRESA</span> LEVOČSKÁ 5, PREŠOV, 080 01
          </p>
          <p style={{ color: '#444', marginBottom: '10px' }}>
            <span style={{ color: '#444', fontWeight: 'bold' }}>TELEFÓN</span> <span style={{ color: '#a19271' }}>+421 905 181 972</span>
          </p>
          <p style={{ color: '#444' }}>
            <span style={{ color: '#444' }}>MESTO</span> <span style={{ color: '#a19271' }}>PREŠOV / SLOVAKIA</span>
          </p>
          <div style={{ width: '60px', height: '1px', backgroundColor: '#a19271', margin: '20px auto' }}></div>
        </div>
        

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s',
        }}>
          <div style={{ flex: '1', minWidth: '300px', paddingRight: '15px' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '25px', position: 'relative' }}>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="MENO"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 0',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: `1px solid ${touched.name && errors.name ? '#ff3333' : '#a19271'}`,
                    backgroundColor: 'transparent',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                {touched.name && errors.name && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '0',
                    color: '#ff3333',
                    fontSize: '12px',
                    transition: 'all 0.3s ease',
                    animation: 'slideUp 0.3s ease'
                  }}>
                    {errors.name}
                  </div>
                )}
              </div>
              
              <div style={{ marginBottom: '25px', position: 'relative' }}>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 0',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: `1px solid ${touched.email && errors.email ? '#ff3333' : '#a19271'}`,
                    backgroundColor: 'transparent',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                {touched.email && errors.email && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '0',
                    color: '#ff3333',
                    fontSize: '12px',
                    transition: 'all 0.3s ease',
                    animation: 'slideUp 0.3s ease'
                  }}>
                    {errors.email}
                  </div>
                )}
              </div>
              
              <div style={{ marginBottom: '25px', position: 'relative' }}>
                <input 
                  type="tel" 
                  id="telefon" 
                  name="telefon"
                  placeholder="TELEFON"
                  value={formData.telefon}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    width: '100%',
                    padding: '12px 0',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom: `1px solid ${touched.telefon && errors.telefon ? '#ff3333' : '#a19271'}`,
                    backgroundColor: 'transparent',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
                {touched.telefon && errors.telefon && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '0',
                    color: '#ff3333',
                    fontSize: '12px',
                    transition: 'all 0.3s ease',
                    animation: 'slideUp 0.3s ease'
                  }}>
                    {errors.telefon}
                  </div>
                )}
              </div>
            </form>
          </div>
          
          <div style={{ flex: '1', minWidth: '300px', paddingLeft: '15px' }}>
            <div style={{ marginBottom: '25px', position: 'relative' }}>
              <textarea 
                id="message" 
                name="message"
                placeholder="ODKAZ.."
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                style={{
                  width: '100%',
                  height: '150px',
                  padding: '12px',
                  border: `1px solid ${touched.message && errors.message ? '#ff3333' : '#a19271'}`,
                  backgroundColor: 'transparent',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'none'
                }}
              ></textarea>
              {touched.message && errors.message && (
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '0',
                  color: '#ff3333',
                  fontSize: '12px',
                  transition: 'all 0.3s ease',
                  animation: 'slideUp 0.3s ease'
                }}>
                  {errors.message}
                </div>
              )}
            </div>
          </div>
          
          <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
            <button 
              type="submit"
              onClick={handleSubmit}
              style={{
                backgroundColor: 'transparent',
                color: '#444',
                border: 'none',
                borderBottom: '1px solid #a19271',
                fontSize: '16px',
                padding: '10px 0',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
            >
              ODOSLAT
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact; 