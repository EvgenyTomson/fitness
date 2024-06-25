export type TTarif = {
  name: string;
  price: number;
  lengthInDays: number;
  isPopular: boolean;
  isEndless: boolean;
  isDiscount: boolean;
  nonDiscountId: string | null;
  id: string;
  ownerId: string;
  statusId: string | null;
  creationDateTime: string;
  deleted: boolean;
};
