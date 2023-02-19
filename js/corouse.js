const tabs = document.querySelectorAll(".ap-tab-link");
const tabs_content = document.querySelectorAll(".ap-tab-content");

function getActiveTab(i) {
  tabs.forEach((tab) => {
    tab.classList.remove("active-tab");
  });
  tabs_content.forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
    tabContent.style.display = "none";
  });

  const selectedTab = tabs[i];
  const selectedTabContent = tabs_content[i];

  selectedTab.classList.add("active-tab");
  selectedTabContent.classList.add("active-tab");
  selectedTabContent.style.display = "block";
}

getActiveTab(0);

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    e.preventDefault();
    getActiveTab(i);
  });
}


$('.inss_corousel').owlCarousel({
    items:3,
    loop:false,
    center:true,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
  });


  window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backtop.style.opacity = 1;
    } else {
      backtop.style.opacity = 0;
    }
  }