import { INFTBid } from "./nftBid";

export interface INFT {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: INFTBid[];
}
