import { Component } from '@angular/core';
import { CONFERENCES } from '../../data/conferences';
import { OrganizerList } from '../../components/organizer-list/organizer-list';

@Component({
  selector: 'app-home',
  imports: [OrganizerList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly conferences = CONFERENCES;
}
