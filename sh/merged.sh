#!/bin/bash

# convert all file names to lower case
for F in * ; do NEWNAME=$(echo "$F" | tr '[:upper:]' '[:lower:]') ; mv "$F" "$NEWNAME" ; done

# change all dashes in file names to underline
for i in *-*.m3u ; do mv $i $(echo $i | sed 's/-/_/') ; done

# combine all files 
for i in $(find . -type f -name "*.m3u") ; do (cat "${i}"; echo) | grep -v "#EXTM3U" >> $(basename $i) ; done

# remove all the folders and put the m3u files in root to a new folder

# remove duplicates
for i in $(find . -type f -name "*.m3u") ; do cat $i | awk '!seen[$0]++' | grep -B1 "http" | grep -A1 "EXTINF" | awk 'length>4' > $(basename $i) ; echo -e $i ; done

# make all files linux compatible (still works on other os(es))
for i in $(find . -type f -name "*.m3u") ; do sed -i 's/\r$//' $i ; done

# add back "#EXTM3U" to files
for i in $(find . -type f -name "*.m3u") ; do sed -i '1s/^/#EXTM3U\n/' $i ; done

# remove empty lines
for i in $(find . -type f -name "*.m3u") ; do sed -i '/^$/d' $i ; done

# put all files into folders starting with the first character in their names 
for i in *.m3u ; do dir=$(echo $i | cut -c 1 -) ; mkdir -p $dir ; mv $i $dir ; done