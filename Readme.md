# Next.js Learning Journey 🚀

This repository documents my journey of learning Next.js, structured into three phases:

- **Phase 1: Routing**
- **Phase 2: Rendering**
- **Phase 3: Data Fetching**

Each phase consists of key concepts, implementations, and Next.js best practices that I explored.

---

## 📌 Phase 1: Routing

### Topics Covered:

- **Basic Routing**: Created routes like `/about`, `/profile`, `/panther`.
- **Nested Routes**: Implemented routes such as `/blog`, `/blog/blog1`, `/blog/blog2`.
- **Dynamic Routing**: Created dynamic routes:
  - `/products/[productid]`
  - `/products/[productid]/reviews/[reviewid]`
- **Catch-All Segments**: Used `[...slug]` and `[[...slug]]` for flexible routing.
- **Custom Not Found Pages**:
  - Created `not-found.jsx` and used `notFound()` to handle specific 404 pages.
- **Private Files in Routing**: Used `_filename` or `%5Ffilename` for private files.
- **Grouping Routes with Route Groups**: Organized routes efficiently without affecting URL structure.
- **Root Layout Implementation**: Created `RootLayout`, including Header and Footer.
- **Metadata Handling**:
  - Static Metadata using `metadata` object.
  - Dynamic Metadata using `generateMetadata` function.
  - Title metadata as string, object (`default`, `template`, `absolute`).
- **Programmatic Navigation**:
  - Used `<Link>` and `replace` prop.
  - Used `useRouter()` for navigation.
  - Created active links using `usePathname()`.
- **Parallel Routing**:
  - Handled unmatched routes using `default.jsx`.
  - Learned about parallel routing.
- **Error Handling**:
  - Created custom `error.jsx`.
  - Implemented global error handling with `global-error.jsx`.
- **Route Handlers & API Routes**:
  - Implemented GET, POST, PATCH, DELETE requests.
  - Used `Response` object to send responses.
  - Implemented dynamic route handlers (`/comment/[id]`).
  - Worked with middleware for headers, cookies, and conditional logic.
  - Implemented URL search params, redirects, and pagination.
  - Learned about interception routes and conditional routing in parallel routing.

---

## 📌 Phase 2: Rendering

### Topics Covered:

- **Loading States**:
  - Created `loading.jsx` for suspense-based loading indicators.
- **Templates in Next.js**:
  - Learned about `template.jsx` for consistent UI across nested layouts.
- **Nested Layouts**:
  - Implemented multiple layouts for different sections of the app.
- **Multiple Root Layouts**:
  - Used Route Groups to create unique root layouts per route.
- **Server & Client Components**:
  - Learned about rendering in server and client components.
  - Implemented `generateStaticParams` for static generation.
- **Streaming & Composition Patterns**:
  - Explored streaming in Next.js.
  - Learned about server-only and client-only patterns.
  - Used third-party packages in client components.
  - Implemented context providers for global state management.

---

## 📌 Phase 3: Data Fetching

### Topics Covered:

- **Fetching Data in Components**:
  - Fetched data in server components with loading & error handling.
  - Fetched data in client components.
- **Data Fetching Patterns**:
  - Parallel data fetching.
  - Sequential data fetching.
- **Fetching Data from Databases**:
  - Used Prisma and SQLite to fetch data directly from the server.
- **Data Mutation with Server Actions**:
  - Implemented create, update, and delete operations.
  - Used `useActionState` for handling form submissions.
  - Used `useFormStatus` to manage pending states in forms.

---

## 🏁 Summary

This repository serves as a structured learning log for Next.js. Each phase builds upon the last, covering essential concepts and advanced features. More updates to come as I progress further!

---

