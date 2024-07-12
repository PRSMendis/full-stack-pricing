import { api, HydrateClient } from "~/trpc/server";
import { SearchArray } from "./_components/searchArray";
import { ProductPricingProfile } from "./_components/productPricingProfile";


export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#147D73] to-[#15162c] text-white">
           <ProductPricingProfile/>
      </main>
    </HydrateClient>
  );
}
