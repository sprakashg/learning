var input1 = "rama";
var inArr = input1.split("");
var input2 = "mara";
var arr = input2.split("");

if(input1.length == input2.length) {
	for(var i = 0; i < input1.length; i++) {
		var pos = arr.indexOf(input1[i]);
		if(pos != -1) {
			arr.splice(pos, 1);
		}
	}
	if(arr.length == 0) {
		console.log("It's an anagram")
	} else {
		console.log("Not an anagram")
	}
} else {
	console.log("Not an anagram, length not matching")
}