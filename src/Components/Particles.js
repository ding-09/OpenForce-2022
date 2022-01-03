import React, { useEffect } from 'react'
import './styles/Particles.css'
import codeIcon from './assets/code_icon.svg';
import crlIcon from './assets/crl_icon.svg';
function Particles() {
    useEffect(()=>{
        let w = window.innerWidth;
        let h = window.innerHeight;
        let o = {
            x:w/2,
            y:h/2
        }
        let m = {
            x:w/2,
            y:h/2
        }
        window.addEventListener('mousemove',e=>{
            m.x = e.clientX;
            m.y = e.clientY;
            let dx = (o.x-m.x)/o.x;
            let dy = (o.y-m.y)/o.y;
            let crls = document.getElementsByClassName('bg-crl');
            let icns = document.getElementsByClassName('bg-icn');
            for(var crl of crls){
                const eff = Number(crl.getAttribute('data-eff'))/10;
                crl.style.transform = `translate(${dx*eff}%,${dy*eff}%) rotate(${dx*eff+dy*eff}deg)`;
            }
            for(var icn of icns){
                const eff = Number(icn.getAttribute('data-eff'));
                icn.style.transform = `translate(${dx*eff}%,${dy*eff}%) rotate(${dx*eff/3+dy*eff/3}deg)`;
            }
        })
    });
    document.getElementById("root").addEventListener('scroll',(e)=>{
        const particles = document.getElementById("Particles");
        if(particles){
            particles.style.top = `${e.target.scrollTop}px`;
        }
    })
    return (
        <div id="Particles">
            <img className="bg-crl" id="bg-c1" src={crlIcon} alt="" data-eff="30" />
            <img className="bg-crl" id="bg-c2" src={crlIcon} alt="" data-eff="-10" />
            <img className="bg-crl" id="bg-c3" src={crlIcon} alt="" data-eff="-25" />
            <img className="bg-crl" id="bg-c4" src={crlIcon} alt="" data-eff="20" />
            <img className="bg-crl" id="bg-c5" src={crlIcon} alt="" data-eff="-5" />
            <img className="bg-crl" id="bg-c6" src={crlIcon} alt="" data-eff="-5"/>
            
            <img className="bg-icn" id="bg-i1" src={codeIcon} alt="" data-eff="30" />
            <img className="bg-icn" id="bg-i2" src={codeIcon} alt="" data-eff="-10" />
            <img className="bg-icn" id="bg-i3" src={codeIcon} alt="" data-eff="25" />
            <img className="bg-icn" id="bg-i4" src={codeIcon} alt="" data-eff="20" />
            <img className="bg-icn" id="bg-i5" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i6" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i7" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i8" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i9" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i10" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i11" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i12" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i13" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i14" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i15" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i16" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i17" src={codeIcon} alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i18" src={codeIcon} alt="" data-eff="-5" />
        </div>
    )
}

export default Particles
