My personal website. <br/>
Some people told me this looks like a template, please be assured that I've designed and programmed this from scratch :D (you can check git history). That being said, you're free to fork and use this, as long as you respect the project's license.

## Dev

prerequisites: `bundle install` <br/>
development buidl: `bundle exec jekyll serve --livereload` <br/>
production build (requires debian-based linux or WSL):

```
sudo apt update -y
sudo apt upgrade -y
sudo apt install dos2unix

dos2unix publish.sh
sudo chmod +x publish.sh

sudo ./publish.sh
```

manual image compression (requires debian-based linux or WSL):

```
sudo apt update -y
sudo apt upgrade -y
sudo apt install -y libimage-exiftool-perl webp

IMG_NAME="example.png" && exiftool -all= $IMG_NAME && cwebp -q 80 -lossless -alpha_q 80 $IMG_NAME -o $IMG_NAME.webp
```

<br/>

TODO:

- Take different pictures of myself, as those used are 2-3 years old.
- On the 404 page, make my face spin, instead of Butercup's (placeholder). Also, replace Mickey Mouse's face and replace it with mine as well. + strip and compress those images heavily, fast download speed is crusial for this effect to work correctlly.
- On the 404 page, browser tries to load the background every time the image spins, causing performance issues. Fix it.
- Somehow somewhere add section where you can see my 3d models (https://modelviewer.dev/ ??)

Blog posts to write:

- Tutorial how to make rick-roll using github pages -- Tutorial
- Clearing common misconceptions about Cloud / What is cloud from technical point of view? (Thanks to the marketing deparment, even a lot of IT people are confused about what cloud is, this article will explain cloud from the ground up from technical point of view)
- My 3d printing journey -- Personal
- My experience teaching middle schoolers programming -- Personal
