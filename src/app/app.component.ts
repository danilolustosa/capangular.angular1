import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular1';
  propriedade = 'Dan Lustosa';
  aluno:Aluno = { idade: 36, matricula: 123, nome: 'Dan Lustosa' };

  fnEnviar(){
    console.log("Clicou no botão!");
    console.log(this.aluno);
  }
}
interface Aluno{
  matricula?:number,
  nome?:string,
  idade?:number
}
