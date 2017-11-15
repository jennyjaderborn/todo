
$(document).ready(function(){

    $(".forgotPassword").hide();
    $(".medlemsSida").hide();
    $(".button2").hide();

        $(".button").click(function(){
        var username = "jenny";
        var password = "hejsan"; 
        
    
                        if(username === $(".inputName").val() && password === $(".inputPassword").val()){
                            $("h1").hide();
                            $(".button").hide();
                            $("input, label").hide();
                            $(".button2").show();
                            $(".medlemsSida").slideDown();
                        } else {$("h1").hide();
                                $(".forgotPassword").slideDown();
                        }
    
                        
                    });
    
                });
    