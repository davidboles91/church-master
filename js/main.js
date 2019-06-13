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
             if (confirm('هل انت متاكد ؟')){
               e.target.parentNode.parentNode.remove();
               alertDelete();
                }
            }

    })
   
});
var alertDelete = function() {
    $(".alert").animate({right: "40px"})
    $(".alert").delay(3000);
	$(".alert").animate({right:'-194px'},700);
    // $(".alert").fadeOut(700);
					

}



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

 $(".hary1").each(function(){
     $(this).select2({})
 }) ;
 




// calender 



$(document).ready(function () {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2019-06-15'
            },
            {
                title: 'Long Event',
                start: '2019-6-20',
                end: '2019-06-30'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2019-06-23T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2019-01-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2019-06-25',
                end: '2019-06-26'
            },
          
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2019-06-28'
            }
        ]
    });

});

