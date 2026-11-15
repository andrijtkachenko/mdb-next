
import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgresql://postgres.vjolojsxnnpccmmmwtnc:s2YKTdCmBWlOtDD1@aws-1-eu-west-1.pooler.supabase.com:5432/postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});
export default pool;