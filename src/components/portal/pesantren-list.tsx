import type { PesantrenData } from "@/lib/Api/Pesantren";
import CardPesantren from "./card-pesantren";

interface PesantrenListProps {
    fetchData: () => Promise<{ data: PesantrenData[] }>
}

export default async function PesantrenList({ fetchData }: PesantrenListProps) {
    const pesantrenData = await fetchData();

    const renderedPesantren = pesantrenData.data.map((pesantren) => {
        return (
            <CardPesantren key={pesantren.slug} pesantren={pesantren} />
        )
    });

    return (
        <div className="h-fit col-span-3 grid grid-cols-3 gap-10">
            {renderedPesantren}
        </div>
    )
}
