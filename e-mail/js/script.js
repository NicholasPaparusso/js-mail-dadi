const emailList = ['piergiorgetto_farabutti@email.it', 'lola97@email.it','manfredonio_devil_angel91@email.it', '50penny@email.uk', 'emo_nemo_dark_rainbow17@email.it' ];
const psw =['expsw']
const openMenu = document.querySelector('#open-login');
const loginMenu = document.querySelector('.login-menu');
const sendInput = document.getElementById('btn');
const closeBtn = document.getElementById('close');



sendInput.addEventListener('click', check);
function check(){
  const givenEmail = document.getElementById('email').value;
  const pswGiven = document.getElementById('psw').value;
  console.log(pswGiven);
  console.log(givenEmail);

    if(emailList.indexOf(givenEmail) < 0) {
      alert ('email non trovata');
    }
   if (psw.indexOf(pswGiven) < 0) {
      alert ('password errata');
    }
    if (!(emailList.indexOf(givenEmail)<0) && !(  psw.indexOf (pswGiven) < 0)){
    alert ('accesso effetuato')
    }
  }

openMenu.addEventListener('click', open);
function open(){
  if(loginMenu.classList.contains('hide')){
    loginMenu.classList.remove('hide');
  }else{
    loginMenu.classList.add('hide');
  }
}

closeBtn.addEventListener('click', closeButton);

function closeButton(){
 if(!(loginMenu.classList.contains('hide'))){
  loginMenu.classList.add('hide');
}
}
