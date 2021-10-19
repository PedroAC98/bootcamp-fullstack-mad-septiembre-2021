let imgDog = document.querySelector('.container__dog');
let imgCat = document.querySelector('.container__cat');
let imgChicken = document.querySelector('.container__chicken');
let audioDog = document.querySelector('.ladrido');
let audioCat = document.querySelector('.maullido');
let audioChicken = document.querySelector('.cocoroteo');



audioDog.addEventListener('click', e=> {
 Aku.makeNoise();

});

audioCat.addEventListener('click', e=> {
    AntorioBanderas.makeNoise();
   
   });

 audioChicken.addEventListener('click', e=> {
    Buggax.makeNoise();
   
   });

   class Animal{
    constructor(name,age,color,legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
   }

class Dog extends Animal{
    constructor(name, age, color, legs){
        super (name, age, color, legs);
    }


   
        
    

    makeNoise(){
        let audio = new Audio('./ladrido.mp3');
        audio.play();
        return audio;
        
    }

    showDog(){
        let img = document.createElement('img');
        img.src = './miperro.jpg';
        return img;
    }
}

class Cat extends Animal{

    constructor(name, age, color, legs){
        super (name, age, color, legs);
    }

    makeNoise(){
        let audio = new Audio('./maullido.mp3');
        audio.play();
        return audio;
    }

    showCat(){
        let img = document.createElement('img');
        img.src = './gatete.jpg';
        return img;
    }
    
}



class Chicken extends Animal{
    constructor(name, age, color, legs){
        super (name, age, color, legs);
    }

    makeNoise(){
        let audio = new Audio('./cocoroteo.mp3');
        audio.play();
        return audio;
        
    }

    showChicken(){
        let img = document.createElement('img');
        img.src = './migallina.jpg';
        return img;
    }
}

let Aku = new Dog( 'Aku',5,'White', 4);
let AntorioBanderas = new Cat('Antonio Banderas', 65, 'Orange', 2 );
let Buggax = new Chicken('Buggax', 22, 'Brown', 1);

imgCat.appendChild(AntorioBanderas.showCat());
imgDog.appendChild(Aku.showDog());
imgChicken.appendChild(Buggax.showChicken());

