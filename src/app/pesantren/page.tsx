import PesantrenList from "@/components/portal/pesantren-list";
import PesantrenListSkeleton from "@/components/portal/pesantren-list-skeleton";
import SearchPesantren from "@/components/portal/search-pesantren";
import SidebarControl from "@/components/portal/sidebar-control";
import { fetchPesantren } from "@/lib/Api/Pesantren";
import { pesantrenSearhParams } from "@/types";
import { Suspense } from "react";

export default function PesantrenPage({ searchParams }: { searchParams: pesantrenSearhParams }) {
  return (
    <main>
      <div className="container mx-auto max-w-screen-xl py-40 space-y-24">
        <SearchPesantren />
        <div className="h-fit grid grid-cols-4 gap-10">
          <SidebarControl className="sticky top-28" />
          <Suspense fallback={<PesantrenListSkeleton />}>
            <PesantrenList fetchData={() => fetchPesantren(searchParams)} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}