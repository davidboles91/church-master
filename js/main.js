// // sign in form 
// var hide ,  input ;
// hide = document.querySelectorAll(".hide-password");
// input = document.querySelectorAll(".pass-input");

// hide.forEach((el)=>{

//     el.addEventListener("click", function (e) {
//         e.preventDefault();
//         input.forEach((inp) => {
//             inp.classList.toggle("show")

//             if (inp.classList.contains("show")) {
//                 inp.setAttribute("type", "text");
//             } else {
//                 inp.setAttribute("type", "password");
//             }
//         }); 
//     });
// });
// // sign in form


// //mwa3idi page

var mw3id = document.querySelectorAll("#mwaaid")
    mw3id.forEach((el)=>{
             el.addEventListener("click", function(e){
             if (e.target.classList.contains("del")){
             e.target.parentNode.parentNode.remove();
    }

    })
   
});

// booking page 

 $(".options input:radio").change(function () {
         if ($(this).val() == "option2") {
             $(".radi-input").css("opacity", "1");
             $(".radi-input2").css("opacity", "0");
         }
         else if ($(this).val() == "option3") {
                 $(".radi-input").css("opacity", "0");
                 $(".radi-input2").css("opacity", "1");
         }
          else  {
                $(".radi-input").css("opacity", "0");
                $(".radi-input2").css("opacity", "0");
          }
 })



// select2 library


