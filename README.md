My personal website. <br/>
Some people told me this looks like a template, please be assured that I've designed and programmed this from scratch :D (you can check git history). That being said, you're free to fork and use this, as long as you respect the project's license.

## Dev

rbenv: `rbenv install 3.4.6 && rbenv global 3.4.6 && gem install bundler`
prerequisites: `bundle install` <br/>
development buidl: `bundle exec jekyll serve --livereload` <br/>
prod build: `docker build -t tomasdiblik.cz . && docker run -p 80:20342 tomasdiblik.cz`

<br/>

TODO:

- Somehow somewhere add section where you can see my 3d models (https://modelviewer.dev/ ??)

Blog posts to write:

- Use and integrate with Micorosft Dataverse as SQL database -- Technical
- Clearing common misconceptions about Cloud / What is cloud from technical point of view? (Thanks to the marketing deparment, even a lot of IT people are confused about what cloud is, this article will explain cloud from the ground up from technical point of view)
- My 3d printing journey -- Personal
