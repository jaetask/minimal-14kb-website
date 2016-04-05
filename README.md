## Single Request Application - My CV

>   To deliver a fully responsive, modern, component based, multi page content, single page application in <= 14Kb gzipped.

When I started this project I thought I would be the only one thinking that even though frameworks like Angular and React are amazing.. They are incredibly heavy. I mean like +600Kb heavy. I have recently really started to question the size of these projects, especially when I heard that some people are using react as the view in angular. That has to be a 1Mb page weight before you've even types a single line of code.

Insanity.. Give me all the toys.. 

There is also a very interesting performance based shift happening in google rankings. 

All of which led me to the conclusion that the fastest possible app, must be one that is limited to a single HTTP round trip. This is currently around 16Kb (actually 14Kb when headers overhead removed)
 
I mean, you literally cant get faster than an app that makes one round trip request and runs. Everything it needs, including css, javascript, images all compiled (in real time or not) into a single html bundle.

# I am not the only one
I started thinking it would just be me, playing around with optimized or stripped down libraries just extracting what I need so it all compiled into 14Kb. But when I started looking around for modules to help and came across some really cool projects. 

_Disclaimer: I haven't finished this project yet so this list is a work in progress_


Basically, I have realised that just starting is not always the best thing to do and that spending a few weeks with the following projects will really help. I've been on large scale projects before that failed because they started too quickly.  

- Responsive: [PocketGrid](http://arnaudleray.github.io/pocketgrid/)
> What a project, it provides a fully responsive grid layout ability (mobile ready be default) and in just 300 bytes gzipped.

- Routing: [Page JS](https://visionmedia.github.io/page.js/) The tagline reads 'Tiny ~1200 byte Express-inspired client-side router.' but its actually around 4Kb when minified and Gzipped. 
> This is a fantastic piece of coding, it does every possible thing you would want in a router and I would love to use it but I would strip out lots of ts features which means taking ownership. I would prefer a compiled approach to this module. I mean, how many people use more than one routing system in their application at a time?

- Components: [Domchanger](https://github.com/creationix/domchanger)
> This project really got me wondering why react was 600Kb. I mean, it does something very similar (without JSX) and it does it in 10Kb. Amazing but there are a few issues which might require my attention. During a look at it i found an article pointing me to [domvm](https://github.com/leeoniya/domvm), so I also looked at that.

- Components: [Domvm](https://github.com/leeoniya/domvm)
> Seriously impressive little application. Similar to [Domchanger](https://github.com/creationix/domchanger) but with a subtle shift or two.. Check out the [Demos](https://leeoniya.github.io/domvm/demos/).

- Markdown: [Marked](https://github.com/chjj/marked)
> I am considering only ever sending markdown to the browser when page content is required. There are a few markdown libraries but this one seams to be the fastest. Also, if this was a proper app with a web UI and admins editing content then markdown editors are very good at providing content consistency. The kind of content that can still be used after a reskin of the site. #bonus

- Bundling: [Webpack](https://webpack.github.io/)
> I have never used it in anger but reading up on [Single page modules with webpack](http://dontkry.com/posts/code/single-page-modules-with-webpack.html) and how to use the [CommonsChunk Plugin](http://jonathancreamer.com/advanced-webpack-part-1-the-commonschunk-plugin/) makes me realise that it might actually be quite easy to chunk up a SPA into single request pieces and load them into the browser as a user moves around the site (routes).
> _I know this is marked as bundling but the multi chunking capabilities might actually be the one thing that makes this whole concept work. I do have concerns about how to cleanup when switching one page for another._






