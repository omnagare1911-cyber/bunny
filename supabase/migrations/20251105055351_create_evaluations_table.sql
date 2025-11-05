/*
  # Create Evaluations Table
  
  1. New Tables
    - `evaluations` - Teacher evaluations/tests
      - `id` (uuid, primary key)
      - `teacher_id` (uuid, foreign key to teachers)
      - `complaint_id` (uuid, foreign key to complaints, nullable)
      - `oral_score` (integer) - 0-100
      - `practical_score` (integer) - 0-100
      - `knowledge_score` (integer) - 0-100
      - `overall_rating` (text) - 'Good Teacher' or 'Needs Improvement'
      - `youtube_link` (text)
      - `status` (text) - 'scheduled', 'live', 'completed'
      - `scheduled_date` (timestamp)
      - `evaluation_date` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Everyone can view completed/live evaluations
    - Admins can view all and manage evaluations
  
  3. Indexes
    - Index on teacher_id and status for filtering
*/

CREATE TABLE IF NOT EXISTS evaluations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
  complaint_id uuid REFERENCES complaints(id) ON DELETE SET NULL,
  oral_score integer CHECK (oral_score >= 0 AND oral_score <= 100),
  practical_score integer CHECK (practical_score >= 0 AND practical_score <= 100),
  knowledge_score integer CHECK (knowledge_score >= 0 AND knowledge_score <= 100),
  overall_rating text CHECK (overall_rating IN ('Good Teacher', 'Needs Improvement')),
  youtube_link text,
  status text DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'live', 'completed')),
  scheduled_date timestamptz,
  evaluation_date timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE evaluations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can view completed and live evaluations"
  ON evaluations FOR SELECT
  TO authenticated
  USING (status = 'completed' OR status = 'live');

CREATE POLICY "Admins can view all evaluations"
  ON evaluations FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid() AND users.user_type = 'admin'
    )
  );

CREATE POLICY "Only admins can insert evaluations"
  ON evaluations FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid() AND users.user_type = 'admin'
    )
  );

CREATE POLICY "Only admins can update evaluations"
  ON evaluations FOR UPDATE
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

CREATE INDEX IF NOT EXISTS idx_evaluations_teacher_id ON evaluations(teacher_id);
CREATE INDEX IF NOT EXISTS idx_evaluations_status ON evaluations(status);
CREATE INDEX IF NOT EXISTS idx_evaluations_complaint_id ON evaluations(complaint_id);
