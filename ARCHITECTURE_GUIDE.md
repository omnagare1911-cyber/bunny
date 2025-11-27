# TRB Architecture & System Design

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACE LAYER                      │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    React Components                       │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │ Header (Navigation, Auth Status, Mobile Menu)       │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  │  ┌──────────────────┬────────────────────────────────┐  │  │
│  │  │ Pages            │ Components                      │  │  │
│  │  │ - Home           │ - Hero Section                  │  │  │
│  │  │ - Dashboard      │ - How It Works                  │  │  │
│  │  │ - Complaints     │ - Live Tests                    │  │  │
│  │  │ - Profiles       │ - Forms                         │  │  │
│  │  │ - Admin          │ - Cards                         │  │  │
│  │  │ - Placement      │ - Tables                        │  │  │
│  │  └──────────────────┴────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │ Footer (Links, Social, Copyright)                   │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              Styling & Icon System                        │  │
│  │  ┌──────────────────┬────────────────────────────────┐  │  │
│  │  │ Tailwind CSS     │ Lucide React Icons             │  │  │
│  │  │ - Utilities      │ - Navigation icons             │  │  │
│  │  │ - Responsive     │ - Status icons                 │  │  │
│  │  │ - Animations     │ - Feature icons                │  │  │
│  │  └──────────────────┴────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STATE MANAGEMENT LAYER                        │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              React Context API                           │  │
│  │                                                           │  │
│  │  AuthContext                                             │  │
│  │  ├── user (Current auth user)                            │  │
│  │  ├── userProfile (User data from DB)                     │  │
│  │  ├── session (Auth session)                              │  │
│  │  ├── loading (Auth state)                                │  │
│  │  ├── error (Auth errors)                                 │  │
│  │  └── methods                                             │  │
│  │      ├── signUp()                                        │  │
│  │      ├── signIn()                                        │  │
│  │      ├── signOut()                                       │  │
│  │      └── updateProfile()                                 │  │
│  │                                                           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                   │
│  Local State (useState)                                          │
│  ├── Form inputs                                                │
│  ├── Modal/drawer states                                        │
│  ├── UI toggles                                                 │
│  └── Temporary data                                             │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    BUSINESS LOGIC LAYER                          │
│                                                                   │
│  Service Layer (Database Operations)                            │
│  ┌─────────────────────┬────────────────┬────────────────────┐ │
│  │ teacherService      │ complaintServ. │ evaluationService  │ │
│  ├─────────────────────┼────────────────┼────────────────────┤ │
│  │ getAllTeachers()    │ submitComp()   │ createEval()       │ │
│  │ getTeacherById()    │ getComplaints()│ getEvaluation()    │ │
│  │ searchTeachers()    │ updateStatus() │ updateScores()     │ │
│  │ filterBySubject()   │ getByTeacher() │ getFeedback()      │ │
│  │ getWithEvals()      │               │ submitFeedback()   │ │
│  │ createTeacher()     │               │                    │ │
│  │ updateTeacher()     │               │                    │ │
│  └─────────────────────┴────────────────┴────────────────────┘ │
│                                                                   │
│  Validation & Error Handling                                    │
│  ├── Input validation                                           │
│  ├── Type checking                                              │
│  ├── Error serialization                                        │
│  └── Error logging                                              │
│                                                                   │
│  Data Transformation                                            │
│  ├── Format dates                                               │
│  ├── Calculate derived values                                   │
│  └── Aggregate data                                             │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    API & INTEGRATION LAYER                       │
│                                                                   │
│  Supabase Client                                                │
│  ├── Authentication API                                         │
│  │   ├── signUp()                                              │
│  │   ├── signInWithPassword()                                  │
│  │   ├── signOut()                                             │
│  │   └── onAuthStateChange()                                   │
│  │                                                              │
│  ├── Database API (PostgREST)                                  │
│  │   ├── SELECT queries (.select())                            │
│  │   ├── INSERT operations (.insert())                         │
│  │   ├── UPDATE operations (.update())                         │
│  │   ├── Filtering (.eq(), .or())                              │
│  │   ├── Ordering (.order())                                   │
│  │   └── Joins (.select('*, relation(*)'))                    │
│  │                                                              │
│  └── Realtime Subscriptions                                    │
│      └── .on('postgres_changes', ...)                          │
│                                                                   │
│  Environment Configuration                                      │
│  ├── VITE_SUPABASE_URL                                         │
│  └── VITE_SUPABASE_ANON_KEY                                    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    DATABASE LAYER                                │
│                                                                   │
│  PostgreSQL Database (Supabase Hosted)                          │
│                                                                   │
│  ┌────────────────────┐                                         │
│  │ users              │                                         │
│  ├────────────────────┤                                         │
│  │ id (PK, UUID)      │                                         │
│  │ email (unique)     │                                         │
│  │ full_name          │                                         │
│  │ user_type          │◄─────┐                                 │
│  │ avatar_url         │      │                                 │
│  │ timestamps         │      │                                 │
│  └────────────────────┘      │ Relationships                   │
│           ▲                  │                                 │
│           │                  │                                 │
│  ┌────────┴──────────────────┴────────────────────────────┐  │
│  │                                                         │  │
│  │  ┌──────────────────┐  ┌──────────────────────┐       │  │
│  │  │ teachers         │  │ complaints           │       │  │
│  │  ├──────────────────┤  ├──────────────────────┤       │  │
│  │  │ id (PK)          │  │ id (PK)              │       │  │
│  │  │ name             │  │ student_id (FK)      │       │  │
│  │  │ subject          │  │ teacher_id (FK)      │       │  │
│  │  │ college          │  │ title, description   │       │  │
│  │  │ avatar_url       │  │ status               │       │  │
│  │  │ bio              │  │ college_name         │       │  │
│  │  │ timestamps       │  │ timestamps           │       │  │
│  │  └────────┬─────────┘  └────────┬─────────────┘       │  │
│  │           │                     │                    │  │
│  │           │                     │                    │  │
│  │  ┌────────▼──────────────────────▼───────────────┐  │  │
│  │  │ evaluations                                   │  │  │
│  │  ├───────────────────────────────────────────────┤  │  │
│  │  │ id (PK)                                       │  │  │
│  │  │ teacher_id (FK)                               │  │  │
│  │  │ complaint_id (FK, nullable)                   │  │  │
│  │  │ oral_score, practical_score, knowledge_score │  │  │
│  │  │ overall_rating                                │  │  │
│  │  │ status (scheduled|live|completed)             │  │  │
│  │  │ timestamps                                    │  │  │
│  │  └────────────┬────────────────────────────────┘  │  │
│  │               │                                   │  │
│  │  ┌────────────▼───────────────────────────┐      │  │
│  │  │ evaluation_feedback                   │      │  │
│  │  ├───────────────────────────────────────┤      │  │
│  │  │ id (PK)                               │      │  │
│  │  │ student_id (FK)                       │      │  │
│  │  │ evaluation_id (FK)                    │      │  │
│  │  │ rating (1-5)                          │      │  │
│  │  │ feedback_text                         │      │  │
│  │  │ created_at                            │      │  │
│  │  └───────────────────────────────────────┘      │  │
│  │                                                 │  │
│  └─────────────────────────────────────────────────┘  │
│                                                                   │
│  Row Level Security (RLS) Policies                              │
│  ├── Restrict data access by user role                         │
│  ├── Students see only their own data                          │
│  ├── Teachers see their profile & complaints                   │
│  └── Admins have full access                                   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagrams

