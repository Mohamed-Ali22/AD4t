let GoUp = document.getElementById("GoUp");
let CallUs = document.getElementById("CallUs");
let Nav = document.querySelector("header");
let Menu = document.getElementById("Menu");
let navgation = document.getElementById("Nav");
let NavLinks = document.querySelectorAll("#Nav ul li a");
let LinksArray = Array.from(NavLinks);
let linkClose = document.getElementById("linkClose");

// let linkOpen = false;

LinksArray.forEach((link) => {
  link.addEventListener("click", (e) => {
    LinksArray.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
// chake the hight of the page for opacity nav
window.onload = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    Nav.style.opacity = 0.6;
  }
};
// scroll effect for ( navgation bar opacity , up and call apperince and mouse in and out )
window.addEventListener("scroll", (e) => {
  let SmallScreen = `600px`;
  let MedScreen = `900px`;

  if (window.outerWidth <= 767) {
    Nav.style.opacity = 1;
    Nav.style.transition = `0.8s`;
    LinksArray.forEach((link) => {
      link.addEventListener("click", (e) => {
        LinksArray.forEach((link) => {
          link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        navgation.style.display = `none`;
      });
    });
    linkClose.addEventListener("click", () => {
      navgation.style.display = `none`;
    });
  } else if (window.outerWidth >= 768) {
    linkClose.addEventListener("click", () => {
      navgation.style.display = `none`;
    });
    navgation.style.display = `flex`;
  } else if (window.outerWidth <= 900) {
    Nav.style.opacity = 1;
    Nav.style.transition = `0.8s`;
    LinksArray.forEach((link) => {
      link.addEventListener("click", (e) => {
        LinksArray.forEach((link) => {
          link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");

        navgation.style.display = `none`;
      });
    });
    linkClose.addEventListener("click", () => {
      navgation.style.display = `none`;
    });
    navgation.style.display = `flex`;
  } else {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      GoUp.style.display = "flex";
      Nav.style.opacity = 0.6;
      Nav.style.transition = `0.8s`;
      let Mouse = 1;
      // mouse in and mouse out in nav
      Nav.addEventListener("mouseenter", (e) => {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          {
            if (Mouse == 1) {
              Nav.style.opacity = 1;
              Nav.style.transition = `0.8s`;
              Mouse = 0;
            } else {
              Nav.style.opacity = 0.6;
              Nav.style.transition = `0.8s`;
              Mouse = 1;
            }
          }
        } else {
        }
      });
    } else {
      GoUp.style.display = "none";
      Nav.style.opacity = 1;
      Nav.style.transition = `0.8s`;
    }
  }
});
// ckick function for Up btn
GoUp.addEventListener("click", (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
// click function on call us to contact
CallUs.addEventListener("click", (e) => {
  window.location.href = "tel:+0201005567483";
});

Menu.addEventListener("click", (e) => {
  let NavOpen = false;
  if (NavOpen == false) {
    navgation.style.display = `flex`;
    NavOpen = true;
  } else {
    navgation.style.display = `none`;
    NavOpen = false;
  }
});
