
$(document).ready(function(){
    if(sessionStorage.username!= null){//om nån är inne
        $("h1").hide();
        $(".medlemsSida").text(sessionStorage.username);
        $(".button").hide();
        $("input, label").hide();
        $(".button2").show();
        //$(".medlemsSida").text(sessionStorage.username);
    } else {
        $("h1").show();
    }

    console.log(sessionStorage.username);

    //sessionStorage.username="Jenny Jäderborn";
    


    $(".forgotPassword").hide();
    $(".button2").hide();

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
                        } 

                        else {$("h1").hide();
                                $(".forgotPassword").slideDown();
                        }
    
                        
                    });
    
                });
    