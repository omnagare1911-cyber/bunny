/*
  # Create Evaluation Feedback Table
  
  1. New Tables
    - `evaluation_feedback` - Student feedback on evaluations
      - `id` (uuid, primary key)
      - `student_id` (uuid, foreign key to users)
      - `evaluation_id` (uuid, foreign key to evaluations)
      - `rating` (integer) - 1-5
      - `feedback_text` (text)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Everyone can view feedback
    - Students can only insert/update their own feedback
  
  3. Indexes
    - Index on student_id and evaluation_id
*/

CREATE TABLE IF NOT EXISTS evaluation_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  evaluation_id uuid NOT NULL REFERENCES evaluations(id) ON DELETE CASCADE,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  feedback_text text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE evaluation_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can view feedback"
  ON evaluation_feedback FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Students can insert their own feedback"
  ON evaluation_feedback FOR INSERT
  TO authenticated
  WITH CHECK (student_id = auth.uid());

CREATE POLICY "Students can update their own feedback"
  ON evaluation_feedback FOR UPDATE
  TO authenticated
  USING (student_id = auth.uid())
  WITH CHECK (student_id = auth.uid());

CREATE INDEX IF NOT EXISTS idx_evaluation_feedback_student_id ON evaluation_feedback(student_id);
CREATE INDEX IF NOT EXISTS idx_evaluation_feedback_evaluation_id ON evaluation_feedback(evaluation_id);
