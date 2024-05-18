//type alais:
type album={
    artist:string,
    title:string,
    tracks?:number
   
}
//function that contain the all album information.
function make_album(artistName:string,titleName:string,tracksNum?:number):album{
    let album :album= { 
        artist:artistName,
        title:titleName,
       };
    if(tracksNum){
        album['tracks'] = tracksNum;
     }
    return album;
}
console.log(make_album('Asim Azhar', 'Tere Woh Pyar'))
console.log(make_album('Atif Aslam', 'Meri Kahani', 12))















