let userdata=[{
    profilepic:"https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzfGVufDB8fDB8fHww",
    pendmsg:4,
    location:"Delhi, India",
    name:'Harshitha',
    age:53,
    intrest:[
        {
            hicon:'<i class="ri-edit-2-fill"></i>',
            hname:'Writing'
        },
        {
            hicon:`<i class="ri-music-2-fill"></i>`,
            hname:'Music'
        },
        {
            hicon:`<i class="ri-football-fill"></i>`,
            hname:'Sports'
        },
        {
            hicon:`<i class="ri-run-line"></i>`,
            hname:'Running'
        }
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
        {
            hicon:'<i class="ri-edit-2-fill"></i>',
            hname:'Writing'
        },
        {
            hicon:`<i class="ri-music-2-fill"></i>`,
            hname:'Music'
        },
        {
            hicon:`<i class="ri-football-fill"></i>`,
            hname:'Sports'
        },
        {
            hicon:`<i class="ri-run-line"></i>`,
            hname:'Running'
        }
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
        {
            hicon:'<i class="ri-edit-2-fill"></i>',
            hname:'Writing'
        },
        {
            hicon:`<i class="ri-music-2-fill"></i>`,
            hname:'Music'
        },
        {
            hicon:`<i class="ri-football-fill"></i>`,
            hname:'Sports'
        },
        {
            hicon:`<i class="ri-run-line"></i>`,
            hname:'Running'
        }
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
        {
            hicon:'<i class="ri-edit-2-fill"></i>',
            hname:'Writing'
        },
        {
            hicon:`<i class="ri-music-2-fill"></i>`,
            hname:'Music'
        },
        {
            hicon:`<i class="ri-football-fill"></i>`,
            hname:'Sports'
        },
        {
            hicon:`<i class="ri-run-line"></i>`,
            hname:'Running'
        }
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
   select('.bio').textContent=userdata[curr].bio;
   select('.name h1:nth-child(1)').textContent=userdata[curr].name;
   select('.name h1:nth-child(2)').textContent=userdata[curr].age;

   let clutter="";
   userdata[curr].intrest.forEach((value)=>{
   let {hicon,hname}=value;

        clutter+=`<div class="tag flex items-center bg-white/40 px-5 py-2 rounded-full gap-4">
        ${hicon} 
        <h3>
        ${hname}
        </h3>
      </div>`
   })  
   select('.tags').innerHTML=clutter;


})();
