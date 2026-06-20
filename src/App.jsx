import { useState, useCallback, useEffect } from 'react';
import { translations, langOrder } from './data/translations';
import { divisionData } from './data/teamData';
import LoadingScreen from './components/LoadingScreen';
import Confetti from './components/Confetti';
import AudioPlayer from './components/AudioPlayer';
import UkmApp from './components/UkmApp';
import './App.css';

function App() {
  const [phase, setPhase] = useState('loading');
  const [langIdx, setLangIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState(() => window.location.hash === '#umkm' ? 'umkm' : 'main');
  const lang = langOrder[langIdx];
  const t = (key) => translations[lang]?.[key] || key;

  const handleLoadDone = useCallback(() => setPhase('ready'), []);

  const cycleLang = () => setLangIdx((prev) => (prev + 1) % langOrder.length);

  // Scroll reveal observer
  useEffect(() => {
    if (phase !== 'ready') return;
    const els = document.querySelectorAll('.rv, .rv-l, .rv-r, .rv-s, .rv-z');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [phase]);

  // Hash-based page routing
  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === '#umkm') setPage('umkm');
      else setPage('main');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const sendWA = () => {
    const name = document.getElementById('wa-name')?.value || '';
    const msg = document.getElementById('wa-msg')?.value || '';
    const phone = '6285817048266';

    if (!name || !msg) {
      window.Swal?.fire({
        title: t('swal_empty_title'), text: t('swal_empty_text'), icon: 'error',
        confirmButtonColor: '#E83A4B', background: '#14141C', color: '#E8E0F0',
        customClass: { popup: 'card', confirmButton: 'action-btn' }
      });
      return;
    }

    window.Swal?.fire({
      title: t('swal_send_title'), text: t('swal_send_text'), icon: 'question',
      showCancelButton: true, confirmButtonColor: '#E83A4B', cancelButtonColor: '#8B5CF6',
      confirmButtonText: t('swal_btn_yes'), cancelButtonText: t('swal_btn_no'),
      background: '#14141C', color: '#E8E0F0',
      customClass: { popup: 'card', confirmButton: 'action-btn', cancelButton: 'action-btn' }
    }).then((r) => {
      if (r.isConfirmed) {
        window.open(`https://wa.me/${phone}?text=Halo%20Karang%20Taruna!%0ANama:%20${name}%0APesan:%20${msg}`, '_blank');
      }
    });
  };

  const Chars = () => (
    <>
      <div className="char-float" style={{bottom:'15%',left:'3%',fontSize:'2.2rem',animationDelay:'0s'}}>🤡</div>
      <div className="char-float" style={{top:'20%',right:'2%',fontSize:'2rem',animationDelay:'1s'}}>🐰</div>
      <div className="char-float" style={{top:'55%',left:'1%',fontSize:'1.6rem',animationDelay:'2s'}}>🎭</div>
      <div className="char-float" style={{bottom:'35%',right:'4%',fontSize:'2rem',animationDelay:'0.5s'}}>♟️</div>
      <div className="char-float" style={{top:'65%',right:'1%',fontSize:'1.4rem',animationDelay:'1.5s'}}>🧩</div>
      <div className="char-float" style={{bottom:'8%',left:'8%',fontSize:'1.8rem',animationDelay:'2.5s'}}>🎩</div>
      <div className="char-float" style={{top:'8%',left:'6%',fontSize:'1.6rem',animationDelay:'3s'}}>🫧</div>
    </>
  );

  const closeMenu = () => setMenuOpen(false);

  const Nav = () => (
    <nav>
      <div className="nav-logo">
        <img src="/logo-karang-taruna.png" alt="Logo" />
        <span>{t('nav_title')}</span>
      </div>
      <div className="nav-right">
        <div className="nav-links">
          <a href="#home">{t('nav_home')}</a>
          <a href="#about">{t('nav_about')}</a>
          <a href="#gallery">{t('nav_gallery')}</a>
          <a href="#project">{t('nav_project')}</a>
          <a href="#software">{t('nav_software')}</a>
          <a href="#team">{t('nav_divisi')}</a>
          <a href="#faq">FAQ</a>
          {/* <a href="#umkm" onClick={(e) => { e.preventDefault(); window.location.hash = '#umkm'; setPage('umkm'); }}>UMKM</a> */}
          <a href="#contact">{t('nav_contact')}</a>
        </div>
        <button className="nav-lang" onClick={cycleLang}>
          <i className="fas fa-globe"></i> {lang.toUpperCase()}
        </button>
        <button className="nav-hamburger" onClick={() => setMenuOpen(true)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className={`mobile-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <button className="mobile-close" onClick={closeMenu}>
          <i className="fas fa-times"></i>
        </button>
        <div className="mobile-links">
          {[
            {href:'#home', icon:'fa-home', label:'nav_home'},
            {href:'#about', icon:'fa-info-circle', label:'nav_about'},
            {href:'#gallery', icon:'fa-images', label:'nav_gallery'},
            {href:'#project', icon:'fa-flag', label:'nav_project'},
            {href:'#software', icon:'fa-laptop-code', label:'nav_software'},
            {href:'#team', icon:'fa-users', label:'nav_divisi'},
            {href:'#faq', icon:'fa-question-circle', label:'FAQ'},
              {href:'#umkm', icon:'fa-store', label:'UMKM', action:() => { window.location.hash = '#umkm'; setPage('umkm'); }},
            {href:'#contact', icon:'fa-envelope', label:'nav_contact'}
            ].map(item => (
              <a key={item.href} href={item.href} onClick={() => { closeMenu(); item.action?.(); }}>
                <i className={`fas ${item.icon}`}></i> {t(item.label)}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );

  const Hero = () => (
    <section id="home">
      <div style={{maxWidth:'800px',margin:'0 auto',position:'relative',zIndex:2}}>
        <p className="welcome-text">{t('hero_welcome')}</p>
        <h1 className="hero-title">{t('hero_title')}</h1>
        <p className="hero-subtitle" dangerouslySetInnerHTML={{__html: t('hero_subtitle')}} />
        <button className="action-btn" onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>
          <i className="fas fa-star"></i> {t('hero_btn')} <i className="fas fa-star"></i>
        </button>
      </div>
    </section>
  );

  const About = () => (
    <section id="about">
      <div className="about-wrap">
        <div className="about-img card rv-l" style={{position:'relative'}}>
          <span className="star-deco" style={{top:'-8px',right:'-8px'}}>✦</span>
          <span className="star-deco" style={{bottom:'-4px',left:'-10px'}}>✦</span>
          <span className="star-deco" style={{top:'50%',left:'-18px'}}>✦</span>
          <span className="star-deco" style={{top:'30%',right:'-16px'}}>✦</span>
          <img src="/logo-karang-taruna.png" alt="Logo" />
        </div>
        <div className="about-text rv-r">
          <h2 className="section-title">{t('about_title')}</h2>
          <p>{t('about_desc')}</p>
        </div>
      </div>
    </section>
  );

  const Gallery = () => (
    <section id="gallery">
      <div style={{textAlign:'center'}} className="rv">
        <h2 className="section-title">{t('gallery_title')}</h2>
        <p style={{marginTop:'6px',fontSize:'1rem',color:'var(--text-soft)'}}>{t('gallery_desc')}</p>
      </div>
      <div className="grid-gallery rv-s">
        {[
          {icon:'fa-broom', key:'memory_1'},
          {icon:'fa-comments', key:'memory_2'},
          {icon:'fa-mosque', key:'memory_3'},
          {icon:'fa-drum', key:'memory_4'},
          {icon:'fa-volleyball-ball', key:'memory_5'},
          {icon:'fa-tree', key:'memory_6'}
        ].map((item, i) => (
          <div key={i} className="g-item">
            <div className="card">
              <i className={`fas ${item.icon}`}></i>
              <p>{t(item.key)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const Projects = () => (
    <section id="project">
      <div className="rv"><h2 className="section-title">{t('project_title')}</h2></div>
      <div className="project-list">
        <div className="p-card rv-l">
          <div className="card">
            <div>
              <h3>{t('quest_1_title')}</h3>
              <p>{t('quest_1_desc')}</p>
            </div>
            <div className="p-icon"><i className="fas fa-flag"></i></div>
          </div>
        </div>
        <div className="p-card rv-r">
          <div className="card">
            <div>
              <h3>{t('quest_2_title')}</h3>
              <p>{t('quest_2_desc')}</p>
            </div>
            <div className="p-icon"><i className="fas fa-hands-helping"></i></div>
          </div>
        </div>
      </div>
    </section>
  );

  const Software = () => (
    <section id="software">
      <div style={{textAlign:'center'}} className="rv">
        <h2 className="section-title">{t('software_title')}</h2>
        <p style={{marginTop:'6px',fontSize:'1rem',color:'var(--text-soft)'}}>{t('software_desc')}</p>
      </div>
      <div className="soft-grid rv-s">
        {[
          {icon:'fa-magic', title:t('soft_1_title'), desc:t('soft_1_desc'), url:'https://drive.google.com/uc?export=download&id=1l-GZUgeblPgw9W-A42UePQ6MFdD30lyA'},
          {icon:'fa-flag-checkered', title:t('soft_2_title'), desc:t('soft_2_desc'), url:'https://drive.google.com/uc?export=download&id=1kgKC9u_3AKuC1DsB1VTwWfJjc_OnidBx'},
          {icon:'fa-server', title:t('soft_3_title'), desc:t('soft_3_desc'), url:'https://drive.google.com/uc?export=download&id=1N21fOtOD2p85EBi5UAftTCrPWLXLZm32'}
        ].map((s, i) => (
          <div key={i} className="s-card card" onClick={() => window.open(s.url, '_blank')}>
            <div className="s-badge">{t('soft_badge')}</div>
            <i className={`fas ${s.icon}`}></i>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="s-dl"><i className="fas fa-download"></i> {t('click_download')}</div>
          </div>
        ))}
      </div>
    </section>
  );

  const teamIcons = {
    utama:'fa-crown', multimedia:'fa-camera-retro', keamanan:'fa-shield-alt',
    humas:'fa-bullhorn', olahraga:'fa-running', wirausaha:'fa-store', sistem:'fa-laptop-code'
  };

  const Team = () => (
    <section id="team">
      <div style={{textAlign:'center'}} className="rv">
        <h2 className="section-title">{t('team_title')}</h2>
        <p style={{marginTop:'6px',fontSize:'1rem',color:'var(--text-soft)'}}>{t('team_desc')}</p>
      </div>
      <div className="t-container rv-s">
        {Object.entries(divisionData).map(([key, data]) => (
          <div key={key} className={`t-division ${data.members.length >= 3 ? 'span-2' : ''}`}>
            <div className="t-div-head">
              <i className={`fas ${teamIcons[key] || 'fa-laptop-code'}`}></i>
              <span>{t('team_' + key)}</span>
            </div>
            <div className="t-div-body">
              {data.members.map((m, i) => {
                const ini = m.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
                return (
                  <div key={i} className="t-staff">
                    <div className="t-staff-avatar">{ini}</div>
                    <div className="t-staff-info">
                      <span className="t-staff-name">{m.name}</span>
                      <span className="t-staff-role">{m.role?.[lang] || ''}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const openFaq = (q, a) => {
    window.Swal?.fire({
      title: q,
      text: a,
      icon: 'info',
      confirmButtonColor: '#8B5CF6',
      background: '#14141C',
      color: '#E8E0F0',
      confirmButtonText: 'OK',
      customClass: { popup: 'card', confirmButton: 'action-btn' }
    });
  };

  const faqItems = [
    { q: t('faq_q1'), a: t('faq_a1') },
    { q: t('faq_q2'), a: t('faq_a2') },
    { q: t('faq_q3'), a: t('faq_a3') },
    { q: t('faq_q4'), a: t('faq_a4') },
    { q: t('faq_q5'), a: t('faq_a5') }
  ];

  const FaqSection = () => (
    <section id="faq">
      <div style={{textAlign:'center'}} className="rv">
        <h2 className="section-title">{t('faq_title')}</h2>
        <p style={{marginTop:'6px',fontSize:'1rem',color:'var(--text-soft)'}}>{t('faq_desc')}</p>
      </div>
      <div className="faq-list rv-s">
        {faqItems.map((item, i) => (
          <div key={i} className="faq-item card" onClick={() => openFaq(item.q, item.a)}>
            <div className="faq-q">
              <span>{item.q}</span>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const UkmSection = () => (
    <section id="umkm">
      <div style={{textAlign:'center'}} className="rv">
        <h2 className="section-title">{t('ukm_title')}</h2>
        <p style={{marginTop:'6px',fontSize:'1rem',color:'var(--text-soft)'}}>{t('ukm_desc')}</p>
      </div>
      <div className="rv-s">
        <UkmApp t={t} />
      </div>
    </section>
  );

  const Contact = () => (
    <section id="contact">
      <div style={{textAlign:'center',width:'100%',marginBottom:'12px'}} className="rv">
        <h2 className="section-title">{t('contact_title')}</h2>
      </div>
      <div className="contact-grid rv">
        <div className="ig-card card" onClick={() => window.open('https://www.instagram.com/karangtarunaunit28/', '_blank')}>
          <i className="fab fa-instagram"></i>
          <h3>INSTAGRAM</h3>
          <p>@karangtarunaunit28</p>
          <div className="ig-follow"><i className="fas fa-hand-pointer"></i> Follow Us!</div>
        </div>
        <div className="cf-box card">
          <div className="fg">
            <label>{t('contact_name_label')}</label>
            <input type="text" id="wa-name" placeholder={t('contact_name_placeholder')} />
          </div>
          <div className="fg">
            <label>{t('contact_msg_label')}</label>
            <textarea id="wa-msg" rows="4" placeholder={t('contact_msg_placeholder')}></textarea>
          </div>
          <button className="action-btn" style={{width:'100%',marginTop:'6px'}} onClick={sendWA}>
            <i className="fab fa-whatsapp"></i> {t('contact_btn')}
          </button>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer>
      <p className="footer-text">{t('footer_text')}</p>
    </footer>
  );

  const ukmPage = page === 'umkm' && phase === 'ready' ? (
    <div className="ukm-page">
      <div className="ukm-page-header">
        <button className="action-btn" style={{fontSize:'0.5rem',padding:'8px 16px'}} onClick={() => { window.location.hash = ''; setPage('main'); }}>
          <i className="fas fa-arrow-left"></i> Kembali
        </button>
        <h2 className="section-title">{t('ukm_title')}</h2>
      </div>
      <div className="ukm-page-body">
        <UkmApp t={t} />
      </div>
    </div>
  ) : null;

  const mainContent = phase === 'ready' && page === 'main' ? (
    <>
      <Chars />
      <Confetti />
      <AudioPlayer />
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Software />
      <Team />
      <FaqSection />
      <Contact />
      <Footer />
    </>
  ) : null;

  return (
    <>
      {phase === 'loading' && <LoadingScreen onDone={handleLoadDone} />}
      {mainContent}
      {ukmPage}
    </>
  );
}

export default App;
