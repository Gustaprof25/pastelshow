/*=========================================
PRELOADER
=========================================*/
window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        setTimeout(()=>{
            preloader.remove();
        },500);

    }

});


/*=========================================
NAVBAR + BOTÃO TOPO
=========================================*/

const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

    if(backToTop){

        if(window.scrollY > 500){

            backToTop.classList.add("show");

        }else{

            backToTop.classList.remove("show");

        }

    }

});


/*=========================================
BOTÃO TOPO
=========================================*/

if(backToTop){

    backToTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

}


/*=========================================
SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const alvo=document.querySelector(this.getAttribute("href"));

        if(alvo){

            e.preventDefault();

            window.scrollTo({

                top:alvo.offsetTop-80,
                behavior:"smooth"

            });

        }

    });

});


/*=========================================
CONTADORES
=========================================*/

const counters=document.querySelectorAll(".counter");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.innerText;

let value=0;

const speed=target/100;

const update=()=>{

value+=speed;

if(value<target){

counter.innerText=Math.ceil(value);

requestAnimationFrame(update);

}else{

counter.innerText=target.toLocaleString("pt-BR");

}

}

update();

observer.unobserve(counter);

}

});

},{
threshold:.6
});

counters.forEach(c=>observer.observe(c));


/*=========================================
AOS
=========================================*/

AOS.init({

    duration:900,
    once:true,
    offset:100

});