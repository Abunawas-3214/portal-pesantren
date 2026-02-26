import PesantrenList from "@/components/portal/pesantren-list";
import PesantrenListSkeleton from "@/components/portal/pesantren-list-skeleton";
import SearchPesantren from "@/components/portal/search-pesantren";
import SidebarControl from "@/components/portal/sidebar-control";
import MobileFilter from "@/components/portal/mobile-filter";
import { fetchPesantren } from "@/lib/Api/Pesantren";
import { pesantrenSearhParams } from "@/types";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Direktori Pesantren - Portal Pesantren RMI NU",
  description: "Cari dan temukan profil lengkap pesantren di Kota Malang. Filter berdasarkan tingkat pendidikan, program unggulan, dan fasilitas.",
};

export const dynamic = "force-dynamic";
export default async function PesantrenPage({ searchParams }: { searchParams: Promise<pesantrenSearhParams> }) {
  const resolvedSearchParams = await searchParams;
  return (
    <main>
      <div className="container mx-auto max-w-screen-xl py-24 md:py-40 space-y-12 md:space-y-24 px-4 md:px-0">
        <SearchPesantren />

        <div className="h-fit grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            {/* Desktop Sidebar */}
            <SidebarControl className="hidden lg:block lg:sticky lg:top-28" />

            {/* Mobile Filter Toggle */}
            <MobileFilter />
          </div>

          <div className="lg:col-span-3">
            <Suspense fallback={<PesantrenListSkeleton />}>
              <PesantrenList fetchData={() => fetchPesantren(resolvedSearchParams)} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}