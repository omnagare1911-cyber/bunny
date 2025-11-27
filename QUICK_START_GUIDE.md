# TRB Quick Start & Reference Guide

## 🚀 Quick Project Overview

**What is TRB?**
Teacher Review Board - A platform for students to submit complaints, evaluate teachers, and access career/placement resources.

**Tech Stack:**
- Frontend: React 18 + TypeScript + Vite
- Styling: Tailwind CSS + Lucide Icons
- Database: Supabase (PostgreSQL)
- Auth: Supabase Email/Password

**Status:** MVP with code quality issues (26 TypeScript errors)

---

## 📦 Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
File: `.env`
```
VITE_SUPABASE_URL=https://pyjmfekliolxoaupxrqa.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 3. Start Development Server
```bash
npm run dev
```
Vite will start at `http://localhost:5173`

---

## 🏗️ Project Structure at a Glance

```
src/
├── components/       # Shared UI components (Header, Footer, etc)
├── context/          # AuthContext for global auth state
├── lib/              # Utilities (Supabase client, navigation)
├── pages/            # Route pages (14 pages)
├── services/         # Database service layer
└── App.tsx           # Main routing config
```

---

## 🔑 Key Files & What They Do

| File | Purpose | Lines |
|------|---------|-------|
| `src/App.tsx` | Route definitions | 51 |
| `src/lib/supabase.ts` | Database client & types | 190 |
| `src/context/AuthContext.tsx` | Authentication state | 170+ |
| `src/pages/StudentDashboard.tsx` | Student home page | 201 |
| `src/pages/ComplaintSubmission.tsx` | Complaint form | 492 |
| `src/services/teacherService.ts` | Teacher DB operations | 113 |
| `src/services/complaintService.ts` | Complaint DB operations | 77 |
| `src/services/evaluationService.ts` | Evaluation DB ops | Unknown |

---

## 📋 Routes Quick Reference

### Public Routes
```
/              → Home page
/login         → Login form
/register      → Registration form
/about         → About page
/contact       → Contact page
/who-we-are    → Organization info
/how-it-works  → Process explanation
```

### Protected Routes (Login Required)
```
/dashboard              → Student home
/submit-complaint       → File complaint
/teacher-profiles       → Browse teachers
/teacher/:id            → Teacher detail
/live-tests             → List evaluations
/live-test/:id          → Watch evaluation
/admin                  → Admin panel
/placement-support      → Career resources
```

---

## 🔓 Authentication Flow

### Login
```typescript
// In LoginPage.tsx
const { signIn } = useAuth();
await signIn(email, password);
// User redirected to /dashboard
```

### Signup
```typescript
const { signUp } = useAuth();
await signUp(email, password, fullName, userType);
// Auto-login and redirect
```

### Access User Data
```typescript
const { user, userProfile } = useAuth();

if (userProfile?.user_type === 'admin') {
  // Show admin features
}
```

---

## 💾 Database Quick Reference

### Tables & Fields

**users**
```
id, email, full_name, user_type, avatar_url, created_at, updated_at
```

**teachers**
```
id, name, subject, college, avatar_url, bio, created_at, updated_at
```

**complaints**
```
id, student_id, teacher_id, title, description, status, college_name, created_at, updated_at
```

**evaluations**
```
id, teacher_id, complaint_id, oral_score, practical_score, knowledge_score,
overall_rating, youtube_link, status, scheduled_date, evaluation_date,
created_at, updated_at
```

**evaluation_feedback**
```
id, student_id, evaluation_id, rating, feedback_text, created_at
```

---

## 🔧 Common Tasks

### Task: Fetch All Teachers
```typescript
import { teacherService } from '@/services/teacherService';

const teachers = await teacherService.getAllTeachers();
```

### Task: Submit a Complaint
```typescript
import { complaintService } from '@/services/complaintService';

const complaint = await complaintService.submitComplaint(studentId, {
  title: "...",
  description: "...",
  college_name: "...",
  teacher_id: "..."
});
```

### Task: Get Teacher with Evaluations
```typescript
const teacherData = await teacherService.getTeacherWithEvaluations(teacherId);
// Returns { ...teacher, evaluations: [...] }
```

### Task: Search Teachers
```typescript
const results = await teacherService.searchTeachers("mathematics");
```

### Task: Filter Teachers by Subject
```typescript
const mathTeachers = await teacherService.getTeachersBySubject("Mathematics");
```

### Task: Update Complaint Status
```typescript
await complaintService.updateComplaintStatus(complaintId, "completed");
```

---

## 🎨 Styling Quick Tips

### Common Tailwind Classes

```typescript
// Colors
className="bg-blue-600 text-white"
className="text-slate-700 hover:text-blue-600"

// Sizing
className="w-64 h-10"
className="px-4 py-2"

// Layout
className="flex items-center gap-4"
className="grid grid-cols-3 gap-6"

// Responsive
className="md:grid-cols-2 lg:grid-cols-4"

// Animations
className="hover:shadow-xl transition-shadow duration-300"
className="transform hover:scale-105"

// Common patterns
className="rounded-lg shadow-lg p-6"
className="bg-gradient-to-r from-blue-600 to-blue-700"
```

### Using Icons
```typescript
import { Star, Users, FileText } from 'lucide-react';

<Star className="h-6 w-6 text-blue-600" />
```

---

## 📊 Component Patterns

