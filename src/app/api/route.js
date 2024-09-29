import { NextResponse } from "next/server";

const { connectDB } = require("@/lib/connectDB")



export const GET = async (req) => {
     const {searchParams} = new URL(req.url);
     const collection = searchParams.get('collection');
     
      try{
        const db = await connectDB();
        let result = {};
        switch (collection) {
            case 'comperision' : 
            const comperisionCollection = db.collection('servicesComperision');
            result = await comperisionCollection.find().toArray();
            break;

            case 'services' :
            const servicesCollection = db.collection('services');
            result = await servicesCollection.find().toArray();
            break;

            default :
            return NextResponse.json({error: 'Collection not found'} , {status: 404});
        }
        
        return NextResponse.json(result);
      }catch(error){
        return NextResponse.json({error: error.message} , {status: 500});
      }

}