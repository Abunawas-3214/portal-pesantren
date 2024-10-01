import Image from "next/image"
import rmiLogo from "/public/rmi.svg"
import Link from "next/link"
export default function CreatedByPesantren() {
    return (
        <Link href={'/pesantren/slug'}>
            <div className="w-full h-20 flex items-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                <div className="h-full w-20 p-2">
                    <Image src={rmiLogo} alt="pesantren logo" width={100} height={100} />
                </div>
                <h4 className="p-2 line-clamp-2 font-bold text-lg">Pesantren Al-Hikam</h4>
            </div>
        </Link>
    )
}
