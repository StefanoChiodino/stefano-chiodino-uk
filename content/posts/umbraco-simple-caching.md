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
---
I once looked into a pretty straightforward, very recent, website that took more than 5 seconds for the [TTFB](https://en.wikipedia.org/wiki/Time_To_First_Byte) from Azure. I created a default controller for Umbraco and set the ASP caching on: TTFB dropped to 25 m!
