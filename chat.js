const maxLength = 140;

$('#textarea').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength-length;
  $('#chars').text(length);
});

window.onload = function() {
  $("#button").click(function() {
    let d = new Date();
    let textarea = "";
    textarea += document.getElementById("textarea").value;
    let chat = document.getElementById("chat");
    let html = "";
    html += `<div class="alert alert-info mt-1 break">
            ${textarea}
            </div>
            <small class="float-right mb-0">${d}</small><br>
            <hr class="mt-1">`
    chat.innerHTML += html
    document.getElementById("textarea").value = "";

    var length = $(this).val().length;
    var length = maxLength-length;
    $('#chars').text(length);
  });
}