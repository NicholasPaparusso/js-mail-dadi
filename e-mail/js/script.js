const list = ['piergiorgetto_farabutti@email.it', 'lola97@email.it','manfredonio_devil_angel91@email.it', '50penny@email.uk', 'emo_nemo_dark_rainbow17@email.it' ];

const openMenu = document.querySelector('#open-login');
const closeMenu = document.querySelector('#close');
const loginMenu = document.querySelector('.login-menu');

openMenu.addEventListener('click', open);
function open(){
  if(loginMenu.classList.contains('hide')){
    loginMenu.classList.remove('hide');
  }else{
    loginMenu.classList.add('hide');
  }
}

closeMenu.addEventListener('click', close);
function close(){
  if(!(loginMenu.classList.contains('hide'))){
    loginMenu.classList.add('hide');
  }
}
