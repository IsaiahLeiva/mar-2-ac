import BaseController from "../utils/BaseController";



export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getById)
            .get('/:id/stars', this.getGalaxyStars)
            .get('/:id/planets', this.getGalaxyPlanets)
            .get('/:id/', this.getGalaxyMoons)
            .get('/:id', this.getGalaxySpecies)
            //NOTE: explain line #16
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            const galaxies = await galaxiesService.getAll(req.query)
            return res.send(courses)
        } catch (error) {
            next(error)
        }
    }

    async getById() {
        try {

        } catch (error) {
            next(error)
        }
    }

    async getGalaxyStars(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

    async getGalaxyPlanets(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

    async getGalaxyMoons(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

    async getGalaxySpecies(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {

        } catch (error) {

        }
    }

    async edit() {
        try {

        } catch (error) {

        }
    }

    async remove() {
        try {

        } catch (error) {

        }
    }

}