$(document).ready(function() {
    $('.execute').click(function (){
    let h=$('#output').text();
    let b=this.id;
    let u=String(document.getElementById(b).innerText);
        $('#output').text(h+u);
    })
    
    });