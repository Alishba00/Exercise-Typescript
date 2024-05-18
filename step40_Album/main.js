"use strict";
//invoke function that contain the all album information.
function make_album(artistName, titleName, tracksNum) {
    let album = {
        artist: artistName,
        title: titleName,
    };
    if (tracksNum) {
        album['tracks'] = tracksNum;
    }
    return album;
}
console.log(make_album('Asim Azhar', 'Tere Woh Pyar'));
console.log(make_album('Atif Aslam', 'Meri Kahani', 12));
