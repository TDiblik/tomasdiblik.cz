#!/usr/bin/bash

# Dependencies needed
sudo apt update -y
sudo apt upgrade -y
sudo apt install -y build-essential
sudo apt install -y ruby ruby-dev
sudo apt install -y libimage-exiftool-perl webp imagemagick
sudo apt install -y imagemagick

sudo gem install bundler

# Remove generated files
rm ./src/Gemfile.lock
rm -rf ./src/_site/
rm -rf ./src/.jekyll-cache/

# Build site
cd src/
bundle clean --force
bundle install
JEKYLL_ENV=production bundle exec jekyll build
cd ..

# Compress blog images and cleanup generated files after
for d in $(find ./src/_site/pages/blog/ -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" -o -name "*.jpeg" -o -name "*.ico" \)) ; do
    echo "$d"
    exiftool -all= $d 
    convert -strip -interlace Plane -quality 80% $d $d
done
rm -rf ./src/_site/pages/blog/**/**/*.jpg_original
rm -rf ./src/_site/pages/blog/**/**/*.png_original
rm -rf ./src/_site/pages/blog/**/**/*.webp_original
rm -rf ./src/_site/pages/blog/**/**/*.jpeg_original
rm -rf ./src/_site/pages/blog/**/**/*.ico_original