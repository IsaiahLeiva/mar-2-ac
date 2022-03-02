import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts')
  Galaxies = mongoose.model('Galaxy'), GalaxySchema)
  // Stars = mongoose.model('Star'), StarSchema)
  // Planets = mongoose.model('Planet'), PlanetSchema);
  // Moons = mongoose.model('Moon'), MoonSchema);
  // Species = mongoose.model('Specie'), SpecieSchema)

}

export const dbContext = new DbContext()