### User Registration Flow

```
User Input
(Email, Password, Name, Role)
    ↓
Validation ← Must meet requirements
    ↓
supabase.auth.signUp()
    ↓
Auth Entry Created
    ↓
User Profile Created in DB
    ↓
JWT Token Generated
    ↓
AuthContext Updated
    ↓
Redirect to Dashboard
```

### Complaint Submission Flow

```
User navigates to /submit-complaint
    ↓
Load form with fields
├── Complainer info (name, email, phone)
├── College info
├── Teacher selection
├── Category selection (Teaching Clarity, etc.)
├── Complaint text
└── Evidence upload (if any)
    ↓
Form Validation
├── Check required fields
├── Validate email format
├── Validate phone
└── Check file type/size
    ↓
User clicks Submit
    ↓
complaintService.submitComplaint()
    ↓
INSERT into complaints table
    ↓
Create evaluation record
    ↓
Update complaint status to 'submitted'
    ↓
Show success message
    ↓
Redirect to dashboard
```

### Teacher Evaluation Flow

```
Admin schedules evaluation
    ↓
Create evaluation record (status: scheduled)
    ↓
Set scheduled_date and generate youtube_link
    ↓
Send notifications to students
    ↓
Users can see in /live-tests
    ↓
Click to join live evaluation
    ↓
Update evaluation status to 'live'
    ↓
Watch YouTube stream embedded
    ↓
Evaluation completes
    ↓
Update status to 'completed'
    ↓
Scores (oral, practical, knowledge) calculated
    ↓
Overall rating assigned
    ↓
Students can submit feedback
    ↓
Feedback stored in evaluation_feedback table
```

