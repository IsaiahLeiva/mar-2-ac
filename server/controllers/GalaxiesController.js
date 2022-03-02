import BaseController from "../utils/BaseController";



export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getAll)

    }


}