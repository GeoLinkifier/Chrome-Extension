# Chrome Extension: GeoLinkifier - A Google Earth Hyperlink Generator

This Chrome extension scans web pages for location names and generates Google Earth hyperlinks for a quick virtual tour.

## Motivation

I often find myself reading an online article that mentions a place I'm not familiar with, and I embark on a virtual tour via Google Earth. This requires highlighting the place's name, copying it, opening Google Earth, and pasting it in the search box. It seemed like redundant work for something so simple, so I decided that a Chrome extension to do that for me was needed.

I'm not a JavaScript developer, so I used ChatGPT-4 to help me get started. It took more than a few iterations, but it seems to work fine now without any noticeable performance impact on page loads.

## Version 0.1

This is essentially the code that ChatGPT generated, with a lot of guidance and some minor tweaks. I'm sure this can be significantly improved. This first version only searches for names of cities with a population of over 10,000 and disregards states and countries, although these are included in the `dataSet.js` file. Ambiguity in city names is not handled and is left up to Google Earth's search algorithm to decide.

## Contribution

All JavaScript developers are welcome to contribute to this repo and make this handy little utility better and faster. Let's see where it goes!