### Search & Filter Flow

```
User enters search query
    ↓
Input validation
    ↓
Service method called
├── searchTeachers(query)
├── getTeachersBySubject(subject)
└── getTeachersByCollege(college)
    ↓
Build SQL query
├── Use .select() with filters
├── Apply .eq() or .or()
└── Add .order() for sorting
    ↓
Execute query against DB
    ↓
Transform results (if needed)
    ↓
Return data to component
    ↓
Render results list
    ↓
Display loading/empty states
```

---

## Component Hierarchy

```
App (Main)
├── Header
│   ├── Logo/Branding
│   ├── Navigation
│   │   ├── NavLink
│   │   ├── NavButton
│   │   └── QuickLinksDropdown
│   ├── Auth Button
│   └── Mobile Menu
│
├── Routes
│   ├── Public Routes
│   │   ├── HomePage
│   │   │   ├── Hero
│   │   │   ├── HowItWorks
│   │   │   └── LiveTests (Preview)
│   │   ├── LoginPage
│   │   ├── RegisterPage
│   │   ├── AboutPage
│   │   ├── ContactPage
│   │   ├── WhoWeArePage
│   │   └── HowItWorksPage
│   │
│   └── Protected Routes (AuthContext)
│       ├── StudentDashboard
│       │   ├── Stats Cards
│       │   ├── Quick Actions
│       │   └── Recent Complaints Table
│       ├── ComplaintSubmission
│       │   ├── Form Fields
│       │   ├── Validation
│       │   └── File Upload
│       ├── TeacherProfilesPage
│       │   ├── Search Bar
│       │   ├── Filters
│       │   └── Teacher Cards
│       ├── TeacherProfile
│       │   ├── Profile Header
│       │   ├── Bio & Stats
│       │   ├── Evaluation History
│       │   └── Action Buttons
│       ├── LiveTestsPage
│       │   ├── Live Tests List
│       │   ├── Status Badge
│       │   └── Join Button
│       ├── LiveTestPage
│       │   ├── YouTube Embed
│       │   ├── Live Chat
│       │   ├── Evaluation Info
│       │   └── Feedback Form
│       ├── PlacementSupport
│       │   ├── Resource Cards
│       │   ├── Job Listings
│       │   └── Filter Section
│       └── AdminDashboard
│           ├── User Management
│           ├── Evaluation Controls
│           └── Analytics Dashboard
│
└── Footer
    ├── Links
    ├── Social Media
    └── Copyright
```

---

## State Management Strategy

### Global State (AuthContext)

```typescript
AuthContext
├── Provider wraps entire app
├── Manages authentication state
│   ├── Current user (from Supabase)
│   ├── User profile (from DB)
│   ├── Session info
│   └── Loading/error states
├── Provides auth methods
│   ├── signUp
│   ├── signIn
│   ├── signOut
│   └── updateProfile
└── Listens to auth state changes
    └── Re-renders when auth changes
```

### Local State (Components)

```
Form Components
├── Input values (useState)
├── Validation errors (useState)
├── Submission state (useState)
└── Success messages (useState)

Modal/Dialog Components
├── Open/close state (useState)
└── Selected item (useState)

List Components
├── Items list (useState or prop)
├── Current sort/filter (useState)
└── Pagination state (useState)
```

### Side Effects (useEffect)

```
On mount:
├── Initialize auth state
├── Fetch user profile
├── Load initial data
└── Set up subscriptions

On route change:
├── Load route-specific data
├── Clear previous state
└── Update page title

On auth state change:
├── Fetch new user profile
├── Redirect to login if needed
└── Clear sensitive data
```

---

## Error Handling Strategy

### Error Types & Handling

```
Authentication Errors
├── Invalid credentials
├── User not found
├── Email already exists
└── Password too weak
    → Show user-friendly message

Database Errors
├── Connection failed
├── Query timeout
├── Constraint violation
└── Permission denied
    → Log error, show generic message

Validation Errors
├── Missing required fields
├── Invalid format
├── File too large
└── Type mismatch
    → Highlight field, show specific message

Network Errors
├── No internet
├── Request timeout
├── Server error (5xx)
└── Rate limited
    → Retry logic + user notification
```

### Error Handling Pattern

```typescript
try {
  const result = await service.operation();
  // Handle success
  setState(result);
  showSuccess("Operation successful");
} catch (error) {
  // Log error for debugging
  console.error('Error:', error);

  // Categorize error
  if (error instanceof AuthError) {
    // Handle auth error
  } else if (error instanceof ValidationError) {
    // Handle validation error
  } else {
    // Handle generic error
  }

  // Show user-friendly message
  setError(error.message || "Something went wrong");

  // Track/report error
  logErrorToService(error);
}
```

