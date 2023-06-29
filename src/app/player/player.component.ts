// player.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  newPlayer = { name: '', position: '', team: '' };
  playerToUpdate = { _id: '', name: '', position: '', team: '' };
  playerToDelete = '';
  queryResults: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {}

  addPlayer() {
    this.apiService.addPlayer(this.newPlayer).subscribe(response => {
      alert('Player added successfully!');
      this.newPlayer = { name: '', position: '', team: '' };
    });
  }

  updatePlayer() {
    this.apiService.updatePlayer(this.playerToUpdate).subscribe(response => {
      alert('Player updated successfully!');
      this.playerToUpdate = { _id: '', name: '', position: '', team: '' };
    });
  }

  deletePlayer() {
    this.apiService.deletePlayer(this.playerToDelete).subscribe(response => {
      alert('Player deleted successfully!');
      this.playerToDelete = '';
    });
  }

}
