## Website Performance Optimization portfolio project
- Github project: 
-- https://github.com/robinp1k2/frontend-nanodegree-mobile-portfolio
- Github Pages website: 
-- http://robinp1k2.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html 
- PageSpeed Insights - desktop and mobile:
-- https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Frobinp1k2.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=desktop 
-- https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Frobinp1k2.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=mobile

### How to install and build
1. Clone the repository from github
2. Make edits to the website files and when finished run gulp to prep the files for production.  At the command line simply type "gulp".  This runs the gulpfile.js which takes care of all optimizing and moves updated files into the "dist" directory.  Note: Do not edit files in the "dist" folder.  That is where the compressed files are stored which are deployed to production.
3. After running gulp the "dist" directory contains all optimized files ready for production depoloyment.

### Image Optimizations
- Copied images at remote URLS to local directory
- Resized and adjusted quality of images to be size needed by web pages.  Made multiple sizes when needed.
- Compressed all images

### HTML Optimizations
- Removed call to Google web fonts
- Removed call to Google Analytics
- Inlined styles needed above the fold.
- Delayed load of css files (inlined above-the-fold)
- Set the JavaScript script to load asynchronously.
- Set “media” on the print style so loads asynchronously.

### JavaScript:
- Used jslint.org to standardize the code.
- Pulled embedded functions out so they are not redefined each time calling function is run.
- Modified code that resizes pizza using the switch to use three set pixel values instead of running functions and calculations.
- Modified the code that moves the pizzas (“movers”) to reduce calculations by using preset multiplication factors.  
- Reduced calls to render-blocking functions as much as possible to cut down on jank.
- Used requestAnimationFrame to run the moving pizza animations and a trick from website html5rocks to save latestKnownScrollY so don’t have to calculate it during animation function as wells as halt animations when one is running (“ticking”).
- Cut down on the number of moving pizzas from 200 to 18.
- Utilized more efficient “getElementsByClassName instead of querySelectorAll.
- Created onLoad function and initialization function (“makePizzaShop”) to better organize code.

### CSS:
Added “will-change” to css to encourage using composite images.  



## Original instructions for project:
Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
