// import Image from "next/image";

import { Gameslist } from "@/features/games-list/server";
import { prisma } from "@/shared/lib/db";


export default async function Home() {
  const games = await prisma.game.findMany();

  console.log(games);

  return (
    <div>
      <Gameslist />
    </div>
  );
}
