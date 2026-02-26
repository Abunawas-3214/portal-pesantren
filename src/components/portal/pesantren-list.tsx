import type { PesantrenData } from "@/lib/Api/Pesantren";
import CardPesantren from "./card-pesantren";

interface PesantrenListProps {
    fetchData: () => Promise<{ data: PesantrenData[] }>
}

export default async function PesantrenList({ fetchData }: PesantrenListProps) {
    const pesantrenData = await fetchData();

    if (!pesantrenData || !pesantrenData.data) {
        return <div className="text-center py-20 text-stone-500">Gagal mengambil data pesantren. Silakan coba lagi nanti.</div>
    }

    const renderedPesantren = pesantrenData.data.map((pesantren) => {
        return (
            <CardPesantren key={pesantren.slug} pesantren={pesantren} />
        )
    });

    return (
        <div className="h-fit col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {renderedPesantren}
        </div>
    )
}
