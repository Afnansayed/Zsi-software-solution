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
            
            default :
            return Response.json({error: 'Collection not found'} , {status: 404});
        }
        
        return Response.json(result);
      }catch(error){
        return Response.json({error: error.message} , {status: 500});
      }

}