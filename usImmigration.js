/* This code uses the Intersection Observer API to watch elements on the page and toggle a CSS class based on whether they’re visible in the viewport. */
//Creates a new observer that runs a callback whenever observed elements enter or leave the viewport.
//entries is an array of objects describing each observed element’s visibility.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { //Loop through observed entries
        //console.log(entry) //Log the entry and its properties to the console for debugging purposes.
        if (entry.isIntersecting) { //Check if the element is visible
            entry.target.classList.add('show'); //Add the 'show' class if the element is visible else remove it
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
