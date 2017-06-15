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

**Pages**
Each individual page will be located inside the folder with its corresponding name.

**Work**
Projects can be found inside the **work/_posts** directory. They get sorted by date, so the first project is set to 2000-01-01 with each newer project being a day newer. So the newest projects will have the most recent date. DO NOT use the current date as the date for the project, simply follow the pattern that is already created.

**Blog**
All blog posts are located inside the **blog/_posts** directory. For these, use the date of the day you would like the blog to get posted.

**Images**
All of the original images are located inside *unsized-img*, the reason for this is because there is a command that we run which will automatically resize images for different screen sizes and then place those images inside the *img* directory. So keep all of your original clean images inside the *unsized-img* directory. Typically these images should be around 1800px in width or height. They'll be optimized later so don't worry too much about that!

## Usage

**Step One**
Make sure any images you need are inside the *unsized-img* folder and then run `gulp resize`. This is resize all the images and place them into the *img* folder. This may take a few minutes, so wait until it completes before doing anything else.

**Step Two**
Run `gulp min` which will optimize all of the images in the *img* folder. Once again, this will take a while.

**Step Three**
You can now run `gulp` which will automatically run jekyll, open your site in the browser with auto-refresh, and watch for any file changes. When you are done making all of your changes, hit ctrl+c to cancel running gulp. (If you add any new images, you will need to rerun steps one and two)

**Step Four**
Once all of your changes are made, run `gulp compress` to minify the javascript files.

**Step Five**
Push changes to GitHub and upload new files to site.

**jekyll**

As this is just a Jekyll project, you can use any of the commands listed in their [docs](http://jekyllrb.com/docs/usage/)
