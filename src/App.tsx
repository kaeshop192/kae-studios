import { useEffect, useState } from 'react';
const lucidPoster='/resources/lucid-cover-small.jpg';
const kaegoProfile='/resources/kaego-profile-small.jpg';
const cuttingPoster='https://raw.githubusercontent.com/kaeshop192/kae-studios/main/cutting-through-labels-cover.jpg';
const musicStill='https://raw.githubusercontent.com/kaeshop192/kae-studios/main/burned-coffee-clean-cover.jpg';
const silentStill='/resources/Screenshot 2026-09-26 at 13.25.33.png';
const burnedCoffeeFilm='/resources/burned-coffee-final.mp4';
const albratrumFilm='/resources/albratrum-film.mp4';
function App(){
 const [route,setRoute]=useState(window.location.hash||'#/');
 useEffect(()=>{const sync=()=>{setRoute(window.location.hash||'#/');window.scrollTo(0,0)};window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync)},[]);
 const path=route.replace('#','')||'/';
 const Nav=({light=false}:{light?:boolean})=><header className={'nav '+(light?'nav-light':'')}><a className="brand" href="#/">KAE <span>STUDIOS</span></a><nav><a href="#/portfolio">Portfolio</a><a href="#/about">About</a><a href="#/contact">Contact</a></nav></header>;
 const Footer=()=> <footer><span>KAE STUDIOS © 2026</span><span>FILM PRODUCTION · LONDON</span></footer>;
 const Back=()=> <button className="back-arrow" onClick={()=>window.history.length>1?window.history.back():window.location.hash='#/'} aria-label="Go back">←</button>;
 if(path==='/portfolio')return <div className="page paper"><Nav light/><Back/><main className="portfolio"><div className="page-head"><p>SELECTED WORK</p></div>
  <a className="work-card" href="https://vimeo.com/993079594" target="_blank" rel="noreferrer"><div className="work-art" style={{backgroundImage:`linear-gradient(180deg,transparent,rgba(0,0,0,.55)),url('${lucidPoster}')`}}><strong>LUCID</strong><i>Watch film ↗</i></div><div className="work-meta"><h2>Lucid</h2><p>Short film</p></div></a>
  <a className="work-card" href="https://vimeo.com/1108093726" target="_blank" rel="noreferrer"><div className="work-art" style={{backgroundImage:`linear-gradient(180deg,transparent,rgba(0,0,0,.5)),url('${cuttingPoster}')`}}><strong>CUTTING<br/>THROUGH LABELS</strong><i>Watch film ↗</i></div><div className="work-meta"><h2>Cutting Through Labels</h2><p>Documentary</p></div></a>
  <a className="work-card" href={burnedCoffeeFilm} target="_blank" rel="noreferrer"><div className="work-art burned-coffee-art" style={{backgroundImage:`linear-gradient(180deg,transparent,rgba(0,0,0,.5)),url('${musicStill}')`}}><strong>BURNED COFFEE</strong><i>Watch film ↗</i></div><div className="work-meta"><h2>Burned Coffee</h2><p>Music video</p></div></a>
  <a className="work-card" href={albratrumFilm} target="_blank" rel="noreferrer"><div className="work-art" style={{backgroundImage:`linear-gradient(180deg,transparent,rgba(0,0,0,.5)),url('${silentStill}')`}}><strong>/ALBRATRUM/</strong><i>Watch film ↗</i></div><div className="work-meta"><h2>/albratrum/</h2><p>Silent film</p></div></a>
  <a className="work-card" href="https://www.youtube.com/watch?v=p6sHiB6lRbw" target="_blank" rel="noreferrer"><div className="work-art" style={{backgroundImage:`linear-gradient(180deg,transparent,rgba(0,0,0,.45)),url('https://img.youtube.com/vi/p6sHiB6lRbw/maxresdefault.jpg')`}}><strong>EVENT<br/>VIDEOGRAPHY</strong><i>Watch video ↗</i></div><div className="work-meta"><h2>Event Videography</h2><p>Camera work</p></div></a>
 </main><Footer/></div>;
 if(path==='/about')return <div className="page paper"><Nav light/><Back/><main className="about-page"><div className="page-head"><p>ABOUT / PRODUCER & FILMMAKER</p><h1>Kaego Paul</h1></div><div className="about-grid"><div className="kae-frame"><img src={kaegoProfile} alt="Kaego Paul"/></div><div className="about-copy" style={{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",alignSelf:"stretch"}}><p className="lead">Kaego Paul is a creative producer and videographer with a BA (Hons) in Film Production and experience in event videography, broadcasting and short films. Passionate about telling authentic, underrepresented stories, she is committed to producing quality visuals with impactful storytelling.</p><p><a href="https://www.imdb.com/name/nm16183596/" target="_blank" rel="noreferrer">IMDb ↗</a></p></div></div></main><Footer/></div>;
 if(path==='/contact')return <div className="page contact-page"><Nav/><Back/><main><a href="mailto:link@kaestudios.co.uk">link@kaestudios.co.uk</a></main><Footer/></div>;
 return <div className="site"><Nav/><main><section className="hero"><div className="hero-bg"><div className="light"/><div className="grain"/></div><div className="hero-top"><span></span><span>LONDON</span></div><div className="hero-title"><h1>KAE</h1><h1 className="outline">STUDIOS</h1></div><div className="hero-bottom"><p>FILM / DOCUMENTARY / VISUAL STORYTELLING</p><a href="#/portfolio">VIEW PORTFOLIO →</a></div></section></main><Footer/></div>;
}
export default App;