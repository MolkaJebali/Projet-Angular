import { Component } from '@angular/core';
import { ORGANIZERS } from '../../data/organizers';

@Component({
  selector: 'app-organizer-list',
  templateUrl: './organizer-list.html',
  styleUrl: './organizer-list.css',
})
export class OrganizerList {
  readonly organizers = ORGANIZERS;
}
