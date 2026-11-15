import { createUser } from "@/db/createUser";

<<<<<<< HEAD

export default async function handler(req, res) {
   try {
    const body = req.body;
    const user = await createUser(body)
    res.status(200).json(user.rows[0])
   } catch (err) {
    console.log(err)
   }

}
=======
export default async function handler(req, res) {
  try {
    const body = req.body;
    const user = await createUser(body);
    res.status(200).json(user.rows[0]);
  } catch (err) {
    console.log(err);
  }
}
>>>>>>> 38e109438a50cd7bb104489700bfab7033978221
