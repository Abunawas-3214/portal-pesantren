import Image from "next/image"
import rmiLogo from "/public/rmi.svg"
import Link from "next/link"
export default function CreatedByPesantren({ pesantren }: { pesantren: { name: string, slug: string, logo?: string } }) {
    return (
        <Link href={`/pesantren/${pesantren.slug}`}>
            <div className="w-full h-20 flex items-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                <div className="h-full w-20 p-2">
                    <Image src={pesantren.logo ?? rmiLogo} alt="pesantren logo" width={100} height={100} />
                </div>
                <h4 className="p-2 line-clamp-2 font-bold text-lg">{pesantren.name}</h4>
            </div>
        </Link>
    )
}
