import {
  Crewmember,
  QueryResolvers,
  Sailboat,
  SailboatResolvers,
} from "../generated/resolvers-types";
import { repo } from "../main";

export const sailboats: QueryResolvers["sailboats"] = async (_, { max }) => {
  if (max) {
    const sb = await repo.getSailboats();

    return sb.slice(0, max);
  }

  return await repo.getSailboats();
};

export const sailboat: QueryResolvers["sailboat"] = async (_, { id }) => {
  return await repo.getSailboatByID(id);
};

export const crewmembers: SailboatResolvers["crewmembers"] = async (
  parent,
  { max, sort }
) => {
  let crewmembers = await repo.getCrewmembersBySailboutID(parent.id);
  if (max) {
    crewmembers = crewmembers.slice(0, max);
  }

  if (sort) {
    if (sort === "ASC") {
      crewmembers = crewmembers.sort();
    } else if (sort === "DESC") {
      crewmembers = crewmembers.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    }
  }

  return crewmembers;
};
