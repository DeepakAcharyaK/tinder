// get the data
let userdata=[{
    profilepic:"https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzfGVufDB8fDB8fHww",
    pendmsg:4,
    location:"Delhi, India",
    name:'Harshitha',
    age:53,
    intrest:[
        "Music",
        "Movies",
        "Sports",
        "Travel"
    ],
    bio:"I am a music enthusiast and I like to listen to music. I also like to play video games and watch movies. I also like to play sports. I also like to travel.",
    isfriend:null
},
{
    profilepic:"https://images.unsplash.com/photo-1627067227573-07bc616f46ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fHww",
    pendmsg:5,
    location:"Bopal, India",
    name:'Deepa',
    age:26,
    intrest:[
        "Music",
        "Movies",
        "Sports",
        "Travel"
    ],
    bio:"I am a music enthusiast and I like to listen to music. I also like to play video games and watch movies. I also like to play sports. I also like to travel.",
    isfriend:null
},
{
    profilepic:"https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww",
    pendmsg:14,
    location:"Hariyana, India",
    name:'Anusha',
    age:53,
    intrest:[
        "Music",
        "Movies",
        "Sports",
        "Travel"
    ],
    bio:"I am a music enthusiast and I like to listen to music. I also like to play video games and watch movies. I also like to play sports. I also like to travel.",
    isfriend:null
},
{
    profilepic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    pendmsg:3,
    location:"Karnataka, India",
    name:'Vishu',
    age:13,
    intrest:[
        "Music",
        "Movies",
        "Sports",
        "Travel"
    ],
    bio:"I am a music enthusiast and I like to listen to music. I also like to play video games and watch movies. I also like to play sports. I also like to travel.",
    isfriend:null
}];

let curr=0;

function select(element) {
    return document.querySelector(element);
}

(function setInitial(){
   select('.maincard img').src=userdata[curr].profilepic;
//    select('.incommingcard img').src=userdata[curr+1].profilepic;+

   select('.profileimg img').src=userdata[curr].profilepic;
   select('.badge h5').innerHTML=userdata[curr].pendmsg;
   select('.heading h1').textContent=userdata[curr].location;


})();
