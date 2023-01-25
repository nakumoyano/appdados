import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dadoUno = '../assets/img/dice1.png';
  dadoDos = '../assets/img/dice2.png';
  dadoTres = '../assets/img/dice3.png';
  dadoCuatro = '../assets/img/dice4.png';
  dadoCinco = '../assets/img/dice5.png';

  numero1 = 1;
  numero2 = 2;
  numero3 = 3;
  numero4 = 4;
  numero5 = 5;

  tirarDados() {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.numero3 = Math.round(Math.random() * 5) + 1;
    this.numero4 = Math.round(Math.random() * 5) + 1;
    this.numero5 = Math.round(Math.random() * 5) + 1;

    this.dadoUno = '../assets/img/dice' + this.numero1 + '.png';
    this.dadoDos = '../assets/img/dice' + this.numero2 + '.png';
    this.dadoTres = '../assets/img/dice' + this.numero3 + '.png';
    this.dadoCuatro = '../assets/img/dice' + this.numero4 + '.png';
    this.dadoCinco = '../assets/img/dice' + this.numero5 + '.png';
  }
}
