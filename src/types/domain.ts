export type Role = 'user' | 'assitant';

export interface Conversation {
    id: number;
    title: string;
    create_at: string;
    updated_at: string;
}

export interface Message {
    id: number;
    conversation_id: number;
    role: Role;
    content: string;
    created_at: string;
}

export interface NewConversation {
    title?: string;
}

export interface NewMessage {
    conversation_id: number;
    role: Role;
    content: string;
}