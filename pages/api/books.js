import fs from 'fs';
import path from 'path';


function getData(){

    const filePath = path.join(process.cwd(),"data","data.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    return data

}

function handler (req,res){

    if(req.method==='GET'){

         const data = getData()
         return res.status(200).json({message:data})
    }else if (req.method === 'POST'){

        const {name,author,description,imgURL} = req.body;

        const newBook = {

            name,
            author,
            description,
            imgURL,
            id:Date.now()
        }
        const data = getData();
        data.push(newBook);
        return res.status(201).json({message:"Book Created Successfully!",book:newBook})
    }
}

export default handler