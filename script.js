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

function checkValid(firstname, lastname, email, description) {
  // Check Name
  if (
    //first & last name missing
    // document.getElementById("first-name-input-controller").value === "" &&
    // document.getElementById("last-name-input-controller").value === ""
    firstname.value === "" &&
    lastname.value === ""
  ) {
    document.getElementById("name-controller").style.display = "unset";
    document.getElementById("name-controller").innerHTML =
      "<i class='fa-solid fa-xmark'></i> Name is required.";
    document.getElementById("first-name-controller").style.color = "#cc3b3b";
    document.getElementById("first-name-input-controller").style.border =
      "2px solid #cc3b3b";
    document.getElementById("last-name-controller").style.color = "#cc3b3b";
    document.getElementById("last-name-input-controller").style.border =
      "2px solid #cc3b3b";
  } else if (
    //first name missing
    document.getElementById("first-name-input-controller").value === ""
  ) {
    document.getElementById("name-controller").style.display = "unset";
    document.getElementById("name-controller").innerHTML =
      "<i class='fa-solid fa-xmark'></i> Name is missing required subfields: First Name";
    document.getElementById("first-name-controller").style.color = "#cc3b3b";
    document.getElementById("first-name-input-controller").style.border =
      "2px solid #cc3b3b";
    document.getElementById("last-name-controller").style.color = "gray";
    document.getElementById("last-name-input-controller").style.border =
      "2px solid gray";
  } else {
    //last name missing
    document.getElementById("name-controller").style.display = "unset";
    document.getElementById("name-controller").innerHTML =
      "<i class='fa-solid fa-xmark'></i> Name is missing required subfields: Last Name";
    document.getElementById("last-name-controller").style.color = "#cc3b3b";
    document.getElementById("last-name-input-controller").style.border =
      "2px solid #cc3b3b";
    document.getElementById("first-name-controller").style.color = "gray";
    document.getElementById("first-name-input-controller").style.border =
      "2px solid gray";
  }
  //refresh style
  if (firstname.value !== "" && lastname.value !== "") {
    document.getElementById("name-controller").style.display = "none";
    document.getElementById("last-name-controller").style.color = "gray";
    document.getElementById("last-name-input-controller").style.border =
      "2px solid gray";
    document.getElementById("first-name-controller").style.color = "gray";
    document.getElementById("first-name-input-controller").style.border =
      "2px solid gray";
  }

  //Check Email
  var emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (email.value === "") {
    //check missing
    document.getElementById("email-controller").style.display = "unset";
    document.getElementById("email-controller").innerHTML =
      "<i class='fa-solid fa-xmark'></i> Email is required.";
    document.getElementById("email-input-controller").style.border =
      "2px solid #cc3b3b";
  } else if (email.value.match(emailFormat)) {
    //right format
    document.getElementById("email-controller").style.display = "none";
    document.getElementById("email-input-controller").style.border =
      "2px solid grey";
  } else {
    //wrong format
    document.getElementById("email-controller").style.display = "unset";
    document.getElementById("email-controller").innerHTML =
      "<i class='fa-solid fa-xmark'></i> Email is not valid. Email addresses should follow the format User@domain.com.";
    document.getElementById("email-input-controller").style.border =
      "2px solid #cc3b3b";
  }

  //Check Description
  if (description.value === "") {
    //check missing
    document.getElementById("descript-controller").style.display = "unset";
    document.getElementById("descript-controller").innerHTML =
      "<i class='fa-solid fa-xmark'></i> Description of Project is required.";
    document.getElementById("descript-input-controller").style.border =
      "2px solid #cc3b3b";
  } else {
    //refresh
    document.getElementById("descript-controller").style.display = "none";
    document.getElementById("descript-input-controller").style.border =
      "2px solid gray";
  }
}
