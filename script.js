
$(document).ready(function(){
    $(".forgotPassword").hide();
    $(".button2").hide();
    if(sessionStorage.username!= null){//om nån är inne
        $("h1").hide();
        $(".medlemsSida").text(sessionStorage.username);
        $(".button").hide();
        $("input, label").hide();
        $(".button2").show();
        $(".forgotPassword").hide();
    } else { 
        
        $(".button").click(function(){
        
    sessionStorage.username = "test";
    sessionStorage.password = "password"; 
    

                    if(sessionStorage.username == $(".inputName").val() && sessionStorage.password == $(".inputPassword").val()){
                        sessionStorage.username="Jenny Jäderborn";
                        $(".medlemsSida").text(sessionStorage.username);                
                        $("h1").hide();
                        $(".button").hide();
                        $("input, label").hide();
                        $(".button2").show();
                        $(".medlemsSida").show();
                        $(".forgotPassword").hide();
                    } 

                    else {$("h1").hide();
                            $(".forgotPassword").slideDown();
                            $(".button2").hide();
                    } 
                });
        
    }

});
    