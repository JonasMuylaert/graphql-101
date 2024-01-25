import { Crewmember, Sailboat } from "../generated/resolvers-types";

export interface Repository {
  getSailboatByID(id: string): Promise<Sailboat>;
  getSailboats(): Promise<Sailboat[]>;
  getCrewmembersBySailboatID(id: string): Promise<Crewmember[]>;
  getCrewmemberByID(id: string): Promise<Crewmember>;
  getCrewmembers(): Promise<Crewmember[]>;
}
