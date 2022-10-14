const diceNumber = ['1','3','6','2','4','6']
const startGame = document.querySelector('.play-btn');
startGame.addEventListener('click', go);
function go(){

 let UserNumber = Math.ceil(Math.random()* diceNumber. length)
  console.log(UserNumber);
  
  let CpuNumber = Math.ceil(Math.random()*diceNumber.length)
  console.log(CpuNumber);
  if(UserNumber > CpuNumber){
    document.querySelector('.winner p').innerHTML = 'And the winner Is: User';
  }else if ( UserNumber < CpuNumber){
    document.querySelector('.winner p').innerHTML = ' And the winner Is: CPU';
  }else{
    document.querySelector('.winner p').innerHTML = ' There is no winner';
  }

  if(UserNumber === 1 && document.getElementById('dice-user-1').classList.contains('hide') ){
    document.getElementById('dice-user-1').classList.remove('hide');
    }else if (UserNumber !== 1){
      document.getElementById('dice-user-1').classList.add('hide');
    }
      
    if(UserNumber === 2 && document.getElementById('dice-user-2').classList.contains('hide') ){
      document.getElementById('dice-user-2').classList.remove('hide');
      }else if (UserNumber !== 2){
        document.getElementById('dice-user-2').classList.add('hide');
      }

      if(UserNumber === 3 && document.getElementById('dice-user-3').classList.contains('hide') ){
        document.getElementById('dice-user-3').classList.remove('hide');
        }else if (UserNumber !== 3){
          document.getElementById('dice-user-3').classList.add('hide');
        }

        if(UserNumber === 4 && document.getElementById('dice-user-4').classList.contains('hide') ){
          document.getElementById('dice-user-4').classList.remove('hide');
          }else if (UserNumber !== 4){
            document.getElementById('dice-user-4').classList.add('hide');
          }

          if(UserNumber === 5 && document.getElementById('dice-user-5').classList.contains('hide') ){
            document.getElementById('dice-user-5').classList.remove('hide');
            }else if (UserNumber !== 5){
              document.getElementById('dice-user-5').classList.add('hide');
            }

            if(UserNumber === 6 && document.getElementById('dice-user-6').classList.contains('hide') ){
              document.getElementById('dice-user-6').classList.remove('hide');
              }else if (UserNumber !== 6){
                document.getElementById('dice-user-6').classList.add('hide');
              }
        
              if(CpuNumber === 1 && document.getElementById('dice-cpu-1').classList.contains('hide') ){
                document.getElementById('dice-cpu-1').classList.remove('hide');
                }else if (UserNumber !== 1){
                  document.getElementById('dice-cpu-1').classList.add('hide');
                }
                  
                if(CpuNumber === 2 && document.getElementById('dice-cpu-2').classList.contains('hide') ){
                  document.getElementById('dice-cpu-2').classList.remove('hide');
                  }else if (UserNumber !== 2){
                    document.getElementById('dice-cpu-2').classList.add('hide');
                  }
            
                  if(CpuNumber === 3 && document.getElementById('dice-cpu-3').classList.contains('hide') ){
                    document.getElementById('dice-cpu-3').classList.remove('hide');
                    }else if (UserNumber !== 3){
                      document.getElementById('dice-cpu-3').classList.add('hide');
                    }
            
                    if(CpuNumber === 4 && document.getElementById('dice-cpu-4').classList.contains('hide') ){
                      document.getElementById('dice-cpu-4').classList.remove('hide');
                      }else if (UserNumber !== 4){
                        document.getElementById('dice-cpu-4').classList.add('hide');
                      }
            
                      if(CpuNumber === 5 && document.getElementById('dice-cpu-5').classList.contains('hide') ){
                        document.getElementById('dice-cpu-5').classList.remove('hide');
                        }else if (UserNumber !== 5){
                          document.getElementById('dice-cpu-5').classList.add('hide');
                        }
            
                        if(CpuNumber === 6 && document.getElementById('dice-cpu-6').classList.contains('hide') ){
                          document.getElementById('dice-cpu-6').classList.remove('hide');
                          }else if (UserNumber !== 6){
                            document.getElementById('dice-cpu-6').classList.add('hide');
                          }



  }




