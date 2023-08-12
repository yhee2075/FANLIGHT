const moBtn = document.getElementById('moBtn');
const nav = document.querySelector('nav');
const header = document.querySelector('header');

// 모바일 메뉴 닫기
document.addEventListener('click', e => {
  const isOn = nav.classList.contains('on');
  const isNotMenu = !e.target.classList.contains('notClose');
  const isMoBtn = e.target.classList.contains('moBtn');

  if (isNotMenu) {
    if (isMoBtn) nav.classList.toggle('on');
    else nav.classList.remove('on');
  }
});
