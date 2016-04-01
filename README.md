# A modern website in &lt;= 14Kb

Ok, I've been learning react and all that shizzle recently and am starting to question the recent rise in the size of JS code bases. With React coming in at 670Kb just for the "View" in MVC, and with some people including this into an angular application which itself is &gt; 500Kb, its all starting to look like insanity to me.
 
I've attended velocity conference which goes right into the heart of building web apps at the HTTP level, and read the excellent [High Performance Browser Networking](http://shop.oreilly.com/product/0636920028048.do) by [Ilya Grigorik](https://www.igvita.com) and can see that the push towards larger JS apps is failing on so many levels. I am trying to go in the other direction. I want to see what is possible, starting from the network level and then making decisions about not just what _can_ be done but what _should_ be done.
 
I am blatantly going to steal some of the concepts that [Patrick Hamann](https://twitter.com/patrickhamann) introduced when the Guardian switched to a &lt;1 second delivery on mobile, all of which are viewable in the [video](https://www.youtube.com/watch?v=dfweWyVScaI). Thank you Patrick for a very impressive talk and also for making me rethink the way we write and deliver applications.

## Why 14Kb?
If your asking this question then please read [Mobile Analysis in PageSpeed Insights](https://developers.google.com/speed/docs/insights/mobile)

## No really.. Why?
Why not? Experimentation is good, rewarding and fun. I really need a new website.. the current one sucks, it literally doesn't represent anything that I have learned in the last 3 years.
 
But this isnt just an experiment.. I really want to question everything, even the need for jQuery, underscore etc. Do we really need them? Whats possible without? I plan to push this to the limits, over and over again, to see what is possible in a single (round trip) HTTP request. This will be an ongoing labour of love kind of project.   

## Goals

- Website in <= 14Kb
- 1 Request = 1 Page
- 1 Request = 14Kb total.
- Must be responsive, look good on mobile, tablet and desktop
    - please don't expect me to define 'good'.. I'm a terrible web designer :)
- May compile using babel, ES6 abilities etc
- HTTP 1.1/2.0 compatible
- Can load additional pages via ajax but only in <= 14K max chunks
    - Chunks loaded via API, build failure if chunk >14Kb
- Must be a public github repo with full history available (no rebasing)
- Must only support modern browsers..
    - MS don't support IE6/7/8/9 so why should I?
- SVG images where possible, preferably inline.
    - do I even need images? [See this video](https://www.youtube.com/watch?v=JSaMl2OKjfQ)
- Must be fully unit tested
- Can use JS templating if required, i.e. responding to new pages via ajax JSON response but templates MUST be compiled in build process. Never send a templating engine to the browser.
- Must be built by CI, Jenkins, Travis etc
- Must be a deployable docker image
- Must be load balanced in at least two docker images
- May/May not use Grunt|Gulp
  
## Initial load
The aim is to load the entire app in a single http request. That means inline SVG, JS and CSS. YES, inline! just lol to that but super fast.

### Inline Pros
- JS code would always be loaded and available in a specific order
- No need for requireJS, e.g. I could still use modular approach and pass in a pubsub module into the modules to allow for inter module communication. 
- No separate http request
- No issue with cached JS, so no need for cache busting build system (unique filenames etc)

### Inline cons
- HTML page weight increased
- Much easier to break the > 14Kb build rule
- With a separate JS file my network ability is effectively doubled to 28Kb. 14Kb html and 14Kb JS. _But isn't that cheating?_     

# Every Kb counts
When you only have 14 of them, this becomes even more important. It is my personal belief that developers have forgotten the value of a Kb. Especially when transmitted over a bad 3G connection, 50Kb can kill a user experience.

# Browser only
Please do not add comments on this project like _use react and go 'native'_ The internet gods will smite your breakfast..

# Questions and definitions

# Gzipping

By gzip compressing the static file, I will get extra bytes to play with in development. The amount of compression depends on the gzip compression level and I have found that at these small file sizes, there is only 61 bytes different between levels 6 and 9.

For this reason, I have decided to go with gzip level 6 _(which balances speed and optimisation)_ 

**Calculating developer bytes pre gzip compression**

- I know that I must not exceed 14Kb in my HTTP request. 
- I know that I am using gzip compression level 6

So my question is. _How many bytes compresses into a 14Kb gzipped file?_

Assuming that _14Kb is actually 14336 bytes_, The answer comes from chunking a suitable source file _(Thanks jquery)_ into an exact size, then gzipping that file and checking if it matches exactly 14336 bytes. After a few attempts we end up with this command and the magical number of **42960 bytes**.

    rm x* && split -b 42960 jquery-1.12.2.js && gzip -6 xaa && stat -f%z xaa.gz

This table shows the number of raw bytes passing through gzip level 6 to get our 14Kb output file.

|Raw    | Level | Output | 
|-------|------------|------|
| 42960 |6| 14336|

## Responsive CSS Layouts
I have chosen the excellent [PocketGrid](http://arnaudleray.github.io/pocketgrid/) library which gives responsive grid ability at just 500 bytes. I will add a CSS pre processor that minifies all of the css together into a single text block and injects it into the index.html template.

## Build process

### Compiling into a single static html file
For the moment, I plan to compile the entire application into a single html file that when gzipped is &lt;= 14kb. I have yet to decide on the best way to compile into a single file. Considering this is a very simple project, I think that webpack is overkill, although I may be wrong about this and reverse the decision later. Its important to remember it doesnt matter what is used behind the scenes as long as the end product is tight.

**What is needed?**
- compile and optimize SVG image(s) into page
- concat &amp; minify CSS into a single text block
- concat &amp; minify JS into a single text block
- inject CSS code block into page header
- inject JS code block into page footer

**Do I need NPM?**
Maybe.. I dont see the project needing many components, so keeping them up to date as a manual process might be better.. who knows.. 

### Building the docker file
I am going to assume you are already familiar with docker so should be comfortable running this command.

    docker build -t <username>/website
   
    docker push <username>/website    

This will create a docker image that can be hosted wherever you normally do that.


 