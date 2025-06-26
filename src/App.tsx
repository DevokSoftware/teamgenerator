import { MiddleSection } from "./middle-section";

import { SidebarProvider } from "./sidebar-context";

function App() {
  return (
    <SidebarProvider>
      <MiddleSection />
    </SidebarProvider>
  );
}

export default App;
