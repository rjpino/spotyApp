import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ './home.component.css' ]
})
export class HomeComponent  {

  newReleases: Array<any> = new Array<any>();

  constructor(private _spotifyService: SpotifyService) {
    this._spotifyService.getNewReleases()
    .subscribe( (data: any) => {
        console.log(data);
        this.newReleases = data.albums.items;
    });
   }


}
