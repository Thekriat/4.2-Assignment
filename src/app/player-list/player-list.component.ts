import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {
  players: any[] = [];

  constructor(private apiService: ApiService) {}
  
  ngOnInit() {
    this.apiService.getPlayers().subscribe((players: any[]) => {
      this.players = players;
    });
  }
  loadPlayers() {
    this.apiService.getPlayers().subscribe((data: any[]) => {
    this.players = data;
    });
  }
    
}
