import { Box, Flex, Stack } from "@chakra-ui/react";
import { MiddleSection } from "./middle-section";

import { SidebarProvider } from "./sidebar-context";

function App() {
  return (
    <SidebarProvider>
      <Flex minH="100dvh">
        <Box flex="1">
          <Stack h="full" backgroundColor="gray.100">
            <MiddleSection />
          </Stack>
        </Box>
      </Flex>
    </SidebarProvider>
  );
}

export default App;
