/*
  # Create Complaints Table
  
  1. New Tables
    - `complaints` - Student complaints
      - `id` (uuid, primary key)
      - `student_id` (uuid, foreign key to users)
      - `teacher_id` (uuid, foreign key to teachers)
      - `title` (text)
      - `description` (text)
      - `status` (text) - 'submitted', 'verified', 'evaluation_scheduled', 'completed'
      - `college_name` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Students can only view/edit their own complaints
    - Admins can view and update all complaints
  
  3. Indexes
    - Composite indexes on student_id and teacher_id for filtering
*/

CREATE TABLE IF NOT EXISTS complaints (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  teacher_id uuid NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  status text DEFAULT 'submitted' CHECK (status IN ('submitted', 'verified', 'evaluation_scheduled', 'completed')),
  college_name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE complaints ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view their own complaints"
  ON complaints FOR SELECT
  TO authenticated
  USING (student_id = auth.uid());

CREATE POLICY "Students can insert their own complaints"
  ON complaints FOR INSERT
  TO authenticated
  WITH CHECK (student_id = auth.uid());

CREATE POLICY "Students can update their own complaints"
  ON complaints FOR UPDATE
  TO authenticated
  USING (student_id = auth.uid())
  WITH CHECK (student_id = auth.uid());

CREATE POLICY "Admins can view all complaints"
  ON complaints FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid() AND users.user_type = 'admin'
    )
  );

CREATE POLICY "Admins can update complaint status"
  ON complaints FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid() AND users.user_type = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid() AND users.user_type = 'admin'
    )
  );

CREATE INDEX IF NOT EXISTS idx_complaints_student_id ON complaints(student_id);
CREATE INDEX IF NOT EXISTS idx_complaints_teacher_id ON complaints(teacher_id);
CREATE INDEX IF NOT EXISTS idx_complaints_status ON complaints(status);
