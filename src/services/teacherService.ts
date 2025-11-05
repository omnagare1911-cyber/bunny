import { supabase } from '../lib/supabase';

export interface TeacherData {
  name: string;
  subject: string;
  college: string;
  avatar_url?: string | null;
  bio?: string | null;
}

export const teacherService = {
  async getAllTeachers() {
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .order('name', { ascending: true });

    if (error) throw error;
    return data;
  },

  async getTeacherById(teacherId: string) {
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .eq('id', teacherId)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async searchTeachers(query: string) {
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .or(`name.ilike.%${query}%,college.ilike.%${query}%`)
      .order('name', { ascending: true });

    if (error) throw error;
    return data;
  },

  async getTeachersBySubject(subject: string) {
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .eq('subject', subject)
      .order('name', { ascending: true });

    if (error) throw error;
    return data;
  },

  async getTeachersByCollege(college: string) {
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .eq('college', college)
      .order('name', { ascending: true });

    if (error) throw error;
    return data;
  },

  async getTeacherWithEvaluations(teacherId: string) {
    const { data: teacher, error: teacherError } = await supabase
      .from('teachers')
      .select('*')
      .eq('id', teacherId)
      .maybeSingle();

    if (teacherError) throw teacherError;

    if (!teacher) return null;

    const { data: evaluations, error: evaluationsError } = await supabase
      .from('evaluations')
      .select('*')
      .eq('teacher_id', teacherId)
      .order('evaluation_date', { ascending: false });

    if (evaluationsError) throw evaluationsError;

    return {
      ...teacher,
      evaluations: evaluations || [],
    };
  },

  async createTeacher(teacher: TeacherData) {
    const { data, error } = await supabase
      .from('teachers')
      .insert(teacher)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateTeacher(teacherId: string, updates: Partial<TeacherData>) {
    const { data, error } = await supabase
      .from('teachers')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', teacherId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
