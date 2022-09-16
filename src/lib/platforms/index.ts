import DevTo from "./dev";
import { PlatformName, type PlatformConstructor } from "./types";
// import HashNode from './hashNode'

export default function platformSwitch(name: PlatformName): PlatformConstructor | null {
  switch (name) {
    //@ts-ignore DevTo is literally implementing Platform so 🤷
    case PlatformName.DevTo: return DevTo;
    // case PlatformName.HashNode: return HashNode;
    default: return null;
  }
}
