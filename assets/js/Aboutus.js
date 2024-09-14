let aboutUsCard = document.querySelectorAll(".aboutUsCard");
let AboutUsArray = Array.from(aboutUsCard);
let aboutUsCardHead = document.querySelectorAll(".aboutUsCardHead");
let OpenCard = document.querySelectorAll(".aboutUsOpenClose .plus");
let closeCard = document.querySelectorAll(".close");
let aboutUsOpenClose = document.querySelectorAll("aboutUsOpenClose");
const CardHeight = `200px`;
const CardHeightClosed = `40px`;

let cardInfo = false;
// about us card click effect

// aboutUsCard.forEach((Card) => {
//   Card.addEventListener("click", (e) => {
//     if (!cardInfo) {
//       Card.style.height = CardHeight;
//       aboutUsCardHead.forEach((Head) => {
//         Card.children.item(Head).classList.add("aboutUsCardHeadActive");
//       });
//       cardInfo = true;
//     } else {
//       Card.style.height = CardHeightClosed;
//       cardInfo = false;
//       aboutUsCardHead.forEach((Head) => {
//         Card.children.item(Head).classList.remove("aboutUsCardHeadActive");
//       });
//     }
//   });
// });

AboutUsArray.forEach((Card) => {
  Card.addEventListener("click", (e) => {
    if (!cardInfo) {
      e.currentTarget.style.height = CardHeight;
      aboutUsCardHead.forEach((Head) => {
        Card.children.item(Head).classList.add("aboutUsCardHeadActive");
      });
      cardInfo = true;
    } else {
      e.currentTarget.style.height = CardHeightClosed;
      aboutUsCardHead.forEach((Head) => {
        Card.children.item(Head).classList.remove("aboutUsCardHeadActive");
      });
      cardInfo = false;
    }
  });
});
