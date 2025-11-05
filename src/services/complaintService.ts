import { supabase } from '../lib/supabase';

export interface ComplaintData {
  title: string;
  description: string;
  college_name: string;
  teacher_id: string;
}

export interface ComplaintWithDetails extends ComplaintData {
  id: string;
  student_id: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const complaintService = {
  async submitComplaint(studentId: string, complaint: ComplaintData) {
    const { data, error } = await supabase
      .from('complaints')
      .insert({
        student_id: studentId,
        ...complaint,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getStudentComplaints(studentId: string) {
    const { data, error } = await supabase
      .from('complaints')
      .select('*')
      .eq('student_id', studentId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getComplaintById(complaintId: string) {
    const { data, error } = await supabase
      .from('complaints')
      .select('*')
      .eq('id', complaintId)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async updateComplaintStatus(complaintId: string, status: string) {
    const { data, error } = await supabase
      .from('complaints')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', complaintId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getTeacherComplaints(teacherId: string) {
    const { data, error } = await supabase
      .from('complaints')
      .select('*')
      .eq('teacher_id', teacherId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },
};
