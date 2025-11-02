import app from './app'
import pool from './db'

const PORT = process.env.PORT || 3001;

async function startServer(): Promise<void>{
    try {
        await pool.connect();
        app.listen(PORT, () => {
            console.log('✅ Server running on http://localhost:${PORT}');
        })
    } catch (err) {
        console.log("❌ Failed to start server:", err);
    }
}

startServer();