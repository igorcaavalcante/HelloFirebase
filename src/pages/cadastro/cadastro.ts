import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

    public Produtos = [];
    public p = {descricao: null, valor: null};

  	constructor(public navCtrl: NavController, public navParams: NavParams) {

      var db = firebase.database().ref("/");
      db.child("Produtos").on("value",(result)=>{
        this.Produtos = this.gambiarra(result.val());
        console.log(this.Produtos);
      });

  	}

    gambiarra(value){
      var retorno=[];
      for(let key in value){
        retorno.push(value[key]);
      }
      return retorno;
    }

  	addProduto(p){
  		firebase.database().ref("/Produtos").push({
  			descricao: this.p.descricao,
  			valor: this.p.valor
  		});
  	}

}
