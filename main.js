menuListArray = ["Pizza Vegetariana",
                  " pizza de Frango"
                  "Pizza Portuguesa"
                  "Pizza quatro queijos"
                  "Pizza de calabresa"
                  "Pizza extravagante"];

function getMenu(){
var htmldata;
menuListArray.sort()
for (var i=0;i< menuListArray.length;i++) {
    htmldata=htmldata+ menuListArray[i] + '<br>'
    
}
  document.getElementById("displayMenu").innerHTML=htmldata
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaimg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();

htmldata=""
for (var i = 0; index < menuListArray.length;i++) {
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';

   document.getElementById("displayAddeMenu") innerHTML=htmldata
}
}

function addTop(){
var item=document.getElementById("additem").value
menuListArray.push(item);
addItem();
}