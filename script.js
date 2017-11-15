
$(document).ready(function(){

    $(".forgotPassword").hide();

        $(".button").click(function(){
        var username = "jenny";
        var password = "hejsan"; 
        
    
                        if(username === $(".inputName").val() && password === $(".inputPassword").val()){
                            $("h1").hide();
                            $(".button").text("logga ut");
                            $("input, label").hide();
                        } else {$("h1").hide();
                                $(".forgotPassword").slideDown();
                        }
    
                        
                    });
    
                });
    