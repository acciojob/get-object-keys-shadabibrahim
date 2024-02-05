//your JS code here. If required.
const student = {
	name:"jhon"
}

student.prototype.getKeys = function(){
	return Object.keys(this);
}

var keys = student.getKeys();

// Log the keys to the console
// alert("Keys:", keys);