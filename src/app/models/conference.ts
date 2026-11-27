import { Organizer } from './organizer';

export class Conference {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly image: string,
    public readonly imageAlt: string,
    public readonly location: string,
    public readonly dateTime: string,
    public readonly dateLabel: string,
    public readonly description: string,
    public readonly placesLabel: string,
    public readonly placesClass: string,
    public readonly isFull: boolean,
    public readonly organizers: Organizer[],
  ) {}
}
