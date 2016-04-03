## A living breathing CV
On the surface this looks like a very simple website, there's some content, a few links, a blog post etc.. it appears basic but under the hood there is something very different going on. 

### A modern website in &lt;= 14Kb
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
* React is very trendy but It's 670Kb
* Angular is very trendy but its &gt; 500Kb
* I want to continuously improve this project to push the boundaries of whats possible in a modern browser.


### what do you mean by 'Modern'?


### But it's static.. Websites need databases, and APIs and ..
Do they? really? Does your site really need a database? or have you assumed that all webapps need one. Are flat files faster? Yes, but they don't provide the same functionality as a database. You would be crazy to provide search over flat files (disk IO performance nightmare). But do you need search? can you live without it? This is where I am going with this site. 


### But it looks terrible
Yes it does. I am allowing 1Kb for css styling and positioning. If a designer would like to take on the challenge of making this look amazing with just 1Kb of css then they are more than welcome.


It really does