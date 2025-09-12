/**
 * Collection ID: inquiries
 * Interface for Inquiries
 */
export interface Inquiries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  email?: string;
  /** @wixFieldType text */
  subject?: string;
  /** @wixFieldType text */
  message?: string;
  /** @wixFieldType text */
  phoneNumber?: string;
  /** @wixFieldType datetime */
  submissionDate?: Date | string;
}
