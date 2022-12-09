export default {
  name: 'cars',
  title: 'Cars',
  type: 'document',
  fields: [
  {
    name:"name",
    type:"string",
    title:"Cars Name",
    validation:(Rule)=>Rule.required(),
  },
  {
    name:"description",
    type:"string",
    title:"Short Description",
    validation:(Rule)=>Rule.max(200),
  },
  {
   name:"image",
   type:"image",
   title:"Image",
  },
  {
    name:"price",
    type:"number",
    title:"Price",
    validation:(Rule)=>Rule.required(),
  },
{
  name:'speed',
  type:'number',
  title:'Speed',
},
{
  name:'address',
  type:'string',
  title:'Address',
  validation:(Rule)=>Rule.required(),
},
{
  name:'rating',
  type:'number',
  title:'Enter a Number between 1 and 5',
  validation:(Rule)=>
  Rule.required()
    .min(1)
    .max(5)
    .error("Pleas enter a Value between 1 and 5"),
},
{
  name:'type',
  type:'string',
  title:'Category',
  type:'reference',
  to:[{type:'category'}],
  validation:(Rule)=>
  Rule.required(),
},
{
  name:'dishes',
  type:'array',
  title:'Dishes',
  of:[{type:"reference",to:[{type:'dish'}]}],
},
  ],
}
