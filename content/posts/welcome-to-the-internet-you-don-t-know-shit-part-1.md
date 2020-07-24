---
template: post
date: 2016-11-25T17:59:24+00:00
description: What happens if the CSS background-image URL is empty?
draft: false
slug: welcome-to-the-internet-you-don-t-know-shit-part-1
tags: 
  - CMS
title: "Welcome to the Internet: You Don't Know Shit, Part 1"

---
I was investigating if my controller was handling correctly post requests, when I noticed that it was being called twice.

A quick look at the dev tools network panel showed there were indeed 2 requests, but the response size was different, and the second response preview was empty. According to Chrome the initiator of the request was some javascript at the bottom of the body.

Baffled, I called the front end developer over, but we quickly proved that it wasn't due to any javascript. The request was fired with javascript disabled, but now the initiator was `index.html:infinity`, infinity being the line of code where that happened. On my simpler example it actually shows the very last line of the html.

## When everything else fails: old style debugging

So....we started taking elements off the page, until it stopped.

Turns out that `style="background-image: url('');"` it's interpreted as "the URL of the background image is an empty string, relative to the current URL".

You can double check this by opening your tools and going to {{< exLink "this example" "/example/empty-background-image-url.html" >}}.

{{< figure title="Initiator with javascript" src="/images/initiator-with-js.png" >}}
{{< figure title="Initiator without javascript" src="/images/initiator-without-js.png" >}}

What happened is that I don't enforce uploading images in the CMS, but if none is selected the URL is just null or empty. Writing `style="background-image: url('@(Model.Image?.Url)');"` is incorrect, the rule should not be in the style attribute if the URL is blank.

The solution is to write a variable for the content of the style attribute, something like:

{{< highlight csharp >}}
var imageUrl = Model.Image?.Url;
var style = imageUrl == null
    : string.Empty
    ? $"background-image: url('{imageUrl}');"
{{< / highlight >}}

## Reference
https://bugzilla.mozilla.org/show_bug.cgi?id=473528