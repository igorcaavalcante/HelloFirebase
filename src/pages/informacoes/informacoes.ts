import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-informacoes',
  templateUrl: 'informacoes.html'
})
export class InformacoesPage {

  public Produtos = [];
  public maiscaro={descricao: null, valor: null};
  public maisbarato={descricao: null, valor: null};
  public media = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var db = firebase.database().ref("/");
    db.child("Produtos").on("value",(result)=>{
      this.Produtos = this.gambiarra(result.val());
      this.maiscaro = this.Produtos[0];
      this.maisbarato = this.Produtos[0];
      this.atualizar();
    });
  }

  gambiarra(value){
    var retorno=[];
    for(let key in value){
      retorno.push(value[key]);
    }
    return retorno;
  }

  atualizar(){
    this.media = 0;
    var soma: number = 0;
    for(let p of this.Produtos){
      if(p.valor > this.maiscaro.valor){
        this.maiscaro = p;
      }
      if(p.valor < this.maisbarato.valor){
        this.maisbarato = p;
      }
      soma += parseFloat(p.valor);
    }
    this.media = soma / this.Produtos.length;
  }

}
