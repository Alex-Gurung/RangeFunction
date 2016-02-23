function createJava(){
	var min = parseInt(document.getElementById('minimumText').value);
	var max = parseInt(document.getElementById('maximumText').value);
	var differencep1 = max-min + 1;
	alert("((int)Math.random() * " + differencep1 + ") +" + min);
}
function createPython(){
	var min = parseInt(document.getElementById('minimumText').value);
	var max = parseInt(document.getElementById('maximumText').value);
	alert("randint(" + min + "," + max + ")");
}
function createCpp(){
	var min = parseInt(document.getElementById('minimumText').value);
	var max = parseInt(document.getElementById('maximumText').value);
	var differencep1 = max-min + 1;
	alert("rand() % " + differencep1 + " + " + min);
}