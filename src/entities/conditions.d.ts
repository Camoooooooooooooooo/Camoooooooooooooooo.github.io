/**
 * Collection ID: conditions
 * Interface for Conditions
 */
export interface Conditions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  conditionName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType number */
  valueMultiplier?: number;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType boolean */
  isActive?: boolean;
}
