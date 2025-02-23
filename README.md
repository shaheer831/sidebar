Here is a well-explained description for your `Sidebar.tsx` component that you can include in your GitHub repository:

---

# Sidebar Component for React Dashboard

## Overview

This `Sidebar.tsx` component is a fully functional, responsive sidebar navigation menu built for React applications. It includes features such as:

- **Collapsible Sidebar:** Users can toggle between an expanded and collapsed state.
- **Active Route Highlighting:** Highlights the currently active route.
- **Search Functionality:** Allows users to filter sidebar menu items in real-time.
- **SVG Logo Support:** Displays a customizable logo.
- **React Icons Integration:** Uses `react-icons` for a modern UI.
- **Smooth Animations:** Transitions for better UX.

## Features & Functionality

### 1. **Collapsible Sidebar**
   - Users can collapse or expand the sidebar by clicking the toggle button.
   - When collapsed, the sidebar hides labels, showing only icons.

### 2. **Active Route Highlighting**
   - The component detects the current route and highlights the corresponding menu item.
   - Uses `useEffect` to track `location.pathname`.

### 3. **Search Functionality**
   - Allows users to search for menu items dynamically.
   - Filters sidebar options based on the input query.

### 4. **Structured Navigation**
   - Includes essential sections such as:
     - **Dashboard**
     - **Inventory**
     - **Delivery**
     - **Users**
     - **Projects**
     - **Invoices**
     - **Reports**
     - **Messages**
     - **Info**
     - **Settings**

## Code Breakdown

### **State Management**
```tsx
const [isClose, setClose] = useState(false);
const [active, setActive] = useState("null");
const [searchQuery, setSearchQuery] = useState("");
```
- `isClose`: Controls sidebar visibility.
- `active`: Stores the currently active menu item.
- `searchQuery`: Stores the user's input for search filtering.

### **Handling Active Route Highlighting**
```tsx
useEffect(() => {
  const currentRoute = routes.find(route => route.path === location.pathname);
  if (currentRoute) {
    setActive(currentRoute.name || "");
  }
}, [location.pathname]);
```
- This effect runs whenever the location changes, setting the active route accordingly.

### **Search Filtering**
```tsx
const filteredRoutes = routes.filter(route =>
  route.name?.toLowerCase().includes(searchQuery.toLowerCase())
);
```
- Filters the menu items based on the user’s input.

### **Sidebar Toggle Button**
```tsx
<button onClick={() => setClose(!isClose)}>
  <svg className={`w-5 ${!isClose ? "rotate-180" : ""} transition-all duration-300`}>
    {/* Arrow icon */}
  </svg>
  <span className={`${isClose ? "hidden" : "block"}`}>Hide</span>
</button>
```
- Toggles between expanded and collapsed states.

### **Rendering Menu Items**
```tsx
{filteredRoutes.map((route) => (
  <Link to={route.path || ""}>
    <div className={`text-sm flex items-center ${active === route.name ? "text-[#2b5a91]" : ""}`}>
      {route.icon}
      <span className={`${isClose ? "hidden" : "block"}`}>{route.name}</span>
    </div>
  </Link>
))}
```
- Maps through `filteredRoutes` to dynamically display menu items.
- Highlights the active item.

## Installation & Usage

### **Install Dependencies**
Make sure you have the required dependencies installed:

```sh
npm install react-icons react-router-dom
```

### **Import and Use the Component**
```tsx
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-5">Main Content Here</main>
    </div>
  );
}

export default App;
```

## Customization

- **Icons:** Replace `react-icons` with your preferred icons.
- **Routes:** Modify the `routes` array to suit your application.
- **Styles:** Customize Tailwind CSS classes as needed.

## License
This project is open-source under the MIT License.

---
