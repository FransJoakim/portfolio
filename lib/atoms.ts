import { atom } from "recoil";
import { portfolioProject } from "./types";
import portfolioProjects from "./data.json" assert { type: "json" };

export const projectsAtom = atom<portfolioProject[]>({
  key: "projects",
  default: portfolioProjects,
});

export const displayedProjectAtom = atom<portfolioProject>({
  key: "displayedProject",
  default: portfolioProjects[0],
});

export const clientWindowViewState = atom({
  key: "clientWindowView",
  default: 0,
});
