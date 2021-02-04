function login(){
    var id=document.querySelector('#id');
    var pw =document.querySelector('#pw');

    if(id.value=="cjuser"){
        if(pw.value=="6446253"){
            location.href="home.html";
        }
        else {
            alert("아이디나 비밀번호를 입력하세요.")
            location.href="cjloginpage.html";
        }
    }   
    else {
        alert("아이디나 비밀번호를 입력하세요.")
        location.href="cjloginpage.html";
    }
}