const tabs = document.querySelectorAll('.scrollable-tabs-container a');

const rightArrow = document.querySelector('.scrollable-tabs-container .right-arrow svg');

const leftArrow = document.querySelector('.scrollable-tabs-container .left-arrow svg');

const tabList = document.querySelector('.scrollable-tabs-container ul');

const leftArrowContainer = document.querySelector('.scrollable-tabs-container .left-arrow');

const rightArrowContainer = document.querySelector('.scrollable-tabs-container .right-arrow');

const removeAllActiveClasses = () => {
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    removeAllActiveClasses();
    tab.classList.add('active');
  });
});

const manageIcons = () => {
  if (tabList.scrollLeft >= 20) {
    leftArrowContainer.classList.add('active');
  }
  else {
    leftArrowContainer.classList.remove('active');
  }

  let maxScrollValue = tabList.scrollWidth - tabList.clientWidth - 20;

  if (tabList.scrollLeft >= maxScrollValue) {
    rightArrowContainer.classList.remove('active');
  }
  else {
    rightArrowContainer.classList.add('active');
  }

  console.log('scroll - width: ', tabList.scrollWidth);
  console.log('client - width: ', tabList.clientWidth);
}

rightArrow.addEventListener('click', () => {
  tabList.scrollLeft += 200;
  manageIcons();
});

leftArrow.addEventListener('click', () => {
  tabList.scrollLeft -= 200;
  manageIcons();
});

tabList.addEventListener('scroll', manageIcons);


// $('.scrollable-tabs-container a').click(function(e) {
//   e.preventDefault();
//   console.log("scrolling")
//   var $scrooll_to_id = $(this.getAttribute('href'));
//   $('html').stop(true).animate({
//     scrollTop: ($scrooll_to_id.position().top - $('.scrollable-tabs-container').height())
//   });
// });