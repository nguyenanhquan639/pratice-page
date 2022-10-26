function changeNav() {
  document.getElementById("mySidenav-2").style.width = "85%";
}

function unchangeNav() {
  document.getElementById("mySidenav-2").style.width = "0";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "85%";
  document.getElementById("more-btn").style.display = "none";
  document.getElementById("closebtn").style.display = "flex";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav-2").style.width = "0";
  document.getElementById("more-btn").style.display = "flex";
  document.getElementById("closebtn").style.display = "none";
}

function checkValid() {
  if (
    document.getElementById("first-name-input-controller").value === "" &&
    document.getElementById("last-name-input-controller").value === ""
  ) {
    document.getElementById("name-controller").style.display = "unset";
  }
}
