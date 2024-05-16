import axios from 'axios'
import SpaceAPISchema from '../types/SpaceAPISchema'

class Space {
    data: SpaceAPISchema
    constructor(public url: string) {
        this.data = null
    }

    async fetch(): Promise<SpaceAPISchema> {
        return new Promise((resolve, reject) => {
            axios.get(this.url)
                .then((response) => {
                    this.data = response.data
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    get name(): string {
        return this.data.space
    }

    get contact(): SpaceAPISchema['contact'] {
        return this.data.contact
    }

    get location(): SpaceAPISchema['location'] {
        return this.data.location
    }

    get state(): SpaceAPISchema['state'] {
        return this.data.state
    }

    get events(): SpaceAPISchema['events'] {
        return this.data.events
    }

    get sensors(): SpaceAPISchema['sensors'] {
        return this.data.sensors
    }

    get feeds(): SpaceAPISchema['feeds'] {
        return this.data.feeds
    }

    get logo(): string {
        return this.data.logo
    }

    get space(): SpaceAPISchema["space"] {
        return this.data.space
    }
}

export default Space