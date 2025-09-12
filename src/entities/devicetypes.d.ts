/**
 * Collection ID: devicetypes
 * Interface for DeviceTypes
 */
export interface DeviceTypes {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image */
  iconImage?: string;
  /** @wixFieldType boolean */
  isActive?: boolean;
  /** @wixFieldType number */
  displayOrder?: number;
}
