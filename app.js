var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/transalte/yoda.json"

varserverURL = "https://api.funtranslations.com/translate/groot.json"

function getTraslationURL(input){
    return serverURL + "?" + "text=" + input
}
function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server! Try again after some time")
    }

    function clickHandler(){
        var inputText = txtInput.value;
         fetch(getTraslationURL(inputText))
         .then(json=>{
             var translateText = json.contents.translated;
             outputDiv.innerText = translateText;

         })
         .catch(errorHandler)
    };

    btnTranslate.addEventListener("click", clickHandler)