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

//SLider
var slideIndex = 0;

function nextPic(n) {
  var slides = document.getElementsByClassName("mySlides");
  slideIndex += n;
  if (slideIndex === slides.length) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = 2;
  }

  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }

  switch (slideIndex) {
    case 0:
      slides[0].style.display = "unset";
      break;
    case 1:
      slides[1].style.display = "unset";
      break;
    case 2:
      slides[2].style.display = "unset";
      break;
  }
}

function checkValid(firstname, lastname, email, description, day, month, year) {
  var subname = document.getElementsByClassName("custom-sub-name"); // subname = [First Name, Last Name, MM, DD, YY]
  var input_box = document.getElementsByClassName("custom-input"); // input_box = [FN, LS, Email]
  var wrong_notif = document.getElementsByClassName("wrong-notif"); // wrong_notif = [Form, Name, Email, Description, Date]
  var label_controller = document.getElementsByClassName("label-controller"); // label_controller = [Name, Email, Description, Date]
  var name = 0;
  var mail = 0;
  var des = 0;
  var date = 0;

  // Check Name
  if (
    //first & last name missing
    firstname.value === "" &&
    lastname.value === ""
  ) {
    name = 0;
    label_controller[0].style.color = "#cc3b3b";
    wrong_notif[1].style.display = "unset";
    wrong_notif[1].innerHTML =
      "<i class='fa-solid fa-xmark'></i> Name is required.";
    subname[0].style.color = "#cc3b3b";
    input_box[0].style.border = "2px solid #cc3b3b";
    subname[1].style.color = "#cc3b3b";
    input_box[1].style.border = "2px solid #cc3b3b";
  } else if (
    //first name missing
    firstname.value === ""
  ) {
    name = 0;
    label_controller[0].style.color = "#cc3b3b";
    wrong_notif[1].style.display = "unset";
    wrong_notif[1].innerHTML =
      "<i class='fa-solid fa-xmark'></i> Name is missing required subfields: First Name";
    subname[0].style.color = "#cc3b3b";
    input_box[0].style.border = "2px solid #cc3b3b";
    subname[1].style.color = "gray";
    input_box[1].style.border = "2px solid #88b022";
  } else {
    //last name missing
    name = 0;
    label_controller[0].style.color = "#cc3b3b";
    wrong_notif[1].style.display = "unset";
    wrong_notif[1].innerHTML =
      "<i class='fa-solid fa-xmark'></i> Name is missing required subfields: Last Name";
    subname[1].style.color = "#cc3b3b";
    input_box[1].style.border = "2px solid #cc3b3b";
    subname[0].style.color = "gray";
    input_box[0].style.border = "2px solid #88b022";
  }
  //refresh style
  if (firstname.value !== "" && lastname.value !== "") {
    name = 1;
    label_controller[0].style.color = "gray";
    wrong_notif[1].style.display = "none";
    for (i = 0; i < 2; i++) {
      subname[i].style.color = "gray";
      input_box[i].style.border = "2px solid #88b022";
    }
  }

  //Check Email
  var emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (email.value === "") {
    //check missing
    mail = 0;
    label_controller[1].style.color = "#cc3b3b";
    wrong_notif[2].style.display = "unset";
    wrong_notif[2].innerHTML =
      "<i class='fa-solid fa-xmark'></i> Email is required.";
    input_box[2].style.border = "2px solid #cc3b3b";
  } else if (email.value.match(emailFormat)) {
    //right format
    label_controller[1].style.color = "gray";
    mail = 1;
    wrong_notif[2].style.display = "none";
    input_box[2].style.border = "2px solid #88b022";
  } else {
    //wrong format
    label_controller[1].style.color = "#cc3b3b";
    mail = 0;
    wrong_notif[2].style.display = "unset";
    wrong_notif[2].innerHTML =
      "<i class='fa-solid fa-xmark'></i> Email is not valid. Email addresses should follow the format User@domain.com.";
    input_box[2].style.border = "2px solid #cc3b3b";
  }

  //Check Description
  if (description.value === "") {
    //check missing
    label_controller[2].style.color = "#cc3b3b";
    wrong_notif[3].style.display = "unset";
    wrong_notif[3].innerHTML =
      "<i class='fa-solid fa-xmark'></i> Description of Project is required.";
    document.getElementsByName("description")[0].style.border =
      "2px solid #cc3b3b";
    des = 0;
  } else {
    //refresh
    label_controller[2].style.color = "gray";
    wrong_notif[3].style.display = "none";
    document.getElementsByName("description")[0].style.border =
      "2px solid #88b022";
    des = 1;
  }

  //Check Date
  var date_box = document.getElementsByClassName("custom-input-date"); // date_box = [month, day, year]
  var cas = 0;
  //-------------------- Check Case ------------------------------//
  if (day.value === "" && month.value === "" && year.value === "") {
    cas = 1;
  }

  if (day.value !== "" && month.value === "" && year.value === "") {
    cas = 2;
  }

  if (day.value !== "" && month.value !== "" && year.value === "") {
    cas = 3;
  }

  if (day.value === "" && month.value !== "" && year.value === "") {
    cas = 4;
  }

  if (day.value === "" && month.value !== "" && year.value !== "") {
    cas = 5;
  }

  if (day.value !== "" && month.value === "" && year.value !== "") {
    cas = 6;
  }

  if (day.value !== "" && month.value !== "" && year.value !== "") {
    cas = 7;
  }

  //-------------------- Case Action ------------------------------//
  switch (cas) {
    case 1: //All missing
      date = 0;
      label_controller[3].style.color = "#cc3b3b";
      wrong_notif[4].style.display = "unset";
      wrong_notif[4].innerHTML =
        "<i class='fa-solid fa-xmark'></i> Desired Project Completion Date is required.";
      for (i = 0; i < 3; i++) {
        date_box[i].style.border = "2px solid #cc3b3b";
      }
      for (let i = 2; i < 5; i++) {
        subname[i].style.color = "#cc3b3b";
      }
      break;

    case 2: //Month, Year null
      date = 0;
      label_controller[3].style.color = "#cc3b3b";
      wrong_notif[4].style.display = "unset";
      wrong_notif[4].innerHTML =
        "<i class='fa-solid fa-xmark'></i> Desired Project Completion Date is missing required subfields: Month, Year";
      date_box[0].style.border = "2px solid #cc3b3b";
      subname[2].style.color = "#cc3b3b";
      date_box[2].style.border = "2px solid #cc3b3b";
      subname[4].style.color = "#cc3b3b";
      date_box[1].style.border = "2px solid #88b022";
      subname[3].style.color = "gray";
      break;

    case 3: //Year null
      date = 0;
      label_controller[3].style.color = "#cc3b3b";
      wrong_notif[4].style.display = "unset";
      wrong_notif[4].innerHTML =
        "<i class='fa-solid fa-xmark'></i> Desired Project Completion Date is missing required subfields: Year";
      date_box[0].style.border = "2px solid #88b022";
      subname[2].style.color = "gray";
      date_box[2].style.border = "2px solid #cc3b3b";
      subname[4].style.color = "#cc3b3b";
      date_box[1].style.border = "2px solid #88b022";
      subname[3].style.color = "gray";
      break;

    case 4: //Day, Year null
      date = 0;
      label_controller[3].style.color = "#cc3b3b";
      wrong_notif[4].style.display = "unset";
      wrong_notif[4].innerHTML =
        "<i class='fa-solid fa-xmark'></i> Desired Project Completion Date is missing required subfields: Day, Month";
      date_box[1].style.border = "2px solid #cc3b3b";
      subname[3].style.color = "#cc3b3b";
      date_box[2].style.border = "2px solid #cc3b3b";
      subname[4].style.color = "#cc3b3b";
      date_box[0].style.border = "2px solid #88b022";
      subname[2].style.color = "gray";
      break;

    case 5: //Day null
      date = 0;
      label_controller[3].style.color = "#cc3b3b";
      wrong_notif[4].style.display = "unset";
      wrong_notif[4].innerHTML =
        "<i class='fa-solid fa-xmark'></i> Desired Project Completion Date is missing required subfields: Day";
      date_box[1].style.border = "2px solid #cc3b3b";
      subname[3].style.color = "#cc3b3b";
      date_box[0].style.border = "2px solid #88b022";
      subname[2].style.color = "gray";
      date_box[2].style.border = "2px solid #88b022";
      subname[4].style.color = "gray";
      break;

    case 6: //Month null
      date = 0;
      label_controller[3].style.color = "#cc3b3b";
      wrong_notif[4].style.display = "unset";
      wrong_notif[4].innerHTML =
        "<i class='fa-solid fa-xmark'></i> Desired Project Completion Date is missing required subfields: Month";
      date_box[1].style.border = "2px solid #88b022";
      subname[3].style.color = "gray";
      date_box[0].style.border = "2px solid #cc3b3b";
      subname[2].style.color = "#cc3b3b";
      date_box[2].style.border = "2px solid #88b022";
      subname[4].style.color = "gray";
      break;

    case 7: //Nothing null
      if (year.value.length < 4) {
        date = 1;
        label_controller[3].style.color = "#cc3b3b";
        wrong_notif[4].style.display = "unset";
        wrong_notif[4].innerHTML =
          "<i class='fa-solid fa-xmark'></i> Desired Project Completion Date: Year is not valid. Value should be 4 characters long.";
        for (i = 0; i < 3; i++) {
          date_box[i].style.border = "2px solid #cc3b3b";
        }
        for (let i = 2; i < 5; i++) {
          subname[i].style.color = "#cc3b3b";
        }
        break;
      } else {
        date = month.value + "/" + day.value + "/" + year.value;
        console.log(date);
        if (
          moment(date, "MM/DD/YYYY", true).isValid() ||
          moment(date, "M/DD/YYYY", true).isValid() ||
          moment(date, "M/D/YYYY", true).isValid() ||
          moment(date, "MM/D/YYYY", true).isValid()
        ) {
          date = 1;
          label_controller[3].style.color = "gray";
          wrong_notif[4].style.display = "none";
          for (i = 0; i < 3; i++) {
            date_box[i].style.border = "2px solid #88b022";
          }
          for (let i = 2; i < 5; i++) {
            subname[i].style.color = "gray";
          }
        } else {
          date = 0;
          label_controller[3].style.color = "#cc3b3b";
          wrong_notif[4].style.display = "unset";
          wrong_notif[4].innerHTML =
            "<i class='fa-solid fa-xmark'></i> Desired Project Completion Date is not valid. This is not a real date.";
          for (i = 0; i < 3; i++) {
            date_box[i].style.border = "2px solid #cc3b3b";
          }
          for (let i = 2; i < 5; i++) {
            subname[i].style.color = "#cc3b3b";
          }
          break;
        }
      }

    default:
      break;
  }

  //Check form
  if (name === 0 || des === 0 || mail === 0 || date === 0) {
    wrong_notif[0].style.display = "unset";
    wrong_notif[0].innerHTML =
      "<i class='fa-solid fa-xmark'></i> Your form has encountered a problem. Please scroll down to review.";
    return false;
  } else {
    wrong_notif[0].style.display = "none";
    return true;
  }
}
