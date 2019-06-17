// // sign in form 
$(document).ready(function () {

var hide ,  input ;
hide = document.querySelectorAll(".hide-password");
input = document.querySelectorAll(".pass-input");

hide.forEach((el)=>{

    el.addEventListener("click", function (e) {
        e.preventDefault();
        input.forEach((inp) => {
            inp.classList.toggle("show")

            if (inp.classList.contains("show")) {
                inp.setAttribute("type", "text");
            } else {
                inp.setAttribute("type", "password");
            }
        }); 
    });
});
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
             $(".radi-input").css("display", "block");
             $(".radi-input2").css("display", "none");
         }
         else if ($(this).val() == "option3") {
             $(".radi-input").css("display", "none");
             $(".radi-input2").css("display", "block");
         }
          else  {
             $(".radi-input").css("display", "none");
             $(".radi-input2").css("display", "none");
          }
 })


// khedma page

var more = document.querySelectorAll(".more");

more.forEach((el) => {
    el.addEventListener("click", function () {
        el.parentElement.parentElement.parentElement.parentElement.classList.add("visible")      
    })
})
//  popup

    var refuse =document.querySelectorAll(".refuse")
    var overlay = document.querySelector(".bg-modal")
    var reason = document.getElementById("reason")
    var input = document.getElementById("inp")


    refuse.forEach((btn)=>{
        btn.addEventListener("click", function () {
        overlay.style.display = "block"
    });
    })
    if (reason!=null){
         reason.addEventListener("click", function (e) {
             if (input.value !== "") {
                 e.preventDefault();
                 overlay.style.display = "none"
                 console.log(input.value)
             }

         })

    }
   

// alert

 var alertkhedma = function () {
    $(".alert-khedma").animate({ right: "40px" })
    $(".alert-khedma").delay(3000);
    $(".alert-khedma").animate({ right: '-194px' }, 700);
}
 var accept = document.querySelectorAll(".accept")
 accept.forEach((ac) => {
    ac.addEventListener("click", function () {
        alertkhedma();
            })
    });



// end khedma page 
// sign up page

    class Khadem {
        constructor(name, service, mobile) {
            this.name = name;
            this.service = service;
            this.mobile = mobile;
        };
    };
    /// ui controller
    class UiController {


        // display ddata
        static addBookToList(khadem) {
            var list, row, content;
            list = document.querySelector(".body-signup");
            row = document.createElement("tr");
            content = `<td>${khadem.name} </td>
 <td> ${khadem.service} </td>
 <td> ${khadem.mobile} <a href="#" class="float-right mobi"><i class="far fa-edit"></i>
         <span class="edit">Edit</span></a> </td>`
            row.innerHTML = content
            list.appendChild(row)

        };
        // clear values
        static clearInputs() {
            var inputs = document.querySelectorAll(".form-control")
            inputs.forEach((el) => {
                el.value = ''
                inputs[0].focus();
            });
        };

    }


    // get values & display data
    var btn = document.getElementById("submit")



    var displayData = function () {
        var nameInput, serviceInput, mobileInput, alert;
        /// inputs value
        nameInput = document.getElementById("name").value;
        serviceInput = document.getElementById("servise").value;
        mobileInput = document.getElementById("mobile").value;
        khadem = new Khadem(nameInput, serviceInput, mobileInput);
        if (nameInput == "" || serviceInput == "" || mobileInput == "" ) {
        alert = document.querySelector(".alert2")
        alert.style.display = "block"
        alert.textContent = "you should fill the fields"
    }else {
    document.querySelector(".alert2").style.display = "none";
            UiController.addBookToList(khadem);
              UiController.clearInputs();
            };
    };






    // display data event
    if(btn != null){
        btn.addEventListener("click", function () {
            displayData()
        });
    }
    


    document.addEventListener("keypress", function (e) {
        if (e.keyCode === 13 || e.which === 13) {
            displayData()
        }
    });

   




 

// calender 


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




