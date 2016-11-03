# Website Performance Optimization portfolio project

The objective is to reach PageSpeed Insights scores of above 90 for the
mobile portfolio project.      
You will find the final production code inside the `dist` directory.

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
* Optimized `changePizzaSizes()` by removing `dxCalculation()` and `pizzaSizeSwitcher()` from it and instead used switch
  case to determine pizza sizes.
* Also removed multiple instances of selecting randomPizzaContainer from inside the for loop in `changePizzaSizes()`.
* Replaced querySelectorAll with getElementsByClassName and querySelector with getElementById for better performance.
* Removed forced synchronous layout caused by `updatePositions()` when scrolling by moving `document.body.scrollTop` and
  `items.length` outside the for loop and calculating them just once.
* Reduced the number of pizzas from 200 to 20.
* Added will-change property to the mover class so that the animating pizzas are on their own layer thus reducing paint.
* Removed unused css from bootstrap-grid.css.

## More Information

### Hosting

* Microsoft Internet Information Service(IIS) on Windows 8.1 was used to locally host the website.
* Ngrok was used along with IIS to make my workstation act as a local server so that PageSpeed Insights could run on
  this website.

### Caching and Compression

* Configured dynamic compression in web.config to enable it on IIS.
* Added browser caching limit to maximum of 30 days for static content in web.config.

### Grunt

* Configured grunt to perform some tasks.
* grunt-contrib-imagemin was used to compress images.
* grunt-contrib-uglify was used to minify scripts.
* grunt-contrib-cssmin was used to minify css.
* grunt-contrib-htmlmin was used to minify html.
* grunt-uncss was used to remove unused css.
