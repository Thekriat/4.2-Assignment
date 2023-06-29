import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  @Input() player!: Player;
  @Output() savePlayer: EventEmitter<Player> = new EventEmitter<Player>();

  constructor() { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.savePlayer.emit(this.player);
  }
}
