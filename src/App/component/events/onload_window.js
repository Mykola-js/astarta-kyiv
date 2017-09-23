// checking in login after 4 seconds
(function(){

    if(location.hash == '#/'){

       setTimeout(function(){

            location.hash = '/login';
            
       }, 4000)
 
    }})()
