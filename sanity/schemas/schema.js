import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import category from './category'
import cars from './cars'
import dish from './dish'
import featured from './featured'
export default createSchema({
name: 'default',
types: schemaTypes.concat([
 
  cars,
  dish,
  category,
 featured
  ]),
})
