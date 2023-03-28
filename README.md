# Chrome-Extension
This chrome extension scans web pages for location names and generates a Google Earth hyperlink

I often find myself reading an online article that mentions a place I'm not familiar with, and embark on a virtual tour via Google Earth.
This involves highlighting the place's name, copying it, opening Google Earth and pasting it in the search box.
It seemed redundant work for something so simple, so I decided that a chrome extension to do that for me is needed.

I'm not a Javascript programmer so I used ChatGPT4 to help me get started.
It took more than a few iterations but it seems to work fine now with no noticable performance impact on page loads.

V 0.1
-----
This is essentially the code that ChatGPT generated, with a LOT of guidance, and some minor tweaks.
I'm sure this can be significantly improved.
This first version only searches for names of cities with >10,000 population and disregards states and countries, although they are included in the dataSet.js file. Ambiguity in city names is not handled and left up to Google Earth search algorithm decision.

All Javascript developers are welcome to contribute to this repo and make this handy little utility better and faster.
Let's see where it goes...
