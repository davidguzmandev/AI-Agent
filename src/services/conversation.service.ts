import pool from "../db";
import { type Conversation } from "../types/domain";

export async function insertConversation(): Promise<Conversation> {
    const query = `
        INSERT INTO conversations (title)
        VALUES ($1)
        RETURNING id, title, created_at, updated_at;
    `;
    const values = ['New Conversation'];

    const result = await pool.query<Conversation>(query, values);
    return result.rows[0]!;
}