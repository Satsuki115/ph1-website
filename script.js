document.addEventListener('DOMContentLoaded', function() {
  const humberger = document.getElementById('js-humberger');
  const nav = document.getElementById('js-nav');
  if (humberger && nav) {
    humberger.addEventListener('click', function() {
      nav.classList.toggle('active');
      humberger.classList.toggle('active');
      console.log('ok');
    });
  } else {
    console.log('ng');
  }
});
ocument.addEventListener("scroll", function() {
    const logo = document.querySelector('.site-logo');
    const js_main_visual = document.getElementById('js-main-visual');
    const Headers = document.getElementById('Headers');
    
    // 💡 スクロール量が 100px を超えたかどうかをチェック
    if (window.scrollY > 100) {
        // 100px を超えたら、'active' クラスを追加
        logo.classList.add('active');
        console.log('changed: activeクラス追加');
    } else {
        // 100px 以下に戻ったら、'active' クラスを削除
        logo.classList.remove('active');
        console.log('not changed: activeクラス削除');
    }
});

document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('splide');
  document.querySelectorAll('splide_track');
  document.querySelectorAll('splide_list');
  document.querySelectorAll('splide_slide');
new Splide('#splide1',{
   pagination:false,
   type:'loop',
   gap:'40px',
   width:'1096px',
   perPage: 3,
   padding:{left:'28px',right:'28px' },
   breakpoints:{
    768:{
      perPage:1,
      pagination:true,
    },
   }
 }).mount();
})

document.addEventListener('DOMContentLoaded',function(){
  new Splide('#splide2',{
    perPage:1,
   pagination:false,
   type:'loop',
   gap:'40px',
   padding:{left:'28px',right:'28px' },
   breakpoints:{
    768:{
      perPage:1,
      pagination:true,
    },
   }
 }).mount();
})
