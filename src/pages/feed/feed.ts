import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public nome_usuario: string = "Marty";
  public lista_filme = new Array<any>();

  public objeto_feed = {
    titulo: "Marty",
    data: "November 5, 1955",
    descricao: "Estou criando um app incrivel com ionic...",
    qnts_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    //alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        this.lista_filme = response.results;
        console.log(response);
      }, error => {
        console.log(error);
      }
   )
  }

}
