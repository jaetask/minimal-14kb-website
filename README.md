## Single Request Application - My CV

>   To deliver a fully responsive, modern, component based, multi page content, single page application in <= 14Kb gzipped.

When I started this project I thought I would be the only one thinking that even though frameworks like Angular and React are amazing.. They are incredibly heavy. I mean like +600Kb heavy. I have recently started to question the size of these projects, especially when I heard that some people are using react as the view within angular which has to be a 1Mb page weight before a single line of code has been typed.

> Give me all the toys.. 

There are many reasons for why a site in <= 14Kb but some of the main ones are

- Mobile network performance described in [High Performance Browser Networking](http://chimera.labs.oreilly.com/books/1230000000545) by [Ilya Grigorik](https://www.igvita.com/)
- Google's [Mobile Analysis in PageSpeed Insights](https://developers.google.com/speed/docs/insights/mobile)
 
 

All of which led me to the conclusion that the fastest possible app, must be one that is limited to a single HTTP round trip. This is currently around 16Kb (actually 14Kb when headers overhead removed). I mean, you literally cant get faster than an app that makes one round trip request and runs. Everything it needs, including css, javascript, images all compiled (in real time or not) into a single html bundle.

Plus, I really like the idea of a physical restriction, the app is determined by the ability of recent unix kernels to deliver 10 packets before waiting for an acknowledgement. This is the physical limit, the boundary.. Now I want to find out exactly hat is possible within that. 

# I am not the only one
I started thinking it would just be me, playing around with optimized or stripped down libraries just extracting what I need so it all compiled into 14Kb. But when I started looking around for modules to help and came across some really cool projects and people who are also thinking differently, not everyone wants to load 600Kb and start typing.


### Other communities
The interweb is full of people who do crazy things. Here are some of them.

- Javascript apps in 140 bytes: [140Bytes](https://github.com/jed/140bytes/wiki/Byte-saving-techniques)
> This is such a cool community, they try to solve common JS problems in a tweet. 

- Tetris: [Binary Tetris in 140 bytes](https://gist.github.com/aemkei/1672254)
> This is one of my favourite 140 bytes examples. So creative..
- Games: [JS 13K Games](http://js13kgames.com/)
> Incredibly fun website and competition to build the best game in 13Kb.

## So how am I going to do it?

Basically, I have realised that just starting is not always the best thing to do and that spending a few weeks with the following projects will really help. I've been on large scale projects before that failed because they started too quickly.  

### The Contenders..
I have been playing with all of the following libraries so that I can better evaluate the best way to write the application.


- Responsive: [PocketGrid](http://arnaudleray.github.io/pocketgrid/)
> What a project, it provides a fully responsive grid layout ability (mobile ready be default) and in just 300 bytes gzipped.

- Responsive: [Flex grid](http://caniuse.com/#search=flex)
> it may be more efficient not to use PocketGrid and to use the widely supported flex grid model. This may save 300 bytes on the library, see [This excellent example for details](https://philipwalton.github.io/solved-by-flexbox/demos/grids/) and [Css Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

- Routing: [Page JS](https://visionmedia.github.io/page.js/) The tagline reads 'Tiny ~1200 byte Express-inspired client-side router.' but its actually around 4Kb when minified and Gzipped. 
> This is a fantastic piece of coding, it does every possible thing you would want in a router and I would love to use it but I would strip out lots of ts features which means taking ownership. I would prefer a compiled approach to this module. I mean, how many people use more than one routing system in their application at a time?

- Components: [Domchanger](https://github.com/creationix/domchanger)
> This project really got me wondering why react was 600Kb. I mean, it does something very similar (without JSX) and it does it in 10Kb. Amazing but there are a few issues which might require my attention. During a look at it i found an article pointing me to [domvm](https://github.com/leeoniya/domvm), so I also looked at that.

- Components: [Domvm](https://github.com/leeoniya/domvm)
> Seriously impressive little application. Similar to [Domchanger](https://github.com/creationix/domchanger) but with a subtle shift or two.. Check out the [Demos](https://leeoniya.github.io/domvm/demos/).


- Components: [Inferno](https://github.com/trueadm/inferno)
> Seriously impressive and fast react style UI library, can handle isomorphic with an additional server component, but.. It's 8.1Kb which makes a huge dent in my budget. Its the fastest app apart from canvas in the [DbMonster](http://mathieuancelin.github.io/js-repaint-perfs/) challenge but its lacking documentation, It's JSX based _Can be used without JSX but all of the examples use it_. For these reasons I have decided to skip inferno.

- Immutability: [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)
> I have been learning about [ImmutableJS](https://facebook.github.io/immutable-js/docs/#/) and really like this way of thinking but it's 16Kb gzipped. Then I discovered a really good article on [Switching from immutable.js to seamless-immutable](http://tech.noredink.com/post/107617838018/switching-from-immutablejs-to-seamless-immutable). I haven't worked with this yet, I plan to get into that tomorrow but this library is just 1.6Kb gzipped which makes it a very good contender. 

- Markdown: [Marked](https://github.com/chjj/marked)
> I am considering only ever sending markdown to the browser when page content is required. There are a few markdown libraries but this one seams to be the fastest. Also, if this was a proper app with a web UI and admins editing content then markdown editors are very good at providing content consistency. The kind of content that can still be used after a reskin of the site. #bonus

- Bundling: [Webpack](https://webpack.github.io/)
> I have never used it in anger but reading up on [Single page modules with webpack](http://dontkry.com/posts/code/single-page-modules-with-webpack.html) and how to use the [CommonsChunk Plugin](http://jonathancreamer.com/advanced-webpack-part-1-the-commonschunk-plugin/) makes me realise that it might actually be quite easy to chunk up a SPA into single request pieces and load them into the browser as a user moves around the site (routes).
> _I know this is marked as bundling but the multi chunking capabilities might actually be the one thing that makes this whole concept work. I do have concerns about how to cleanup when switching one page for another._

- Event: [Smoke Signal](https://github.com/StephanHoyer/smoke-signal)
> I have used Bullet _1.6Kb gzipped_ in the past to allow inter module communication in the browser. This technique is very effective for keeping page components separate while still allowing module communication. I have just stumbled across another project that comes in at just _264 bytes gzipped_, it appears to have the same features as bullet and I can extend if I need multi channel eventing.

_Disclaimer: I haven't finished this project yet so this list is a work in progress_


# Ramp up JavaScript
There is no doubt that a couple of years contracting back in PHP has affected my JavaScript skills, abilities and sharpness. I am not happy about that and am currently taking time out to get back up to speed. This project will sharpen me but also I am

- Taking a Lifetime Access membership to [Eric Elliot's Online training](https://ericelliottjs.com/) 
> This course is actually amazing. The two hour lecture on ES6 was worth its weight in gold, every feature covered, in detail with examples of ES5 > ES6 along with a github repo for later analysis.

- Reading [the You dont know JS](http://www.amazon.co.uk/s/ref=nb_sb_noss_2?url=search-alias%3Dstripbooks&field-keywords=You+dont+know+JS) series by [Kyle Simpson](http://www.oreillynet.com/pub/au/4853)
> The force is strong with kyle. These books go into details unknown to mere mortals.

- Reading [Programming JavaScript Applications](http://shop.oreilly.com/product/0636920033141.do) by Eric Elliot
> Rather than highlighting syntax, Eric goes right into the inners of writing real applications in JavaScript. 





