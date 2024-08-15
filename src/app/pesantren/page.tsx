import CardPesantren from "@/components/portal/card-pesantren";
import SearchPesantren from "@/components/portal/search-pesantren";
import SidebarControl from "@/components/portal/sidebar-control";
import { pesantrenSearhParams } from "@/types";

export default function PesantrenPage({ searchParams }: { searchParams: pesantrenSearhParams }) {
  // console.log(searchParams.search)

  return (
    <main>
      <div className="container mx-auto max-w-screen-xl py-40 space-y-24">
        <SearchPesantren />
        <div className="h-fit grid grid-cols-4 gap-10">
          <SidebarControl className="sticky top-28" />
          <div className="h-fit col-span-3 grid grid-cols-3 gap-10">
            <CardPesantren />
            <CardPesantren />
            <CardPesantren />
            <CardPesantren />
            <CardPesantren />
            <CardPesantren />
            <CardPesantren />
          </div>
        </div>
      </div>
    </main>
  );
}