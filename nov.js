let stars1 = document.getElementById('stars');
let moon2 = document.getElementById('moon');
let mountains3 = document.getElementById('moun');
let mountains4 = document.getElementById('moun2');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');
let novuil = document.querySelector('.novuil');
window.onscroll =function(){
    let value = scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value *4 + 'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river5.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value *3  + 'px';
    novuil.style.fontSixe = value  + 'px';
    if(scrollY >=67){
        novuil.style.fontSize = 67 + 'px';
        novuil.style.position = 67 + 'fixed';
        if(screenY >=478){
            novuil.style.display = 'none';

        }else{
            novuil.style.display = 'block'
        }
        if(scrollY >= 127){
            document.querySelector('.man').style.background = 'linear-gradient(#37681,#10001f)';
        }else{
            document.querySelector('.man').style.background = 'linear-gradient(#020232,rgb(158, 18, 93))';

        }
    } 


}