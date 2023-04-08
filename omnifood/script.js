const yearEl = document.querySelector('.current-year');
yearEl.textContent = new Date().getFullYear();

const btnNavClicked = document.querySelector('.header');
function btnNavFun() {
    btnNavClicked.classList.toggle('nav-open');
}

const linkNavClicked = document.querySelectorAll('.nav-list_item');
linkNavClicked.forEach(function(e){
    e.addEventListener("click", function(){
        btnNavClicked.classList.toggle('nav-open');
    });
});


// I tacked this code copy and I can't understand it

const sectionHeroEl = document.querySelector(".s-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
