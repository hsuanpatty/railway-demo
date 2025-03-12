"use strict";

function openTab(event, tabIndex) {
  const tabLinks = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabContents.forEach((content) => {
    content.style.display = "none";
  });

  tabLinks.forEach((link) => {
    link.classList.remove("active");
  });

  document.getElementById(tabIndex).style.display = "block";
  event.currentTarget.classList.add("active");
}

function openMobileTab(event) {
  const tabName = event.target.value;

  openTab(
    {
      currentTarget: document.querySelector(
        `button[onclick="openTab(event, '${tabName}')"]`
      )
    },
    tabName
  );
}

document.querySelectorAll(".tab")[0].click();