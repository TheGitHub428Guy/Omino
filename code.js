cnsl = ["", "", "", "", "", "", "", "", "", ""]
var input = document.getElementById("input")
function addtoConsole (str) {
	if (cnsl.push(str) > 10) {
		cnsl.shift();
	}
	document.getElementById("console").innerHTML = cnsl.join("<br>")
}
var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		if (input.value == "") {
		} else if ((input.value.replace(/HELP$/i, "HELP 1").slice(5).match(/\D/) == null) && (input.value.match(/^HELP\b/i) != null) && (input.value.replace(/HELP$/i, "HELP 1").length > 5)) {
			addtoConsole(input.value.replace(/HELP$/i, "HELP 1").slice(5))
		} else if (input.value.match(/^HELP\b/i) != null) {
			addtoConsole("Invalid help page number")
		} else {
			addtoConsole("Command not recognized. Say HELP for help")
		}
		input.value = ""
	}
});
addtoConsole("Welcome! Say HELP for help.")