// anchor scroll
const link = document.querySelector('.banner__link')
link.addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('#cards').scrollIntoView({ 
    block: 'start', 
    behavior: 'smooth'
  });
})

// open modal
const imgIconList = document.querySelectorAll('.card__img-icon');
const imgIconArray = Array.from(imgIconList).forEach((item) => {
  item.addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'block';
  })
});

// close modat
const popupBg = document.querySelector('.popup__bg');
popupBg.addEventListener('click', function(e){
  if(e.target !== document.querySelector('.popup img')){
    document.querySelector('.popup').style.display = 'none';
  }
})
