window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 80) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}



$('.corousel_1').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4  
    }
  }
})

$('.corousel_2').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})


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

$('.ins_corousel').owlCarousel({
  items:3,
  loop:false,
  center:true,
  URLhashListener:true,
  autoplayHoverPause:true,
  startPosition: 'URLHash'
});

('.owl-carousel').owlCarousel11({
  loop:true,
  margin:20,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

