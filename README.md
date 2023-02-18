prerequisites: `bundle install` <br/>
development buidl: `bundle exec jekyll serve --livereload` <br/>
production build:

```bash
  # Run everything from linux / wsl and from src dir

  sudo apt-get update -y
  sudo apt-get install -y build-essential
  sudo apt-get install -y ruby ruby-dev
  sudo gem install bundler

  sudo gem install image_optim
  sudo gem install image_optim_pack

  sudo apt-get install -y advancecomp gifsicle jhead jpegoptim libjpeg-progs optipng pngcrush pngquant

  rm _compress_images_cache.yml
  rm Gemfile.lock
  rm -rf _site/
  rm -rf .jekyll-cache/

  echo "First build, to build the site"
  bundle exec jekyll build --trace

  echo "Second build, to optimize the images (workaround)"
  mv _config.yml _config.dev.yml
  mv _config.production.yml _config.yml
  JEKYLL_ENV=production bundle exec jekyll build
  mv _config.yml _config.production.yml
  mv _config.dev.yml _config.yml
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
