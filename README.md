My personal website. <br/>
Some people told me this looks like a template, please be assured that I've designed and programmed this from scratch :D (you can check git history). That being said, you're free to fork and use this, as long as you respect the project's license.

## Dev

prerequisites: `bundle install` <br/>
development buidl: `bundle exec jekyll serve --livereload` <br/>
production build (requires linux or WSL):

```
sudo apt update -y
sudo apt upgrade -y
sudo apt install dos2unix

dos2unix publish.sh
sudo chmod +x publish.sh

sudo ./publish.sh
```

manual image compression (requires linux or WSL):

```
sudo apt update -y
sudo apt upgrade -y
sudo apt install -y libimage-exiftool-perl webp

IMG_NAME="example.png" && exiftool -all= $IMG_NAME && cwebp -q 80 -lossless -alpha_q 80 $IMG_NAME -o $IMG_NAME.webp
```

<br/>

TODO:

- Add content to blog page
- Take different pictures of myself, as those used are 2-3 years old.
- On the 404 page, make my face spin, instead of Butercup's (placeholder). Also, replace Mickey Mouse's face and replace it with mine as well. + strip and compress those images heavily, fast download speed is crusial for this effect to work correctlly.

Blog posts to write:

- Robot-Assisted Laser Plate Processing -- PR - showcase program working
- Multi-Device Monitor and Control System -- PR - showcase program working
- Luch Ordering and Management System -- PR - showcase program working
- Tank parameterization -- PR - showcase program working
- Main Gate alpr -- PR - showcase program working
- Medifinder -- PR - about the hackathonu and app
- RouteMapper -- PR - about the hackathonu and app
- Revision books -- PR - showcase program working
- Blog post about STC - about my contributions, what I got from it,... - PR
- Strava bruteforce default login -- Technical
- Tutorial how to make rick-roll using github pages -- Tutorial
- My 3d printing journey -- Personal
- My experience teaching middle schoolers programming -- Personal
