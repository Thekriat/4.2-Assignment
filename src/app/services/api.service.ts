import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl = 'http://localhost:3000/api/players';  // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Get all players
  getPlayers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Add a player
  addPlayer(player: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, player);
  }

  // Update a player
  updatePlayer(player: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${player._id}`, player);
  }

  // Delete a player
  deletePlayer(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  // Query: Player with the most touchdown passes
  getMostTouchdownPasses(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/query/most-touchdown-passes`);
  }

  // Query: Player with the most rushing yards
  getMostRushingYards(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/query/most-rushing-yards`);
  }

  // Query: Player with the least rushing yards
  getLeastRushingYards(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/query/least-rushing-yards`);
  }

  // Query: List of players sorted by most field goals made
  getMostFieldGoals(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/query/most-field-goals`);
  }

  // Query: Player with the most number of sacks
  getMostSacks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/query/most-sacks`);
  }
}
