import SpaceAPISchema from '../types/SpaceAPISchema';
declare class Space {
    url: string;
    data: SpaceAPISchema;
    constructor(url: string);
    fetch(): Promise<SpaceAPISchema>;
    get name(): string;
    get contact(): SpaceAPISchema['contact'];
    get location(): SpaceAPISchema['location'];
    get state(): SpaceAPISchema['state'];
    get events(): SpaceAPISchema['events'];
    get sensors(): SpaceAPISchema['sensors'];
    get feeds(): SpaceAPISchema['feeds'];
    get logo(): string;
    get space(): SpaceAPISchema["space"];
}
export default Space;
