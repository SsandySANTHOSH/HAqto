import React from "react";
import { Card } from "./components/Card";

function App() {
    return (
      <div className="App">
        <div className="col">
          <Card
            imgSrc="https://as2.ftcdn.net/v2/jpg/03/61/64/85/1000_F_361648530_mg5GX0tKcHEbKYSXKpVr2XujrP2qRau3.jpg"
            imgAlt="Card Image 1"
            buttonText="9/10"
            link="card3"
          />
          <h3>Iron Man</h3>
          <Card
          imgSrc="https://as1.ftcdn.net/v2/jpg/04/80/67/10/1000_F_480671088_7YtE45hl1QIxMYjZhWpxnCScTpo64QcE.jpg"
            imgAlt="Card Image 2"
        buttonText="7.4/10"
            // buttonText="7.5/10"
            link="card2"
          />
          <h3>Batman</h3>
          <Card
            imgSrc="https://as1.ftcdn.net/v2/jpg/00/72/36/92/1000_F_72369238_FuSTMpwkEuOkkEff7YQFSdHBoS7DHicM.jpg"
            imgAlt="Card Image 3"
            title=""
            buttonText="8.4/10"
            link="card2"
          />
          <h3>Uperman</h3>

        </div>
        <div className="col">
          <Card
            imgSrc="https://as2.ftcdn.net/v2/jpg/03/61/64/85/1000_F_361648530_mg5GX0tKcHEbKYSXKpVr2XujrP2qRau3.jpg"
            imgAlt="Card Image 1"
            title="Card Title"
            buttonText="6/10"
            link="card1"
          />
          <h3>Ironman 2</h3>
          <Card
            imgSrc="https://c.ndtvimg.com/2022-09/9d8e3iko_ajith_625x300_21_September_22.jpg"
            imgAlt="Card Image 3"
            title=""
            buttonText="7/10"
            link="card2"
          />
          <h3>Thunivu</h3>
          <Card
          imgSrc="https://moviegalleri.net/wp-content/gallery/dada/Dada-Movie-Images-09cb119.jpg"
            imgAlt="Card Image 3"
            
            link="card2"
          />
          <h3>Dada</h3>
        </div>
        <div className="col">
          <Card
            imgSrc="https://as1.ftcdn.net/v2/jpg/04/59/79/90/1000_F_459799034_xKl1Yo9XRcmWmowMzfsbSQ20Bq1MeJ7J.jpg"
            imgAlt="Card Image 1"
            
            buttonText="9.7/10"
            link="card1"
          />
          <h3>Avenger</h3>
  
          <Card
            imgSrc="https://img.posterstore.com/zoom/wb0202-8theflash-movie50x70.jpg"
            imgAlt="Card Image 3"
            
            buttonText="8.7/10"
            link="card2"
          />
          <h3>Flash</h3>
          <Card
          imgSrc="https://images.filmibeat.com/webp/img/popcorn/profile_photos/kavin-20230803143734-37483.jpg"
            imgAlt="Card Image 3"
    
            buttonText="8.5/10"
            link="card2"
          />
          <h3>Star</h3>
         
        </div>
      </div>
    );
  }
  
  export default App;