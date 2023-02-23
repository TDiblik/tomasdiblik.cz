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
