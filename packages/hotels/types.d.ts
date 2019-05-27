declare namespace Hotels {
  interface ILocation {
    id: number;
    short_name: string;
  }
  interface IItem {
    id: number;
    name: string;
    location: ILocation;
  }
}
