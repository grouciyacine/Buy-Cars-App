export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
  {
    name:'name',
    title:'Name',
    type:'string',
    validation:(Rule)=>Rule.required(),
   },
{
  name:'description',
  title:'Description',
  type:'string',
  validation:(Rule)=>Rule.max(200),
},
{
  name:'price',
  title:'Price',
  type:'number',
},
{
name:'image',
title:'Image',
type:'image',
},
{
  name:'logo',
  title:'Logo',
  type:'image',
}
  ],

}
