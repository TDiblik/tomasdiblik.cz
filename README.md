prerequisites: `bundle install` <br/>
development buidl: `bundle exec jekyll serve --livereload` <br/>
production build: `./publish.sh` (requires linux or WSL)

manual image compression (requires linux or WSL):

```
sudo apt update -y
sudo apt upgrade -y
sudo apt install -y libimage-exiftool-perl webp

IMG_NAME="example.png" && exiftool -all= $IMG_NAME && cwebp -q 80 -lossless -alpha_q 80 $IMG_NAME -o $IMG_NAME.webp`
```

<br/>

TODO:

- Blog post layout categories miss title (description)
- Ability to click on blog post image and have it "pop-up" - bigger, z-index max, background blured, ability to close
- Add content to blog page
- Take different pictures of myself, as those used are 2-3 years old.
- Go through all images and make them smaller in size (everything to a webp format?)
- Generate SEO metadata
- Customize 404 page with some kind of game/animation or anything interesting
  - Idea: Some kind of fun fact list about this website, for example: Publish date, Number of lines of code,...
- Add some kind of table of contents to every blog post
- Add a "reader mode" to blog post layout? - The idea is that current background is not best for reading, add some kind of button that strips most of the css away and makes it really comfortable to read the text.

Blog posts to write:

- Robot-Assisted Laser Plate Processing
- Multi-Device Monitor and Control System
- Luch Ordering and Management System
- Tank parameterization
- Main Gate alpr
- Medifinder - about the hackathonu and app - PR
- RouteMapper - about the hackathonu and app - PR
- Revision books
- Strava bruteforce default login
- Tutorial how to make rick-roll using github pages
- Blog post about STC - about my contributions, what I got from it,... - PR
- My 3d printing journey
- My experience teaching middle schoolers programming
