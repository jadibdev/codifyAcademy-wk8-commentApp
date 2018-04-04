var userName = document.getElementById('name');
var userComment = document.getElementById('comment');
var button = document.getElementById('button');

userName.addEventListener("keyup", function(e) {
  if (event.which === 13) {
    document.getElementById("first").innerHTML = "Username: " + userName.value;
    e.currentTarget.value = "";
  }
});

userComment.addEventListener("keyup", function(e) {
  if (event.which === 13) {
    document.getElementById("second").innerHTML = "Comments: " + userComment.value;
    e.currentTarget.value = "";
  }
});

button.addEventListener("click", function(e) {
    document.getElementById("first").innerHTML = "Username: " + userName.value;
    document.getElementById("second").innerHTML = "Comments: " + userComment.value;
    e.currentTarget.value = "";

});
