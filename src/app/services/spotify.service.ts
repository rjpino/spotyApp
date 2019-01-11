import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCvCyi1rITrAtkmmdJE8NG5DDpziWSs4WzlyZNePjVxoIu0sU6v9wo2UHleR6wO5v6jcXjviexj0Hkl6e4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    
  }
}
