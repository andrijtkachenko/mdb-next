import { createUser } from "@/db/createUser";


export default async function handler(req, res) {
   try {
    const body = req.body;
    const user = await createUser(body)
    res.status(200).json(user.rows[0])
   } catch (err) {
    console.log(err)
   }

}
