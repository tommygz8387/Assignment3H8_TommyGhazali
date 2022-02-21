function hide() {
  var x = document.getElementById("con");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function edit() {
  var nama = document.getElementById("nama").value;
  var role = document.getElementById("role").value;
  var availability = document.getElementById("availability").value;
  var usia = document.getElementById("usia").value;
  var lokasi = document.getElementById("lokasi").value;
  var eksperience = document.getElementById("eksperience").value;
  var email = document.getElementById("email").value;

  document.getElementById("nm").innerHTML = nama;
  document.getElementById("rol").innerHTML = role;
  document.getElementById("ava").innerHTML = availability;
  document.getElementById("u").innerHTML = usia;
  document.getElementById("lok").innerHTML = lokasi;
  document.getElementById("peng").innerHTML = eksperience;
  document.getElementById("e").innerHTML = email;
}
