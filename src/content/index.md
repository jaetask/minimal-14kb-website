## Single Request Application - My CV

### I imagine the app to work something like this..

There is a *base weight* for a page. This is made up of the main html template, the base CSS and the main JavaScript application. Lets say this is 20Kb raw, leaving 20Kb raw for each page to play with. 

#### Routing
You land at the index page and you get the full application in a single hit. One all inclusive HTTP response. Then you click on /about and it loads just the JSON content for the about page into the current page and swaps out the page content. If you go directly in a browser to /about then you get the full html application but loaded with the /about content instead of the index content.

This means any JSON page content can be delivered raw, or wrapped in the html application.

It also means then we we request the RAW JSON version of a page, it will be less than 14Kb and we can also stuff in other components that can be saved into the browser for later use..

By having the abilities in the browser, we reduce the size of requests even further and can then load more abilities into the browser. This allows feature upscaling as the app is used.
 

## It doesn't do anything
That's because I am only a few days into this project. My current thoughts and plans are:

- Client side caching of JavaScript & CSS chunks
- Client side routing for full single page app experience
- Media queries to change page layouts on mobile & tablet
- Expanding page JSON structure to allow sending JavaScript & CSS as well as Markdown
- Add a backend api to deliver page content 
- Pre-load useful chunks such as syntax highlighting
- Write full JavaScript applications and games within a single request app
    






## A modern website in &lt;= 14Kb
This website loads in a single page request. In fact it loads in less than that. There are no external dependencies, no external images, no css files, no javascript files.. nothing. And what's crazy is that this is a fully responsive, modern, client side, JavaScript single page application that supports routing, a blog, Markdown page content.

And yes.. It's [open source via github](https://github.com/jaetask/minimal-14kb-website). 

### Why 14Kb?
If your asking this question then please read [Mobile Analysis in PageSpeed Insights](https://developers.google.com/speed/docs/insights/mobile)

### No really.. Why?
There are many reasons for this so I will try to list them out along with reference material.

* I want to question everything about the way we build JS apps
* [You dont need jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery)
* [You dont need underscore](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore)
* If an app is fast on mobile, you get fast desktop for free
* It's not mobile first.. It's now mobile only.
* Single request applications are very fast! I am seeing DomContentLoaded times arouns 20ms and Render complete around 50ms
* React is very trendy but It's 670Kb
* Angular is very trendy but its &gt; 500Kb
* I want to continuously improve this project to push the boundaries of whats possible in a modern browser.


```js\n console.log('hello'); \n```
