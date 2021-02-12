/*

1.) make a copy of this file
2.) rename copy to config.js
3.) add your desired configs/creds

*/
var ftconfigs = {
   roomName: "LD GMOD", // what you'd like your room name to be displayed as
   roomNameShort: "LD GMOD", // if you have a long room name, put a shorter version here (like 2 words probably max).
   defaultAlbumArtUrl: "https://pbs.twimg.com/profile_images/930287025567047680/FIJnzu_m_400x400.jpg", // url of an image to use for tracks with no album art. should be a square and at least 500x500 px for best results.
   roomInfoUrl: "", // Change what the "?" button at the top of the page links to. This can be any URL
   firebase:{ // put the info from your Firebase app here. can be found in the Firebase console
    apiKey: "AIzaSyD0EshJEaTiqFglShvgp0-_mwv489Mciww",
    authDomain: "mumbleman.firebaseapp.com",
    databaseURL: "https://mumbleman-default-rtdb.firebaseio.com/"
  },
  youtubeKey: "AIzaSyDryjcGa2NOLar5v8WFs185igWq7gp8UJU", // Your youtube api client key. Be sure to whitelist your domain for this key in the google api console.
  soundcloudKey: "587aa2d384f7333a886010d5f52f302a" // Your soundcloud api key
};
