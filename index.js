import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
const app = express();

app.use(cors());
const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
export default app
