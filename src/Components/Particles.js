import React, { useEffect } from 'react'
import './styles/Particles.css'
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
    const rootEle = document.getElementById("root");
    if(rootEle)     
        rootEle.addEventListener('scroll',(e)=>{
            if(e.target.scrollTop > window.innerHeight*0.5){
                if (document.querySelector(".scrollTop"))document.querySelector(".scrollTop").style.bottom = "10px";
            }else{
                if (document.querySelector(".scrollTop"))document.querySelector(".scrollTop").style.bottom = "-100px";
            }
            // var x = document.getElementById('bg-c2');
            // x.style.left = ((document.getElementById("root").scrollTop*0.3)%(window.innerWidth + 1.2*window.innerHeight) - 0.6 * window.innerHeight)+"px";
            // // x.style.backgroundPositionY = e.target.scrollTop*0.1 +"px";
            // x = document.getElementById('bg-c1');
            // x.style.left = (window.innerWidth - (document.getElementById("root").scrollTop*0.3)%(window.innerWidth + 0.8*window.innerHeight) + 0.4 * window.innerHeight)+"px";
            // x.style.backgroundPositionY = -e.target.scrollTop*0.1 +"px";


        })
    return (
        <div id="Particles">
            <div className="bg-crl" id="bg-c1" alt="" data-eff="30"></div>
            <div className="bg-crl" id="bg-c2" alt="" data-eff="-10"></div>
            
            <img className="bg-icn" id="bg-i1" alt="" data-eff="30" />
            <img className="bg-icn" id="bg-i2" alt="" data-eff="-10" />
            <img className="bg-icn" id="bg-i3" alt="" data-eff="25" />
            <img className="bg-icn" id="bg-i4" alt="" data-eff="20" />
            <img className="bg-icn" id="bg-i5" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i6" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i7" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i8" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i9" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i10" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i11" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i12" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i13" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i14" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i15" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i16" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i17" alt="" data-eff="-5" />
            <img className="bg-icn" id="bg-i18" alt="" data-eff="-5" />
        </div>
    )
}

export default Particles
