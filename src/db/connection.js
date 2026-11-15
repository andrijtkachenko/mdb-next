<<<<<<< HEAD

=======
>>>>>>> 38e109438a50cd7bb104489700bfab7033978221
import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgresql://postgres.vjolojsxnnpccmmmwtnc:s2YKTdCmBWlOtDD1@aws-1-eu-west-1.pooler.supabase.com:5432/postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});
<<<<<<< HEAD
export default pool;
=======

export default pool;
>>>>>>> 38e109438a50cd7bb104489700bfab7033978221
