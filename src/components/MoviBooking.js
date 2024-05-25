import React from 'react'


let SCREENS = [
    {
        id:"1",
        time:"10AM",
        seats:[1,1,1,1,1,0,1,1,0,1,1,0]
    },
    {
        id:"2",
        time:"12PM",
        seats:[1,1,1,0,1,1,1,1,0,1,1,0]
    },
    {
        id:"3",
        time:"PM",
        seats:[1,0,1,1,1,1,0,1,1,1,1,0]
    }
]

const MOVIES = [
    {
        id:"1",
        title:"thunivu",
        image:"https://static.moviecrow.com/marquee/thunivu-hd-stills-feat-ak-ajith-kumar/210606_thumb_665.jpg"
    },
    {
        id:"2",
        title:"Batman",
        image:"https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:"3",
        title:"Flash",
        image:"https://wallpapers.com/images/high/grant-gustin-the-flash-movie-superhuman-speed-m5a1shouay2ynxnq.webp"
    }
]


export default function MoviBooking() {
  return (
    <div>
        <div>{
            MOVIES.map((movie)=> (
                <div key={movie.id} onClick={() => {}}>
                    <img src={movie.image} alt={movie.title}/>
                    <div>{movie.title}</div>
                </div>
            ))
            }</div>

    </div>
  )
}
