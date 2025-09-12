/**
 * Collection ID: timelineevents
 * Interface for TimelineEvents
 */
export interface TimelineEvents {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType number */
  eventYear?: number;
  /** @wixFieldType text */
  eventTitle?: string;
  /** @wixFieldType text */
  eventDescription?: string;
  /** @wixFieldType image */
  eventImage?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}
