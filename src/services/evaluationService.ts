import { supabase } from '../lib/supabase';

export interface EvaluationData {
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
}

export const evaluationService = {
  async getEvaluationsByTeacher(teacherId: string) {
    const { data, error } = await supabase
      .from('evaluations')
      .select('*')
      .eq('teacher_id', teacherId)
      .order('evaluation_date', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getCompletedEvaluations() {
    const { data, error } = await supabase
      .from('evaluations')
      .select('*')
      .eq('status', 'completed')
      .order('evaluation_date', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getLiveEvaluations() {
    const { data, error } = await supabase
      .from('evaluations')
      .select('*')
      .eq('status', 'live')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getUpcomingEvaluations() {
    const { data, error } = await supabase
      .from('evaluations')
      .select('*')
      .eq('status', 'scheduled')
      .order('scheduled_date', { ascending: true });

    if (error) throw error;
    return data;
  },

  async getEvaluationById(evaluationId: string) {
    const { data, error } = await supabase
      .from('evaluations')
      .select('*')
      .eq('id', evaluationId)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async createEvaluation(evaluation: EvaluationData) {
    const { data, error } = await supabase
      .from('evaluations')
      .insert(evaluation)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateEvaluation(evaluationId: string, updates: Partial<EvaluationData>) {
    const { data, error } = await supabase
      .from('evaluations')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', evaluationId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async submitFeedback(studentId: string, evaluationId: string, rating: number, feedbackText?: string) {
    const { data, error } = await supabase
      .from('evaluation_feedback')
      .insert({
        student_id: studentId,
        evaluation_id: evaluationId,
        rating,
        feedback_text: feedbackText,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getEvaluationFeedback(evaluationId: string) {
    const { data, error } = await supabase
      .from('evaluation_feedback')
      .select('*')
      .eq('evaluation_id', evaluationId);

    if (error) throw error;
    return data;
  },
};
