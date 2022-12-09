import sanityClient from '@sanity/client'
import  ImageUrlBuilder from '@sanity/image-url'

const client=sanityClient({
    projectId:"b6mhd4x1",
    dataset:'production',
    useCdn:true,
    apiVersion:"2021-10-21",
});
const builder=ImageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source)
//RUN THIS to ADD Exeption for localhost 3000 CORS POLICY
//sanity cors add https://localhost:3000
export default client;