# Website Performance Optimization portfolio project

The objective is to reach PageSpeed Insights scores of above 90 for the
mobile portfolio project.

## PageSpeed Insights

### Before Optimization

| Page                    | Mobile        | Desktop   |
| :---------------------- |:-------------:| :--------:|
| index.html              |      74       |     88    |
| project-2048.html       |      70       |     81    |
| project-webperf.html    |      57       |     70    |
| project-mobile.html     |      74       |     87    |
| views/pizza.html        |      72       |     85    |

### After Optimization

| Page                    | Mobile        | Desktop   |
| :---------------------- |:-------------:| :--------:|
| index.html              |      99       |     99    |
| project-2048.html       |      99       |     99    |
| project-webperf.html    |      99       |     99    |
| project-mobile.html     |      99       |     99    |
| views/pizza.html        |      85       |     92    |


## Optimizations

### Common Optimizations

* Compressed all the images.
* Enabled static as well as dynamic content compression thus utilizing gzip compression.
* Enabled browser caching for the static content.
* Minified HTML, CSS and javaScripts.

### Optimizations specific to index.html, project-2048.html, project-mobile.html and project-webperf.html

* Added media attribute to print.css.
* Added async attribute to the scripts that do not affect initial page loading.
* Removed web fonts.
* Removed the link to style.css and added it internally.

### Optimizations specific to pizza.html

* Added viewport for better rendering on different devices.
* Optimized changePizzaSizes() by removing dxCalculation() and pizzaSizeSwitcher() from it and instead used switch
  case to determine pizza sizes.
* Also removed multiple instances of selecting randomPizzaContainer from inside the for loop in changePizzaSizes().
* Replaced querySelectorAll with getElementsByClassName and querySelector with getElementById for better performance.
* Removed forced synchronous layout caused by updatePositions() when scrolling by moving document.body.scrollTop and
  items.length outside the for loop and calculating them just once.
* Reduced the number of pizzas from 200 to 20.
* Added will-change property to the mover class so that the animating pizzas are on their own layer thus reducing paint.
* Removed unused css from bootstrap-grid.css.
