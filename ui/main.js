var button=document.getElementById('counter');


button.onclick = function() {
 
  var request = new XMLHttpRequest() ;
  
  request.onreadystatechange = function() {
      if(request===XMLHttpRequest.DONE){
          if(request.status===200){
              
          }
      }
  };
  request.open('GET','http://dobriyalmayank75.imad.hasura-app.io/counter',true);
  request.send(null);
  
};




var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    var request = new XMLHttpRequest() ;
  
  request.onreadystatechange = function() {
      if(request===XMLHttpRequest.DONE){
          if(request.status===200){
              var names = request.responseText;
              names = JSON.parse(names);
    var list='';
    for(var i=0;i<name.length;i++){
        list += '<li>' + name[i] + '</li';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML=list ;
    
          }
      }
  };
  var nameInput = document.getElementById('name');
var name = nameInput.value ;
  request.open('GET','http://dobriyalmayank75.imad.hasura-app.io/submit-name?name=' + name,true);
  request.send(null);
  


    
};