### Protected Route Pattern
```typescript
// In App.tsx or a separate file
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>
```

### Service Usage Pattern
```typescript
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  const fetch = async () => {
    try {
      setLoading(true);
      const result = await service.getData();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetch();
}, []);
```

### Form Pattern
```typescript
const [form, setForm] = useState({ name: '', email: '' });

const handleChange = (e) => {
  setForm(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await service.submit(form);
  } catch (error) {
    console.error(error);
  }
};
```

---

## 🐛 Debugging Tips

### Check TypeScript Errors
```bash
npm run typecheck
```

### Check Linting
```bash
npm run lint
```

### Build for Production
```bash
npm run build
```

### View Build Preview
```bash
npm run preview
```

### Debug in Browser
```typescript
console.log('user:', user);
console.log('data:', data);
// Use Chrome DevTools
```

### Check Supabase Connection
```typescript
// In any component
import { supabase } from '@/lib/supabase';

useEffect(() => {
  (async () => {
    const { data, error } = await supabase
      .from('users')
      .select('count(*)');
    console.log('DB test:', data, error);
  })();
}, []);
```

---

## ❌ Current Issues

### 26 TypeScript Errors

1. **Unused React imports** (12 errors)
   - Fix: Remove `import React` from files

2. **Unused variables** (7 errors)
   - Fix: Remove or prefix with `_`

3. **Type mismatches** (5 errors)
   - Fix in ComplaintSubmission.tsx: Change `categories: never[]` to `categories: string[]`

4. **Undefined properties** (1 error)
   - Fix in LiveTests.tsx: Use `test.viewers ?? 0`

### How to Fix

1. Run: `npm run typecheck`
2. Read error messages carefully
3. Remove unused imports/variables
4. Fix type mismatches
5. Test: `npm run build`

---

## 📚 Code Examples

### Example 1: Create a New Page

```typescript
// src/pages/MyNewPage.tsx
import React from 'react';
import { useAuth } from '@/context/AuthContext';

const MyNewPage = () => {
  const { userProfile } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">My New Page</h1>
        <p>Hello, {userProfile?.full_name}</p>
      </div>
    </div>
  );
};

export default MyNewPage;
```

### Example 2: Fetch Data in Component

```typescript
import { useEffect, useState } from 'react';
import { teacherService } from '@/services/teacherService';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await teacherService.getAllTeachers();
        setTeachers(data);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {teachers.map(teacher => (
        <div key={teacher.id}>{teacher.name}</div>
      ))}
    </div>
  );
};

export default TeacherList;
```

### Example 3: Form Submission

```typescript
import { useState } from 'react';
import { complaintService } from '@/services/complaintService';
import { useAuth } from '@/context/AuthContext';

const ComplaintForm = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: '',
    description: '',
    college_name: '',
    teacher_id: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await complaintService.submitComplaint(user.id, form);
      setSuccess(true);
      setForm({ title: '', description: '', college_name: '', teacher_id: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.title}
        onChange={(e) => setForm({...form, title: e.target.value})}
        placeholder="Title"
      />
      <button type="submit">Submit</button>
      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">Submitted!</div>}
    </form>
  );
};

export default ComplaintForm;
```

---

## 🚦 Development Workflow

### 1. Create Feature Branch
```bash
git checkout -b feature/my-feature
```

### 2. Make Changes
```bash
# Edit files in src/
# Run dev server
npm run dev
```

### 3. Test & Fix
```bash
npm run typecheck
npm run lint
npm run build
```

### 4. Commit Changes
```bash
git add .
git commit -m "feat: add my-feature"
```

### 5. Push & Create PR
```bash
git push origin feature/my-feature
# Create pull request on GitHub
```

---

## 📖 Documentation Files

| File | Content |
|------|---------|
| `PLACEMENT_PORTAL_GUIDE.md` | Placement portal features |
| `PROJECT_DEEP_DIVE.md` | Complete project analysis |
| `ARCHITECTURE_GUIDE.md` | System design & diagrams |
| `QUICK_START_GUIDE.md` | This file! |

---

## 🆘 Need Help?

### Check Errors
```bash
npm run typecheck    # TypeScript errors
npm run lint         # Linting issues
npm run build        # Build errors
```

### Check Logs
- Browser console (F12)
- Terminal output
- Supabase dashboard logs

### Debug
- Add `console.log()` statements
- Use browser DevTools debugger
- Check Supabase dashboard

### Common Issues

**"Cannot find module '@/lib/supabase'"**
→ Check path aliases in `tsconfig.json`

**"VITE_SUPABASE_URL is undefined"**
→ Check `.env` file is present and readable

**"User not authenticated"**
→ Check AuthContext is wrapping app
→ Check token hasn't expired

**"Database connection failed"**
→ Check internet connection
→ Check Supabase project is active
→ Check credentials in `.env`

---

## 📞 Quick Links

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase Docs](https://supabase.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Vite Docs](https://vitejs.dev)

---

## ✅ Pre-Deployment Checklist

- [ ] All TypeScript errors fixed
- [ ] All linting issues resolved
- [ ] `npm run build` succeeds
- [ ] Database migrations applied
- [ ] RLS policies configured
- [ ] Environment variables set
- [ ] Tests written and passing
- [ ] No console errors in production build
- [ ] Performance acceptable
- [ ] Security audit passed

---

**Last Updated:** November 27, 2024
**Quick Reference Version:** 1.0
