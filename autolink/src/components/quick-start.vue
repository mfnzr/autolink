<script setup>
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from "@cloudinary/vue";
import { fill } from "@cloudinary/url-gen/actions/resize";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});
// Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
const myImg = cld.image('docs/models');

// Resize to 250 x 250 pixels using the 'fill' crop mode.
myImg.resize(fill().width(250).height(250));
</script>

<template>
    <div>
      <AdvancedImage :cldImg="myImg" />
    </div>
  </template>