# Insight Website - 2017 Edition

## System Preparation

To use this starter project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)
4. [GraphicsMagick](http://www.graphicsmagick.org/download.html) - this is needed to run gulp-resize

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `npm install`.

## File Structure

Before running any commands, lets understand the file directories.

### Pages
Each individual page will be located inside the folder with its corresponding name.

### Work
Projects can be found inside the **work/_posts** directory. They get sorted by date, so the first project is set to 2000-01-01 with each newer project being a day newer. So the newest projects will have the most recent date. DO NOT use the current date as the date for the project, simply follow the pattern that is already created. *Note: If two projects have the same date they will be shown in alphabetical order, meaning the project closer to A will be shown further down than the latter*

### Blog
All blog posts are located inside the **blog/_posts** directory. For these, use the date of the day you would like the blog to get posted.

### Images
All of the original images are located inside **unsized-img**, the reason for this is because there is a command that we run which will automatically resize images for different screen sizes and then place those images inside the **img** directory. So keep all of your original clean images inside the **unsized-img** directory. Typically these images should be around 2400px in width. They'll be optimized later so don't worry too much about that!

### Data
Both the employee list and the services list can both be found under the **_data** directory.

### Site
The **_site** directory is the compiled directory with all of the final files. The contents of this folder is what will be uploaded to the actual website.

### Styles
Do not make style changes in the **css** directory. The styles for the website are all in the **_scss** directory. Each individual page has had its own style sheet setup for styles unique to that page, and then there are sheets setup for general styling like the footer or typography. The **_variables.scss** sheet has site wide variables that can be used in your scss sheets.

## Usage

### 1. Resizing Images

**Make sure any images you need are inside the *unsized-img* folder** and then run `gulp resize`. This will resize all the images and place them into the **img** folder. This may take a few minutes, so wait until it completes before doing anything else.

```shell
gulp resize
```

### 2. Optimizing Images

Run `gulp min` which will optimize all of the images in the **img** folder. Once again, this will take a while.

```shell
gulp min
```

### 3. Live Editing

You can now run `gulp` which will automatically run jekyll, open your site in the browser with auto-refresh, and watch for any file changes. When you are done making all of your changes, hit ctrl+c to cancel running gulp. (If you add any new images, you will need to rerun steps one and two)

```shell
gulp
```

### 4. Compress Script Files

Once all of your changes are made, run `gulp compress` to minify the javascript files.

```shell
gulp compress
```

### 5. Push to GitHub and FTP

Push changes to GitHub and upload new files to site.


## Adding a Blog Post

A blog post will have the following information at the top of the development file:

```html
layout: blog
title: Media Buying 101 - What On Earth Does a Media Buyer Do?
author: Molly Setzer
description: "Molly Setzer, Senior Media Buyer at Insight Creative, explains the role of a media buyer, how they can support your company's marketing efforts and how they help you get the most out of your marketing budget."
text-color: 'fff'
back-color: 'b31139'
cover-image: th-molly-vlog-media-buying.jpg
tag: blog
```

**Title:** The title of the blog post, duh!

**Author:** The name of the author, make sure this is spelt right so it can pull their information from the staff file.

**Description:** Sets up the meta description tag.

**Text-color:** This will set the color of the text for when the blog appears on the blog page, or at the bottom of another blog post.
 In most cases, it will be fff which is white. DO NOT use the # in these.

**Back-color:** This will be the background color for when the blog appears on the blog page, or at the bottom of another blog post. Typically, you want to use a color that either coincides with the blog post's imagery or theme.

**Cover-image:** Sets the featured image for the blog post.

*The layout and tag will both always remain blog*

### Images

Each image should be named the same as the blog and then numbered sequentially and placed in the **unsized-img** directory followed by the **blog** directory.

When adding an image, do not use the markdown image treatment, instead, add an image using html srcset like below. Set the src as the original image name, then set up a srcset image with the image size following the name like below. All images get resized for screen sizes of 400px, 600px, 900px, 1200px, 1800px and 2400px wide. *Note: when writing srcset, start with the largest image as Safari only looks at the first image.*

Images should also have this line of code in their tag, which will give them an animation when scrolling: `data-aos="fade-up"`

```html
<img data-aos="fade-up" src="/img/culture/header-1.jpg" alt="We Rock"
srcset="/img/culture/header-1-2400.jpg 2400w,
        /img/culture/header-1-1800.jpg 1800w,
        /img/culture/header-1-1200.jpg 1200w,
        /img/culture/header-1-900.jpg 900w,
        /img/culture/header-1-600.jpg 600w,
        /img/culture/header-1-400.jpg 400w"/>
```

## Adding a project

A project will have the following information at the top of the development file:

```html
layout: project
title: Logo Design
client: Bake My Day
description: Logo design created for local Green Bay bakery.
cover-image: bake-my-day/bake-my-day-logo-1
cover-text-color: fff
back-color1: c3dc93
back-color2: f282d4
tags:
- Identity
- Branding
- Print
```

**Title:** The title of the project, duh!

**Client:** The client the work was done for.

**Description:** One ore two short sentences introducing the project. This is the text that is directly under the cover image for the project and above the body text.

**Cover-image:** Sets the featured image for the blog post.

**Cover-text-color:** The header text color for the project. This displays over the thumbnails that link to the project and over the cover image. Try to keep this white as often as possible.

**Back-color1:** The first color in the background gradient for the project. The background gradient is shown over the cover image and when you hover over the thumbnails linking to the project. Try to keep the gradient colors relevant to the project.

**Back-color2:** Second color in the background gradient.

**Tags:** The list of categories the project falls under. List any that are relevant to the project, these include:
- Audio Ads
- Campaigns
- Case Studies
- Identity
- Media Buying
- Packaging
- Photography
- Print
- Public Relations
- Social Media
- Video
- Web/Digital

*The layout will always remain project*

### Images

The images for a project should go in the **unsized-img** directory, followed by the **projects** folder, and then inside a directory with the exact same name as the project. Each image should be named the same as the project and then given a name relative to what its showing. Look at previous projects for example.

When adding an image, do not use the markdown image treatment, instead, add an image using html srcset like below. Set the src as the original image name, then set up a srcset image with the image size following the name like below. All images get resized for screen sizes of 400px, 600px, 900px, 1200px, 1800px and 2400px wide.

Images should also have this line of code in their tag, which will give them an animation when scrolling: `data-aos="fade-up"`. If there is more than one image in a single row on the page, add `data-aos-delay="200"` starting at 200 for the second image and if theirs a third image `data-aos-delay="400"`. This will offset their animations so they don't all fade in at the same time.

If you want the image to pop up in light box when clicked, add `data-featherlight="path/to/image"`. These need to be within a `<div class="images">` element in order to work.

```html
<img data-aos="fade-up" data-featherlight="/img/projects/vans-lumber-photography/vans-photography5.jpg" src="/img/projects/vans-lumber-photography/vans-photography5.jpg"
alt="Vans Photography"
srcset="/img/projects/vans-lumber-photography/vans-photography5-2400.jpg 2400w,
/img/projects/vans-lumber-photography/vans-photography5-1800.jpg 1800w,
/img/projects/vans-lumber-photography/vans-photography5-1200.jpg 1200w,
/img/projects/vans-lumber-photography/vans-photography5-900.jpg 900w,
/img/projects/vans-lumber-photography/vans-photography5-600.jpg 600w,
/img/projects/vans-lumber-photography/vans-photography5-400.jpg 400w" />
```

### Image Styling

There are a few special ways setup to showcase the images in a project.

#### Object Fit Pollyfill

There is a special class you need to apply to images that use the object-fit property. These are images that you display in the grid setup on a project, and any other designated object-fit images. Simply apply the `fix` class to them  and the ofi.min.js will setup a polyfill for browsers that don't natively support object-fit.

#### Grid Setup

This setup makes the images display in rows cropped to the same height. There are four classes setup for this style that let the image be display either full column, half column, two-thirds column, or one-third column. Also, if the image isn't going to be full column, it needs to have the class first if its the first image in the row or last if its the last image in the row.

```html
<div class="images">

  <img class="half first" data-aos="fade-up" data-featherlight="/img/projects/vans-lumber-photography/vans-photography5.jpg" src="/img/projects/vans-lumber-photography/vans-photography5.jpg"
  alt="Vans Photography"
  srcset="/img/projects/vans-lumber-photography/vans-photography5-2400.jpg 2400w,
  /img/projects/vans-lumber-photography/vans-photography5-1800.jpg 1800w,
  /img/projects/vans-lumber-photography/vans-photography5-1200.jpg 1200w,
  /img/projects/vans-lumber-photography/vans-photography5-900.jpg 900w,
  /img/projects/vans-lumber-photography/vans-photography5-600.jpg 600w,
  /img/projects/vans-lumber-photography/vans-photography5-400.jpg 400w" />

  <img class="half last" data-aos="fade-up" data-aos-delay="200" data-featherlight="/img/projects/vans-lumber-photography/vans-photography6.jpg" src="/img/projects/vans-lumber-photography/vans-photography6.jpg"
  alt="Vans Photography"
  srcset="/img/projects/vans-lumber-photography/vans-photography6-2400.jpg 2400w,
  /img/projects/vans-lumber-photography/vans-photography6-1800.jpg 1800w,
  /img/projects/vans-lumber-photography/vans-photography6-1200.jpg 1200w,
  /img/projects/vans-lumber-photography/vans-photography6-900.jpg 900w,
  /img/projects/vans-lumber-photography/vans-photography6-600.jpg 600w,
  /img/projects/vans-lumber-photography/vans-photography6-400.jpg 400w" />

  <img class="third first" data-aos="fade-up" data-featherlight="/img/projects/vans-lumber-photography/vans-photography7.jpg" src="/img/projects/vans-lumber-photography/vans-photography7.jpg"
  alt="Vans Photography"
  srcset="/img/projects/vans-lumber-photography/vans-photography7-2400.jpg 2400w,
  /img/projects/vans-lumber-photography/vans-photography7-1800.jpg 1800w,
  /img/projects/vans-lumber-photography/vans-photography7-1200.jpg 1200w,
  /img/projects/vans-lumber-photography/vans-photography7-900.jpg 900w,
  /img/projects/vans-lumber-photography/vans-photography7-600.jpg 600w,
  /img/projects/vans-lumber-photography/vans-photography7-400.jpg 400w" />

  <img class="third" data-aos="fade-up" data-aos-delay="200" data-featherlight="/img/projects/vans-lumber-photography/vans-photography8.jpg" src="/img/projects/vans-lumber-photography/vans-photography8.jpg"
  alt="Vans Photography"
  srcset="/img/projects/vans-lumber-photography/vans-photography8-2400.jpg 2400w,
  /img/projects/vans-lumber-photography/vans-photography8-1800.jpg 1800w,
  /img/projects/vans-lumber-photography/vans-photography8-1200.jpg 1200w,
  /img/projects/vans-lumber-photography/vans-photography8-900.jpg 900w,
  /img/projects/vans-lumber-photography/vans-photography8-600.jpg 600w,
  /img/projects/vans-lumber-photography/vans-photography8-400.jpg 400w" />

  <img class="third last" data-aos="fade-up" data-aos-delay="400" data-featherlight="/img/projects/vans-lumber-photography/vans-photography9.jpg" src="/img/projects/vans-lumber-photography/vans-photography9.jpg"
  alt="Vans Photography"
  srcset="/img/projects/vans-lumber-photography/vans-photography9-2400.jpg 2400w,
  /img/projects/vans-lumber-photography/vans-photography9-1800.jpg 1800w,
  /img/projects/vans-lumber-photography/vans-photography9-1200.jpg 1200w,
  /img/projects/vans-lumber-photography/vans-photography9-900.jpg 900w,
  /img/projects/vans-lumber-photography/vans-photography9-600.jpg 600w,
  /img/projects/vans-lumber-photography/vans-photography9-400.jpg 400w" />


  <img class="full" data-aos="fade-up" data-featherlight="/img/projects/vans-lumber-photography/vans-photography10.jpg" src="/img/projects/vans-lumber-photography/vans-photography10.jpg"
  alt="Vans Photography"
  srcset="/img/projects/vans-lumber-photography/vans-photography10-2400.jpg 2400w,
  /img/projects/vans-lumber-photography/vans-photography10-1800.jpg 1800w,
  /img/projects/vans-lumber-photography/vans-photography10-1200.jpg 1200w,
  /img/projects/vans-lumber-photography/vans-photography10-900.jpg 900w,
  /img/projects/vans-lumber-photography/vans-photography10-600.jpg 600w,
  /img/projects/vans-lumber-photography/vans-photography10-400.jpg 400w" />

</div>
```

#### Long Vertical Image (typically website)

When you have a very tall image that will need some scrolling and you don't want it to be cropped, place it in a `<div class="fill-back">` element. This will place the image in a padded element with a light gray background. It helps it stick out from the rest of the page and look cleaner rather than just having it on the plain white background.

```html
<div class="images">
  <div class="fill-back">
    <img data-aos="fade-up" data-featherlight="/img/projects/sas-forks-website/sas-forks-website-2.jpg"
    alt="SAS Forks Website" src="/img/projects/sas-forks-website/sas-forks-website-2.jpg"
    srcset="/img/projects/sas-forks-website/sas-forks-website-2-2400.jpg 2400w,
    /img/projects/sas-forks-website/sas-forks-website-2-1800.jpg 1800w,
    /img/projects/sas-forks-website/sas-forks-website-2-1200.jpg 1200w,
    /img/projects/sas-forks-website/sas-forks-website-2-900.jpg 900w,
    /img/projects/sas-forks-website/sas-forks-website-2-600.jpg 600w,
    /img/projects/sas-forks-website/sas-forks-website-2-400.jpg 400w" />
  </div>
</div>

```

#### Full Width Standard Image

Simply wrap the image inside two blank div tags (this is done because otherwise markup places it inside paragraph tags, which limits the width of the image to the width of the paragraph)

```html
<div>
  <img data-aos="fade-up" src="/img/projects/vans-lumber-case-study/vans-lumber-case-study-binder.jpg"
  alt="Vans Lumber Binder"
  srcset="/img/projects/vans-lumber-case-study/vans-lumber-case-study-binder-2400.jpg 2400w,
  /img/projects/vans-lumber-case-study/vans-lumber-case-study-binder-1800.jpg 1800w,
  /img/projects/vans-lumber-case-study/vans-lumber-case-study-binder-1200.jpg 1200w,
  /img/projects/vans-lumber-case-study/vans-lumber-case-study-binder-900.jpg 900w,
  /img/projects/vans-lumber-case-study/vans-lumber-case-study-binder-600.jpg 600w,
  /img/projects/vans-lumber-case-study/vans-lumber-case-study-binder-400.jpg 400w" />
</div>
```

## Employees

The list of employees and their information and styling can be found under the *_data* directory in the *staff.yml* file.

```
- name: Jim von Hoff
  job_title: President
  bio: "As founder of the agency, Jim has overseen the growth and success of Insight since 1988. His client-centered approach and thorough study of clients and their industries set the stage for Insight’s long relationships with a diverse list of established clients including retail, consumer and business-to-business. A UW-Green Bay graduate, Jim’s desire to offer comprehensive marketing communications capabilities makes him—and Insight—unique in our area."
  color: red
  image1: /img/employees/tyler/tyler-1.png
  image2: /img/employees/tyler/tyler-2.png
  image3: /img/employees/tyler/tyler-3.png
```

**Name:** Employee name

**Job_title:** The position of the employee

**Bio:** The employees bio

**Color:** The color theme to use for that employees display. These are defined in the *_culture.scss* style sheet.

**image1:** The default and first image that shows for that employee. This is followed by the second and third when hovering.
