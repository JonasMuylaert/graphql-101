import { Crewmember, Sailboat } from "../../generated/resolvers-types";
import { Repository } from "../repository";
import { readFileSync } from "fs";
import * as path from "path";

type SailboatData = {
  id: string;
  name: string;
  callsign: string;
  sailArea: number;
  loa: number;
  breadth: number;
};

export class MemoryRepository implements Repository {
  async getSailboatByID(id: string): Promise<Sailboat> {
    const sailboats = await this.getSailboats();

    const sb = sailboats.find((sb) => sb.id === id);
    if (!sb) {
      throw new Error("Could not find any sailboat for the given id");
    }

    return sb;
  }

  async getCrewmembersBySailboatID(id: string): Promise<Crewmember[]> {
    const crewmembers = await this.getCrewmembers();

    return crewmembers.filter((cm) => cm.sailboatID === id);
  }
  async getCrewmemberByID(id: string): Promise<Crewmember> {
    const crewmembers = await this.getCrewmembers();

    const cm = crewmembers.find((cm) => cm.id === id);

    if (!cm) {
      throw new Error("Could not find crew member for the given id");
    }

    return cm;
  }

  getSailboats(): Promise<Sailboat[]> {
    const sailboatsData = readFileSync(
      path.join(__dirname, "data", "sailboats.json"),
      {
        encoding: "utf-8",
      }
    );

    const sailboats = JSON.parse(sailboatsData) satisfies Sailboat[];

    return sailboats;
  }

  getCrewmembers(): Promise<Crewmember[]> {
    const crewmembersData = readFileSync(
      path.join(__dirname, "data", "crewmembers.json"),
      {
        encoding: "utf-8",
      }
    );

    const crewmembers = JSON.parse(crewmembersData) satisfies Crewmember[];

    return crewmembers;
  }
}
