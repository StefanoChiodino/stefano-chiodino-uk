---
date: 2022-04-19T12:56:20+01:00
template: post
category:
- photography
tags: []
title: Geotag photos with GPS coordinate from Google Maps location history
slug: geotag-photos-with-gps-coordinate-from-google-maps-location-history
draft: false

---
Do you want to add geotagging (latitude and longitude coordinates) to your photos?

This is particularly useful if you use DSLR or mirrorless cameras that often lack this feature.

All you need for this is to have location history enabled in google maps. This process will add a location to a photo based on where your phone reported you where when the photo was taken.

Go to your timeline and download each day you want to use using the cog at the bottom right [https://timeline.google.com/maps/timeline](https://timeline.google.com/maps/timeline "https://timeline.google.com/maps/timeline").  
  
Put the photos to tag and the KML activity files in the same folder, and for each run  
  
exiftool -overwrite_original -geotag act_ity_file.kml .  
  
See also_