---

## API Patterns

### Service Method Pattern

```typescript
export const exampleService = {
  async getItems() {
    try {
      const { data, error } = await supabase
        .from('items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  }
};
```

### Component Usage Pattern

```typescript
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await exampleService.getItems();
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  fetchItems();
}, []);
```

---

## Security Considerations

### Frontend Security

1. **Authentication**
   - Store JWT securely (localStorage/sessionStorage)
   - Verify token on route access
   - Clear token on logout

2. **Authorization**
   - Check user role before rendering
   - Disable sensitive actions for unauthorized users
   - Redirect to login if unauthorized

3. **Data Protection**
   - Never log sensitive data (passwords, tokens)
   - Sanitize user input
   - Validate on client and server

4. **HTTPS Only**
   - All API calls via HTTPS
   - Environment variables not exposed client-side

### Backend Security (Supabase)

1. **Row Level Security**
   - Restrict table access by user ID
   - Teachers see own profile + complaints
   - Students see own complaints + evaluations
   - Admins see all data

2. **Policies**
   - SELECT: User can read own data
   - INSERT: User can insert own data
   - UPDATE: User can update own data
   - DELETE: Restricted to admins

3. **Database**
   - Foreign keys enforce referential integrity
   - Timestamps track changes
   - Audit trails for sensitive operations

---

## Performance Optimization

### Current Optimizations

- **Vite build:** Fast development + production build
- **Code splitting:** Route-based splitting (React Router)
- **Lazy loading:** Components load on demand
- **Tree shaking:** Unused code removed

### Potential Improvements

1. **Caching**
   - Cache teacher list (doesn't change often)
   - Cache user profile after first fetch
   - Use React Query for data synchronization

2. **Pagination**
   - Large lists should paginate (not fetch all)
   - Implement cursor-based pagination

3. **Image Optimization**
   - Compress avatars
   - Use responsive images
   - Implement lazy loading for images

4. **Bundle Size**
   - Analyze bundle with `vite build --analyze`
   - Remove unused dependencies
   - Code split large modules

---

## Testing Strategy

### Unit Tests (Not Implemented)

```typescript
// Service tests
describe('teacherService', () => {
  test('getAllTeachers returns array', async () => {
    const teachers = await teacherService.getAllTeachers();
    expect(Array.isArray(teachers)).toBe(true);
  });
});
```

### Integration Tests (Not Implemented)

```typescript
// Auth flow test
describe('Auth Flow', () => {
  test('User can register and login', async () => {
    // Register
    // Login
    // Verify authenticated
    // Logout
  });
});
```

### E2E Tests (Not Implemented)

```typescript
// Using Cypress or Playwright
describe('Complaint Submission', () => {
  test('Student can submit complaint', () => {
    // Navigate to form
    // Fill form
    // Submit
    // Verify success
  });
});
```

---

## Deployment Architecture

### Development Environment

```
Local Machine
├── npm run dev (Vite dev server)
├── Hot Module Replacement (HMR)
├── TypeScript compilation
└── Live reloading
```

### Production Environment

```
Build Process
├── npm run build (Vite optimization)
├── Minification & bundling
├── Source map generation
└── Output to /dist

Hosting Options
├── Vercel (recommended for Vite)
├── Netlify
├── AWS S3 + CloudFront
└── Self-hosted server

Environment Variables
├── VITE_SUPABASE_URL
└── VITE_SUPABASE_ANON_KEY
```

---

## Monitoring & Analytics

### Current Monitoring

- Console error logging
- Browser dev tools

### Recommended Monitoring

```
Error Tracking
├── Sentry integration
├── Error boundaries
└── Error logging service

Performance Monitoring
├── Web Vitals tracking
├── API response times
└── Component render times

User Analytics
├── Page views
├── User interactions
├── Conversion tracking
└── Funnel analysis
```

---

## Future Scalability

### Database Scaling

- **Read Replicas:** For high-traffic queries
- **Indexing:** Add indexes on frequently queried columns
- **Archiving:** Move old complaints to archive table

### API Scaling

- **Caching Layer:** Redis for frequently accessed data
- **Rate Limiting:** Prevent abuse
- **CDN:** Serve static assets globally

### Application Scaling

- **Microservices:** Split into separate services
- **Message Queue:** For async operations
- **Load Balancing:** Distribute requests across servers

---

**Last Updated:** November 27, 2024
