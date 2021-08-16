

// let person1Arr;

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
  let myArr = [];

   myArr.push($("input#food").val()); 
   myArr.push($("input#color").val()); 
   myArr.push($("input#animal").val()); 
   myArr.push($("input#music").val()); 
   myArr.push($("input#icecream").val()); 
   myArr.push($("input#movie").val()); 

   console.log(myArr[0]);
   console.log(myArr[1]);
   console.log(myArr[2]);

  

    //let person2Arr = myArr.push($("input#person2").val());
    
  });
});
