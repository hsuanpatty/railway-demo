const tabcontent = document.querySelectorAll(".tabcontent");
const tablinks = document.querySelectorAll(".tablinks");

function openCity(event, title) {
  /* remove active class from all tabs */
  tabcontent.forEach(tab=>{tab.classList.remove('active')});
  tablinks.forEach(tab=>{
    tab.classList.remove('active');
    tab.setAttribute('tabindex', 0);
  });
  // console.log(event);
  // console.log(title);
  document.querySelector("#"+title).classList.add("active"); 
  document.querySelector("#"+title).setAttribute('tabindex', 2);
  document.querySelector('.tablinks[title="'+title+'"]').classList.add("active");
  document.querySelector('.tablinks[title="'+title+'"]').setAttribute('tabindex', 1)
};
  tabcontent[0].setAttribute('tabindex', 2);
  tablinks[0].setAttribute('tabindex', 1);


  

