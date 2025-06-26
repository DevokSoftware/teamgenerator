import {
  Box,
  Center,
  Heading,
  HStack,
  Span,
  Table,
  VStack,
} from "@chakra-ui/react";

import { BirthdayIcon, ChartIcon } from "./icons/other-icons";

import { Button } from "./components/ui/button";

interface PromptButtonProps {
  icon?: React.ReactElement;
  description: string;
}

function PromptButton(props: PromptButtonProps) {
  const { icon, description } = props;
  return (
    <Button variant="outline" borderRadius="full" bgColor="white">
      {icon}
      <Span color="fg.subtle">{description}</Span>
    </Button>
  );
}

export function MiddleSection() {
  const standings = [
    {
      id: 1,
      position: 1,
      player: "Leo",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 2,
      position: 2,
      player: "Serrano",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 3,
      position: 3,
      player: "Lost",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 4,
      position: 4,
      player: "António",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 5,
      position: 5,
      player: "Mesquita",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 6,
      position: 6,
      player: "Rodrigo",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 7,
      position: 7,
      player: "Gonçalo Pereira",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 8,
      position: 8,
      player: "Gameiro",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 9,
      position: 9,
      player: "Manuel",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 10,
      position: 10,
      player: "Gonçalo Oliveira",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 11,
      position: 11,
      player: "JP",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 12,
      position: 12,
      player: "Gonçalo Pereira 2",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 13,
      position: 13,
      player: "Rodrigo 2",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
    {
      id: 14,
      position: 14,
      player: "Quinaz",
      elo: 1000,
      wins: 0,
      goals: 0,
      assists: 0,
    },
  ];
  return (
    <Center flex="1" backgroundColor="gray.100" mt={6} px={{ base: 2, md: 6 }}>
      <VStack gap="6" width="full" maxW="container.lg">
        <Heading size={{ base: "xl", md: "3xl" }} color="black">
          Standings
        </Heading>

        <Box
          borderRadius="xl"
          boxShadow="xl"
          overflowX="auto"
          p={{ base: 2, md: 4 }}
          bgColor="white"
          width={{ base: "full", md: "1000px" }}
        >
          <Table.Root key="striped" size="md">
            <Table.Header>
              <Table.Row bgColor="white" fontSize={{ base: "sm", md: "md" }}>
                <Table.ColumnHeader color="black">Position</Table.ColumnHeader>
                <Table.ColumnHeader color="black">Player</Table.ColumnHeader>

                <Table.ColumnHeader color="black">Goals</Table.ColumnHeader>
                <Table.ColumnHeader color="black">Assists</Table.ColumnHeader>
                <Table.ColumnHeader color="black">Wins</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="middle">Elo</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {standings.map((item) => (
                <Table.Row
                  key={item.position}
                  bgColor="white"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  <Table.Cell color="teal.600" fontWeight="600">
                    {item.position}
                  </Table.Cell>
                  <Table.Cell color="green.700" fontWeight="400">
                    {item.player}
                  </Table.Cell>
                  <Table.Cell color="yellow.600">{item.goals}</Table.Cell>
                  <Table.Cell color="yellow.600">{item.assists}</Table.Cell>
                  <Table.Cell color="yellow.600" textAlign="middle">
                    {item.wins}
                  </Table.Cell>
                  <Table.Cell
                    textAlign="middle"
                    color="teal.600"
                    fontWeight="600"
                  >
                    {item.elo}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
        <HStack gap="2">
          <PromptButton
            icon={<BirthdayIcon color="cyan.400" fontSize="lg" />}
            description="Create teams"
          />
          <PromptButton
            icon={<ChartIcon color="teal.400" fontSize="lg" />}
            description="Match history"
          />

          <PromptButton description="More" />
        </HStack>

        <HStack gap="2">
          <Center fontSize="xs" color="gray.400">
            Win: +3 Elo | Loss: -3 Elo | Matchmaking is based on current player
            Elo
          </Center>
        </HStack>
      </VStack>
    </Center>
  );
}
