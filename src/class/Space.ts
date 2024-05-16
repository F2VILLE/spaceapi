import axios from "axios";
import SpaceAPISchema from "../types/SpaceAPISchema";

class Space {
  data: SpaceAPISchema;
  constructor(public url: string) {
    this.data = null;
  }

  async fetch(): Promise<SpaceAPISchema> {
    return new Promise((resolve, reject) => {
      axios
        .get(this.url)
        .then((response) => {
          this.data = response.data;
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async findByName(
    name: string
  ): Promise<Array<{ name: string; url: string }>> {
    return new Promise((resolve, reject) => {
      axios
        .get(
          "https://raw.githubusercontent.com/SpaceApi/directory/master/directory.json"
        )
        .then((response) => {
          const spaces = response.data;

          const spacesFound = Object.keys(spaces).filter((key) =>
            key
              .toLowerCase()
              .replace(/\s+/gm, "")
              .includes(name.toLowerCase().replace(/\s+/gm, ""))
          );

          if (!spacesFound.length) return resolve(null);

          resolve(
            spacesFound.map((key) => {
              return {
                name: key,
                url: spaces[key],
              };
            })
          );
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get name(): string {
    return this.data.space;
  }

  get contact(): SpaceAPISchema["contact"] {
    return this.data.contact;
  }

  get location(): SpaceAPISchema["location"] {
    return this.data.location;
  }

  get stateOpen(): boolean {
    return this.data.state.open;
  }

  get stateOpenFull(): SpaceAPISchema["state"] {
    return this.data.state;
  }

  get events(): SpaceAPISchema["events"] {
    return this.data.events;
  }

  get projects(): SpaceAPISchema["projects"] {
    return this.data.projects;
  }

  get sensors(): SpaceAPISchema["sensors"] {
    return this.data.sensors;
  }

  get feeds(): SpaceAPISchema["feeds"] {
    return this.data.feeds;
  }

  get logo(): string {
    return this.data.logo;
  }

  get stateLogo(): string {
    if (
      !this.data.state?.icon ||
      !this.data.state.icon.open ||
      !this.data.state.icon.closed
    )
      return null;
    return this.data.state.open
      ? this.data.state.icon.open
      : this.data.state.icon.closed;
  }

  get space(): SpaceAPISchema["space"] {
    return this.data.space;
  }
}

export default Space;
