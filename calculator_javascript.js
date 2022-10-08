$(document).ready(function() {
    $('.execute').click(function (){
    let h=$('#output').text();
    let b=this.id;
    let u=String(document.getElementById(b).innerText);
        $('#output').text(h+u);
    })
    $('#equals').click(function() {
    let h=$('#output').text();
    $('#output').text(eval(h));
    })
    $('#cls').click(function () {
    $('#output').text("");
    })

    
    
    $('#backspace').click(function () {
    let h=$('#output').text();
    let l=h.length;
    //alert(h);
    h=h.substr(0,l-1);
    //alert(h);
    $('#output').text(h);
    })
    });