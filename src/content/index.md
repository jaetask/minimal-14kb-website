## Single Request Application - My CV

>   To deliver a fully responsive, modern, component based, multi page content, single page application in <= 14Kb gzipped.

When I started this project I thought I would be the only one thinking that even though frameworks like Angular and React are amazing.. They are incredibly heavy. I mean like +600Kb heavy. I have recently really started to question the size of these projects, especially when I heard that some people are using react as the view in angular. That has to be a 1Mb page weight before you've even types a single line of code.

Insanity.. Give me all the toys.. 

There is also a very interesting performance based shift happening in google rankings. 

All of which led me to the conclusion that the fastest possible app, must be one that is limited to a single HTTP round trip. This is currently around 16Kb (actually 14Kb when headers overhead removed)
 
I mean, you literally cant get faster than an app that makes one round trip request and runs. Everything it needs, including css, javascript, images all compiled (in real time or not) into a single html bundle.

# I am not the only one
I started thinking it would just be me, playing around with optimized or stripped down libraries just extracting what I need so it all compiled into 14Kb. But they I started looking around for modules to help and came across some really cool projects. 

_Disclaimer: I haven't finished this project yet so this list is a work in progress_






 