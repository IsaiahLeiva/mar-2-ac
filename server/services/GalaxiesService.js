import { BadRequest } from "@bcwdev/auth0provider/lib/Errors"



class GalaxiesService {
    async getAll(query = {}) {
        const galaxies = await dbContext.Galaxies.find(query).populate('creator', 'name picture')
        return galaxies
    }

    async getById(id) {
        const galaxy = await dbContext.Galaxies.findById(id).populate('creator', 'name picture')
        if (!galaxy) {
            throw new BadRequest('Invalid Galaxy Id')
        }
        return galaxy
    }

    async create(newCourse) {
        const galaxy = await dbContext.Galaxies.create(newGalaxy)
        await course.populate('creator', 'name picture')
        return galaxy
    }

    async edit(update) {
        const original = await this.getById(update.id)
        if (original.creatorId.toString() !== update.creatorId) {
            throw new BadRequest('You cannot edit that data')
        }
        original.name = update.name || original.name
        await original.save()
        return original
    }

    async remove(id, userId) {
        const original = await this.getById(id)
        if (original.creatorId.toString() !== userId) {
            throw new BadRequest('You cannot edit this')
        }
        await dbContext.Galaxies.findOneAndRemove({ _id: id })
    }
}

export const galaxiesService = new GalaxiesService()