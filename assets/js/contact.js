let Name = document.getElementById("Name");
let Mail = document.getElementById("Mail");
let Title = document.getElementById("Title");
let Masseg = document.getElementById("contentMail");
let Save = document.getElementById("save");
let Clear = document.getElementById("clear");
let Erorr = document.querySelectorAll(".error");
let E_mail = [];

Save.addEventListener("click", (e) => {
  e.preventDefault();
//   save values in conter 
  let NameValue = Name.value.trim();
  let MailValue = Mail.value.trim();
  let TitleValue = Title.value.trim();
  let MassegValue = Masseg.value.trim();

//  

  if (NameValue === ``) {
    Name.style.borderBottom = `1px solid #f00`;
  } else if (NameValue.lenght < 2) {
    Name.style.borderBottom = `1px solid #f00`;
  } else {
    Name.style.borderBottom = `1px solid var(--mean-color)`;
  }
  if (MailValue == `` || MailValue.lenght >= 0) {
    Mail.style.borderBottom = `1px solid #f00`;
  }
  if (TitleValue == `` || TitleValue.lenght >= 2) {
    Title.style.borderBottom = `1px solid #f00`;
  }
  if (MassegValue == `` || MassegValue.lenght >= 2) {
    Masseg.style.borderBottom = `1px solid #f00`;
  }
});

let ClearInput = () => {
  Name.value = ``;
  Mail.value = ``;
  Title.value = ``;
  Masseg.value = ``;
};
Clear.addEventListener("click", (e) => {
  e.preventDefault();
  ClearInput();
});
