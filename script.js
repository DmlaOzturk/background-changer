var colorNum = document.querySelector("#bt");
var colorType = document.querySelector(".colorType");
var body = document.getElementById("background");


colorType.addEventListener("input",function(){
	colorNum.textContent = colorType.value;
})

colorNum.addEventListener("click",function(){
	 body.style.background = colorType.value;
})
