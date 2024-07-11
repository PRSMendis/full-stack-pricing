import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import { Text, Title, Center, Code } from "@mantine/core";
import { SearchArray } from "./_components/searchArray";


export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  // const hello = await api.product.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <LatestPost />
          <SearchArray/>


        </div>
      </main>
    </HydrateClient>
  );
}
