## System Preparation

To use this starter project, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `npm install`.

## File Structure

Before running any commands, lets understand how the file directories.

### Pages
Each individual page will be located inside the folder with its corresponding name.

### Work
Projects can be found inside the **work/_posts** directory. They get sorted by date, so the first project is set to 2000-01-01 with each newer project being a day newer. So the newest projects will have the most recent date. DO NOT use the current date as the date for the project, simply follow the pattern that is already created.

### Blog
All blog posts are located inside the **blog/_posts** directory. For these, use the date of the day you would like the blog to get posted.

### Images
All of the original images are located inside *unsized-img*, the reason for this is because there is a command that we run which will automatically resize images for different screen sizes and then place those images inside the *img* directory. So keep all of your original clean images inside the *unsized-img* directory. Typically these images should be around 1800px in width or height. They'll be optimized later so don't worry too much about that!

## Usage

### Step One

Make sure any images you need are inside the *unsized-img* folder and then run `gulp resize`. This is resize all the images and place them into the *img* folder. This may take a few minutes, so wait until it completes before doing anything else.

```shell
gulp resize
```

### Step Two

Run `gulp min` which will optimize all of the images in the *img* folder. Once again, this will take a while.

```shell
gulp min
```

### Step Three

You can now run `gulp` which will automatically run jekyll, open your site in the browser with auto-refresh, and watch for any file changes. When you are done making all of your changes, hit ctrl+c to cancel running gulp. (If you add any new images, you will need to rerun steps one and two)

```shell
gulp
```

### Step Four

Once all of your changes are made, run `gulp compress` to minify the javascript files.

```shell
gulp compress
```

### Step Five

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

When adding an image, do not use the markdown image treatment, instead, add an image using html srcset like below.

```html
<img src="/img/logo-slider/vans-photography-feature.jpg" alt="Photography for Vans Lumber"
srcset="/img/logo-slider/vans-photography-feature-900.jpg 400w,
              /img/logo-slider/vans-photography-feature-1200.jpg 600w,
              /img/logo-slider/vans-photography-feature-1800.jpg 900w,
              /img/logo-slider/vans-photography-feature-2400.jpg 1200w" />
```
