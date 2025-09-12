/**
 * Collection ID: sellrequests
 * Interface for SellRequests
 */
export interface SellRequests {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  deviceName?: string;
  /** @wixFieldType text */
  modelVersion?: string;
  /** @wixFieldType text */
  condition?: string;
  /** @wixFieldType image */
  consolePhoto?: string;
  /** @wixFieldType text */
  contactName?: string;
  /** @wixFieldType text */
  contactEmail?: string;
  /** @wixFieldType text */
  contactPhone?: string;
  /** @wixFieldType text */
  preferredPaymentMethod?: string;
}
