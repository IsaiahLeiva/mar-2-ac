import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";


class GalaxiesService {
    async getAll(query = {}) {
        const galaxies = await dbContext.Galaxies.find(query).populate('creator', 'name picture')
        return galaxies
    }

    async getById(id) {
        const galaxies = await dbContext.galaxies.findById(id).populate('creator', 'name picture')
        if (!course) {
            throw new BadRequest('Invalid Galaxy Id')
        }
        return galaxy
    }

    async create(newGalaxy) {
        const galaxy = await dbContext.galaxies.create(newGalaxy)
        await galaxy.populate('creator', 'name picture')
        return galaxy
    }

    async edit(update) {
        const original = await this.getById(update.id)
        if (original.creatorId.toString() != update.creatorId) {
            throw new BadRequest('Not Allowed')
        }
        original.name = update.name || original.name
        await original.save()
        return original
    }

    async remove(id, userId) {
        const original = await this.getById(id)
        if (original.creatorId.toString() !== userId) {
            throw new BadRequest('Not Allowed')
        }
        await dbContext.galaxies.findOneandRemove((_id: id))
    }
}

export const galaxiesService = new galaxiesService()