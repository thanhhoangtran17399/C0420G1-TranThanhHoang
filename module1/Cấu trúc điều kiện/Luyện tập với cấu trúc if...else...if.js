let userName = prompt("Who's there?");
if (userName == 'Admin'){
    let pass = prompt('Password?');
        if (pass == 'TheMaster' ){
            alert('Welcom!');
        }else if (pass == null){
            alert('Canceled.');
        }else{
            alert('Wrong passsword');
        }
}else if(userName == null){
    alert('Canceled.');
}else{
    alert('Wrong user name');
}
