
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { Component, ViewChild   } from '@angular/core';
import { text } from '@angular/core/src/render3';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild('mySlider') mySlider:any; 

  

  elenco =  [

   
   
    { 
      img: 'assets/cenas/c72.jpg',
      fala: "Ben - É triste ouvir a Sra. Watson, ela sempre foi muito gentil. "
    },

      {
        
        fala: "ttttttttttttttttttttttttttttttttttttt. "
              
    },
    {
        
      fala: "ddddddddddddddddddddddddddddddddddddddd. "
            
    },





    {
      img: 'assets/cenas/c73.jpg',
      fala: "Frank - Porque veio a esse parque pai?"               
    },
   
    {
      img: 'assets/cenas/c74.jpg',
      fala: "texto de teste"  
      
    },

    {
      img: 'assets/cenas/c75.jpg',
      fala: "texto de teste"  
    },

    {
      img: 'assets/cenas/c76.jpg',
      fala: "texto de teste"
    },

    {
      img: 'assets/cenas/c78.jpg',
      fala: "texto de teste"  
    },
     
    {
      img: 'assets/cenas/c79.jpg',
      fala: "texto de teste"  
    },
      
    {
      img: 'assets/cenas/c80.jpg',
      fala: "texto de teste"
    },
    
  ];

  constructor(){}

  slideNext(){
    this.mySlider.slideNext();
  }

 

  slidePrev(){
    this.mySlider.slidePrev();
  }



}

