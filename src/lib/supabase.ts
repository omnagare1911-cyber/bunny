import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          user_type: 'student' | 'teacher' | 'admin';
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          full_name?: string | null;
          user_type?: 'student' | 'teacher' | 'admin';
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          user_type?: 'student' | 'teacher' | 'admin';
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      teachers: {
        Row: {
          id: string;
          name: string;
          subject: string;
          college: string;
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          subject: string;
          college: string;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          subject?: string;
          college?: string;
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      complaints: {
        Row: {
          id: string;
          student_id: string;
          teacher_id: string;
          title: string;
          description: string;
          status: 'submitted' | 'verified' | 'evaluation_scheduled' | 'completed';
          college_name: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          student_id: string;
          teacher_id: string;
          title: string;
          description: string;
          status?: 'submitted' | 'verified' | 'evaluation_scheduled' | 'completed';
          college_name: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          student_id?: string;
          teacher_id?: string;
          title?: string;
          description?: string;
          status?: 'submitted' | 'verified' | 'evaluation_scheduled' | 'completed';
          college_name?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      evaluations: {
        Row: {
          id: string;
          teacher_id: string;
          complaint_id: string | null;
          oral_score: number | null;
          practical_score: number | null;
          knowledge_score: number | null;
          overall_rating: 'Good Teacher' | 'Needs Improvement' | null;
          youtube_link: string | null;
          status: 'scheduled' | 'live' | 'completed';
          scheduled_date: string | null;
          evaluation_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          teacher_id: string;
          complaint_id?: string | null;
          oral_score?: number | null;
          practical_score?: number | null;
          knowledge_score?: number | null;
          overall_rating?: 'Good Teacher' | 'Needs Improvement' | null;
          youtube_link?: string | null;
          status?: 'scheduled' | 'live' | 'completed';
          scheduled_date?: string | null;
          evaluation_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          teacher_id?: string;
          complaint_id?: string | null;
          oral_score?: number | null;
          practical_score?: number | null;
          knowledge_score?: number | null;
          overall_rating?: 'Good Teacher' | 'Needs Improvement' | null;
          youtube_link?: string | null;
          status?: 'scheduled' | 'live' | 'completed';
          scheduled_date?: string | null;
          evaluation_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      evaluation_feedback: {
        Row: {
          id: string;
          student_id: string;
          evaluation_id: string;
          rating: number;
          feedback_text: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          student_id: string;
          evaluation_id: string;
          rating: number;
          feedback_text?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          student_id?: string;
          evaluation_id?: string;
          rating?: number;
          feedback_text?: string | null;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
