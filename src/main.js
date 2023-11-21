function reloadPage(){
    location.reload();
}




function verificarInput (inputCel){ 
    var value = inputCel.value;

    if (value.startsWith("3") || value === ""){
      inputCel.classList.add("input-cel");
      inputCel.classList.remove("input-cel-alert");
      inputCel.removeAttribute("readonly");

    }

    else {
        inputCel.classList.remove("input-cel");
        inputCel.classList.add("input-cel-alert");
        inputCel.setAttribute("readonly", true);
     
    
       
    }
    console.log("se removio ")
};

var input_cel = document.getElementById("inputCel");
input_cel.addEventListener("input", function VerificarInput(){
    verificarInput(input_cel);
})


input_cel.addEventListener("keydown", function(event){


    if (event.key === "Backspace" || event.key === "Delete") {
   
        input_cel.removeAttribute("readonly");
       
      }  else{
        valor.setAttribute("readonly", true);
      }

     }) 
    







    




