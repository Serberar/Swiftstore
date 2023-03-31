import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  cards = [
    {
      id: 1,
      name: "earth",
      img: "/assets/img/earth.svg",
      seleccionada: false
    },
    {
      id: 2,
      name: "jupiter",
      img: "/assets/img/jupiter.svg",
      seleccionada: false
    },
    {
      id: 3,
      name: "mars",
      img: "/assets/img/mars.svg",
      seleccionada: false
    },
    {
      id: 4,
      name: "mercury",
      img: "/assets/img/mercury.svg",
      seleccionada: false
    },
    {
      id: 5,
      name: "saturn",
      img: "/assets/img/saturn.svg",
      seleccionada: false
    },
    {
      id: 6,
      name: "uranus",
      img: "/assets/img/uranus.svg",
      seleccionada: false
    },
    {
      id: 7,
      name: "earth",
      img: "/assets/img/earth.svg",
      seleccionada: false
    },
    {
      id: 8,
      name: "jupiter",
      img: "/assets/img/jupiter.svg",
      seleccionada: false
    },
    {
      id: 9,
      name: "mars",
      img: "/assets/img/mars.svg",
      seleccionada: false
    },
    {
      id: 10,
      name: "mercury",
      img: "/assets/img/mercury.svg",
      seleccionada: false
    },
    {
      id: 11,
      name: "saturn",
      img: "/assets/img/saturn.svg",
      seleccionada: false
    },
    {
      id: 12,
      name: "uranus",
      img: "/assets/img/uranus.svg",
      seleccionada: false
    },
  ];
  //barajo las cartas
  constructor() {
    this.cards.sort(() => 0.5 - Math.random());
  }
  //array para guardas las seleccionadas
  seleccionadas: any[] = [];
  // array para cuardar los iguales
  iguales: any[] = [];
  //si click en la carta doy la vuelta a la imagen
  vuelta(card: any) {
    card.seleccionada = !card.seleccionada;
    //meto la carta seleccionada en el array seleccionadas
    if (card.seleccionada) {
      this.seleccionadas.push(card);
    }
    //si la deselecciono la quito del array
    else {
      const index = this.seleccionadas.indexOf(card);
      if (index > -1) {
        this.seleccionadas.splice(index, 1);
      }
    }

    //miro si son iguales
    if (this.seleccionadas[0].name === this.seleccionadas[1].name) {
      // Si las cartas son iguales la marco
      this.seleccionadas.forEach((card: any) => {
        card.seleccionada = true;
        //meto las iguales en su array
        this.iguales.push(card);
      });
    }
    //le pongo un temporizador para que de la vuelta su no esta en el array
    setTimeout(() => {

      this.seleccionadas.forEach((card: any) => {
        if (!this.iguales.includes(card)) {
          card.seleccionada = false;
        }
      });
      // reset al array seleccionadas
      this.seleccionadas = [];
    }, 1000);

  }

}
