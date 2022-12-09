export default{
    name:'featured',
    title:"Featured Menu Category",
    type:'document',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Featured Category Name',
            validation:(Rule)=>Rule.required(),
        },
        {
            name:'short_description',
            type:'string',
            title:'Short Description',
            validation:(Rule)=>Rule.max(200),
        },
        {
            name:'cars',
            type:'array',
            title:"Cars",
            of:[{type:"reference",to:[{type:"cars"}]}],
        }

    ]
}