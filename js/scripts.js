//back end
var names = ["hisato", "john", "anne", "yuki", "paul", "peter"];
// console.log(names)


var convertedNumber = function(inputtedNumber) {
  var arr = []

  if (inputtedNumber >= 4000 || inputtedNumber < 1 || isNaN(inputtedNumber)) {
    return "your number is INVALID";
}
  else {
    for (var i=inputtedNumber; i > 0; i--) {
      if(i>=5){
        arr.push("V");
        i -= 4
      }
      else if(i === 4){
        arr.push("IV");
        i -=3;
      } else
      arr.push("I")
    }
    }



// } else {
//     for (var i = inputtedNumber; i > 0; i--) {
//       if(i>=10){
//         arr.push("X");
//         i -= 9;
//       }else if (i === 9) {
//           arr.push("IX");
//           i -= 8;
//       }else if(i >= 5){
//         arr.push("V");
//         i -= 4;
//       } else if (i === 4) {
//         arr.push("IV");
//         i -= 3;
//       } else {
//         arr.push("I")


    return arr.join("");
  };







  // user interface logic
  $(document).ready(function() {

    for (var i = 0; i < names.length; i++) {
      $("select#names").append("<option> "+names[i]+" </option>");
    }

    $("form#formOne").submit(function(event) {
      event.preventDefault();
      var inputtedNumber = parseInt($("input#inputtedNumber").val());
      var output = convertedNumber(inputtedNumber);
      $("#result").text(output);
    });
  });
