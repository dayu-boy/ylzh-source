const sliderItems = document.querySelectorAll('.slider-item');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let cur = 0;
const total = sliderItems.length;

function render(idx){
    sliderItems.forEach(item=>item.classList.remove('active'));
    dots.forEach(d=>d.classList.remove('active'));
    sliderItems[idx].classList.add('active');
    dots[idx].classList.add('active');
}

let autoTimer = setInterval(()=>{
    cur = (cur+1)%total;
    render(cur);
},4500);

dots.forEach((dot,i)=>{
    dot.onclick = ()=>{
        cur=i;
        render(cur);
    }
});
prevBtn.onclick = ()=>{
    cur = (cur -1 + total) % total;
    render(cur);
};
nextBtn.onclick = ()=>{
    cur = (cur+1)%total;
    render(cur);
};
const wrap = document.querySelector('.slider-wrap');
wrap.addEventListener('mouseenter',()=>clearInterval(autoTimer));
wrap.addEventListener('mouseleave',()=>{
    autoTimer = setInterval(()=>{
        cur=(cur+1)%total;
        render(cur);
    },4500);
});
