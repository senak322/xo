// import Image from "next/image";

import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";

export default async function Home() {

  const games = await prisma.game.findMany()

  console.log(games);
  

  return (
    <div>
      <Button size={"lg"} >Hello world</Button>
    </div>
  );
}
