import {
  Box,
  Center,
  Heading,
  HStack,
  Span,
  Table,
  VStack,
} from "@chakra-ui/react";

import { ChartIcon } from "./icons/other-icons";

import { Button } from "./components/ui/button";
import { useState } from "react";

interface PromptButtonProps {
  icon?: React.ReactElement;
  description: string;
  onClick?: () => void;
}

function PromptButton(props: PromptButtonProps) {
  const { icon, description, onClick } = props;
  return (
    <Button
      variant="outline"
      borderRadius="full"
      bgColor="white"
      onClick={onClick}
    >
      {icon}
      <Span color="fg.subtle">{description}</Span>
    </Button>
  );
}

export function MiddleSection() {
  const [showMatchHistory, setShowMatchHistory] = useState(false);

  const players = [
    { id: 1, name: "Leo", wins: 0, matches: 0, elo: 1000 },
    { id: 2, name: "Serrano", wins: 0, matches: 0, elo: 1000 },
    { id: 3, name: "Lost", wins: 0, matches: 0, elo: 1000 },
    { id: 4, name: "António", wins: 0, matches: 0, elo: 1000 },
    { id: 5, name: "Mesquita", wins: 0, matches: 0, elo: 1000 },
    { id: 6, name: "Rodrigo", wins: 0, matches: 0, elo: 1000 },
    { id: 7, name: "Gonçalo Pereira", wins: 0, matches: 0, elo: 1000 },
    { id: 8, name: "Gameiro", wins: 0, matches: 0, elo: 1000 },
    { id: 9, name: "Manuel", wins: 0, matches: 0, elo: 1000 },
    { id: 10, name: "Gonçalo Oliveira", wins: 0, matches: 0, elo: 1000 },
    { id: 11, name: "JP", wins: 0, matches: 0, elo: 1000 },
    { id: 12, name: "Gonçalo Pereira 2", wins: 0, matches: 0, elo: 1000 },
    { id: 13, name: "Rodrigo G.", wins: 0, matches: 0, elo: 1000 },
    { id: 14, name: "Quinaz", wins: 0, matches: 0, elo: 1000 },
    { id: 15, name: "Tiago", wins: 0, matches: 0, elo: 1000 },
    { id: 16, name: "André Oliveira", wins: 0, matches: 0, elo: 1000 },
    { id: 17, name: "Sérgio", wins: 0, matches: 0, elo: 1000 },
    { id: 18, name: "Storti", wins: 0, matches: 0, elo: 1000 },
    { id: 19, name: "Dani", wins: 0, matches: 0, elo: 1000 },
    { id: 20, name: "Dimitrios", wins: 0, matches: 0, elo: 1000 },
    { id: 21, name: "Lourenço", wins: 0, matches: 0, elo: 1000 },
  ];

  const matches = [
    {
      id: 1,
      teamWhite: [2, 20, 1, 3, 7],
      teamBlack: [8, 9, 5, 4, 21],
      win: "B",
    },

    {
      id: 2,
      teamWhite: [5, 4, 6, 3, 8],
      teamBlack: [1, 2, 11, 12, 13],
      win: "W",
    },

    {
      id: 3,
      teamWhite: [19, 2, 16, 18, 5],
      teamBlack: [1, 8, 4, 6, 3],
      win: "W",
    },

    {
      id: 4,
      teamWhite: [2, 4, 13, 14, 15],
      teamBlack: [1, 5, 10, 16, 17],
      win: "W",
    },

    // {
    //   id: 5,
    //   teamWhite: [2, 4, 14, 3, 5],
    //   teamBlack: [1, 17, 8, 6, 9],
    //   win: "B",
    // },
  ];

  //serrano antonio quinaz lost mesquita
  // leo sergio gameiro rodrigo manuel

  // const updatedPlayers = players.map((player) => ({ ...player })); // make a copy to avoid mutating original

  // matches.forEach((match) => {
  //   const allPlayers = [...match.teamWhite, ...match.teamBlack];
  //   const winningTeam = match.win === "W" ? match.teamWhite : match.teamBlack;

  //   allPlayers.forEach((playerId) => {
  //     const player = updatedPlayers.find((p) => p.id === playerId);
  //     if (player) {
  //       player.matches += 1;
  //       if (winningTeam.includes(playerId)) {
  //         player.wins += 1;
  //       }
  //     }
  //   });
  // });

  const K = 32;
  const updatedPlayers = players.map((p) => ({ ...p }));

  matches.forEach((match) => {
    const whiteTeam = match.teamWhite.map(
      (id) => updatedPlayers.find((p) => p.id === id)!
    );
    const blackTeam = match.teamBlack.map(
      (id) => updatedPlayers.find((p) => p.id === id)!
    );

    const whiteAvgElo =
      whiteTeam.reduce((sum, p) => sum + p.elo, 0) / whiteTeam.length;
    const blackAvgElo =
      blackTeam.reduce((sum, p) => sum + p.elo, 0) / blackTeam.length;

    const whiteWon = match.win === "W";

    whiteTeam.forEach((player) => {
      player.matches += 1;
      if (whiteWon) player.wins += 1;

      const expected = 1 / (1 + Math.pow(10, (blackAvgElo - player.elo) / 400));
      const actual = whiteWon ? 1 : 0;
      player.elo += Math.round(K * (actual - expected));
    });

    blackTeam.forEach((player) => {
      player.matches += 1;
      if (!whiteWon) player.wins += 1;

      const expected = 1 / (1 + Math.pow(10, (whiteAvgElo - player.elo) / 400));
      const actual = whiteWon ? 0 : 1;
      player.elo += Math.round(K * (actual - expected));
    });
  });

  return (
    <Center flex="1" backgroundColor="gray.100" mt={6} px={{ base: 2, md: 6 }}>
      <VStack gap="6" width="full" maxW="container.lg">
        {showMatchHistory && (
          <>
            <Heading size={{ base: "xl", md: "3xl" }} color="black">
              Match History
            </Heading>
            <Box
              borderRadius="xl"
              boxShadow="xl"
              overflowX="auto"
              p={{ base: 2, md: 4 }}
              bgColor="white"
              width={{ base: "full", md: "1000px" }}
            >
              <Table.Root size="md">
                <Table.Header>
                  <Table.Row
                    bgColor="white"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    <Table.ColumnHeader color="black">Match</Table.ColumnHeader>
                    <Table.ColumnHeader color="black">
                      Team White
                    </Table.ColumnHeader>
                    <Table.ColumnHeader color="black">
                      Team Black
                    </Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {matches.map((match) => {
                    const whiteNames = match.teamWhite
                      .map((id) => players.find((p) => p.id === id)?.name || "")
                      .join(" | ");
                    const blackNames = match.teamBlack
                      .map((id) => players.find((p) => p.id === id)?.name || "")
                      .join(" | ");

                    const whiteWon = match.win === "W";

                    return (
                      <Table.Row
                        key={match.id}
                        bgColor="white"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        <Table.Cell color="teal.600" fontWeight="600">
                          #{match.id}
                        </Table.Cell>

                        <Table.Cell
                          bgColor={whiteWon ? "green.100" : "red.100"}
                          color={whiteWon ? "green.700" : "orange.600"}
                          fontWeight="500"
                          borderRadius="md"
                        >
                          {whiteNames}
                        </Table.Cell>

                        <Table.Cell
                          bgColor={!whiteWon ? "green.100" : "red.100"}
                          fontWeight="500"
                          color={!whiteWon ? "green.700" : "orange.600"}
                          borderRadius="md"
                        >
                          {blackNames}
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table.Root>
            </Box>
            <HStack gap="2">
              <PromptButton
                icon={<ChartIcon color="teal.400" fontSize="lg" />}
                description="Standings"
                onClick={() => setShowMatchHistory((prev) => !prev)}
              />
            </HStack>
          </>
        )}

        {!showMatchHistory && (
          <>
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
                  <Table.Row
                    bgColor="white"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    <Table.ColumnHeader color="black">
                      Position
                    </Table.ColumnHeader>
                    <Table.ColumnHeader color="black">
                      Player
                    </Table.ColumnHeader>

                    {/* <Table.ColumnHeader color="black">Goals</Table.ColumnHeader> */}
                    {/* <Table.ColumnHeader color="black">Assists</Table.ColumnHeader> */}
                    <Table.ColumnHeader textAlign="middle">
                      Matches
                    </Table.ColumnHeader>
                    <Table.ColumnHeader color="black">Wins</Table.ColumnHeader>
                    <Table.ColumnHeader>Win Rate</Table.ColumnHeader>
                    {/* <Table.ColumnHeader textAlign="middle">
                      Elo
                    </Table.ColumnHeader> */}
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {[...updatedPlayers]
                    .sort((a, b) => b.wins - a.wins) // sort descending by wins
                    .map((item, index) => (
                      <Table.Row
                        key={index}
                        bgColor="white"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        <Table.Cell color="teal.600" fontWeight="600">
                          {index + 1}
                        </Table.Cell>
                        <Table.Cell color="green.700" fontWeight="400">
                          {item.name}
                        </Table.Cell>
                        {/* <Table.Cell color="yellow.600">{item.goals}</Table.Cell> */}
                        {/* <Table.Cell color="yellow.600">{item.assists}</Table.Cell> */}
                        <Table.Cell color="yellow.600" textAlign="middle">
                          {item.matches}
                        </Table.Cell>
                        <Table.Cell color="yellow.600" textAlign="middle">
                          {item.wins}
                        </Table.Cell>
                        <Table.Cell
                          textAlign="middle"
                          color={
                            item.matches === 0
                              ? "gray.400"
                              : item.wins / item.matches >= 0.7
                              ? "green.500"
                              : item.wins / item.matches >= 0.5
                              ? "yellow.500"
                              : item.wins / item.matches >= 0.25
                              ? "orange.400"
                              : "red.500"
                          }
                          fontWeight="600"
                        >
                          {item.matches === 0
                            ? "—"
                            : `${Math.round(
                                (item.wins / item.matches) * 100
                              )}%`}
                        </Table.Cell>
                        {/* <Table.Cell
                          color="blue.600"
                          textAlign="middle"
                          fontWeight="600"
                        >
                          {item.elo}
                        </Table.Cell> */}
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table.Root>
            </Box>
            {/* <HStack gap="2"> */}
            {/* <Center fontSize="xs" color="gray.400">
            Win: +3 Elo | Loss: -3 Elo | Matchmaking is based on current player
            Elo
          </Center> */}
            {/* </HStack> */}
            <HStack gap="2">
              {/* <PromptButton
                icon={<BirthdayIcon color="cyan.400" fontSize="lg" />}
                description="Create teams"
              /> */}
              <PromptButton
                icon={<ChartIcon color="teal.400" fontSize="lg" />}
                description="Match history"
                onClick={() => setShowMatchHistory((prev) => !prev)}
              />

              {/* <PromptButton description="More" /> */}
            </HStack>
          </>
        )}
      </VStack>
    </Center>
  );
}
