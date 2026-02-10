---
title: Umbraco Simple Caching
date: 2016-11-24
draft: true
tags:
  - umbraco
  - cache
  - programming
aliases:
  - "/umbraco-simple-caching"
tldr:
  - "A $5/month Umbraco site on Azure had over 5 seconds TTFB."
  - "Adding a default controller with ASP caching dropped it to 25 milliseconds."
  - "Simple caching can yield dramatic performance gains with minimal effort."
---

I once looked into a pretty straightforward, very recent, website that took more than 5 seconds for the [TTFB](https://en.wikipedia.org/wiki/Time_To_First_Byte) from Azure. I created a default controller for Umbraco and set the ASP caching on: TTFB dropped to 25 m!
