#!/usr/bin/env bash

# Use the Unofficial Bash Strict Mode
# @see http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -euo pipefail

INPUT=$1
OUTDIR="public/videos/"

if [ -z "$INPUT" ]; then
  echo "No file specified"
  exit 1
fi
if [ ! -f "$INPUT" ]; then
  echo "Input is not a file: $INPUT"
  exit 1
fi

echo "$INPUT"

FILENAME=$(basename -- "$INPUT")
FILENAME="${FILENAME%.*}"

mkdir -p "$OUTDIR"

OUTFILE_NO_EXT="$OUTDIR$FILENAME"

date -u

# make mp4 file
#
# * -an = disable audio stream
# * -pix_fmt yuv420p = quicktime support
# * -profile:v baseline = maximum compatability but may increase bitrate a bit
#
ffmpeg -an -i "$INPUT" -vcodec libx264 -pix_fmt yuv420p -profile:v baseline -level 3 "$OUTFILE_NO_EXT.mp4"

date -u

# make webm file
#
ffmpeg -i "$INPUT" -vcodec libvpx-vp9 -b:v 1M -acodec libvorbis "$OUTFILE_NO_EXT.webm"

date -u

# # make super webm file!
# #
# ffmpeg -i "$INPUT" -c:v libvpx-vp9 -pass 1 -b:v 1000K -threads 1 -speed 4 \
#   -tile-columns 0 -frame-parallel 0 -auto-alt-ref 1 -lag-in-frames 25 \
#   -g 9999 -aq-mode 0 -an -f webm /dev/null

# ffmpeg -i "$INPUT" -c:v libvpx-vp9 -pass 2 -b:v 1000K -threads 1 -speed 0 \
#   -tile-columns 0 -frame-parallel 0 -auto-alt-ref 1 -lag-in-frames 25 \
#   -g 9999 -aq-mode 0 -c:a libopus -b:a 64k -f webm "$OUTFILE_NO_EXT.super.webm"

# date -u
