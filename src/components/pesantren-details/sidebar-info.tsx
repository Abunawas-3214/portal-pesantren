import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

export default function SidebarInfo({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn("h-fit w-full py-4 px-6 border", className)} {...props}>
            <div className="space-y-8">
                <h2 className="text-2xl font-semibold">
                    Informasi Pesantren
                </h2>
                <div className="space-y-2 text-lg">
                    <div className="grid grid-cols-3 gap-8">
                        <p className="font-semibold">Program</p>
                        <p className="col-span-2 text-stone-500">Kitab</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <p className="font-semibold">Gender</p>
                        <p className="col-span-2 text-stone-500">Putra, Putri</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <p className="font-semibold">Tingkat</p>
                        <p className="col-span-2 text-stone-500">Mahasiswa</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <p className="font-semibold">Pendiri</p>
                        <p className="col-span-2 text-stone-500">KH. Hasyim Muzadi</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <p className="font-semibold">Pengasuh</p>
                        <p className="col-span-2 text-stone-500">KH. Muh Nafi</p>
                    </div>
                </div>
                <Button className="w-full">
                    <div className="flex gap-2 justify-center items-center">
                        <SiWhatsapp className="h-4 w-4" />
                        <p>Hubungi Admin Pesantren</p>
                    </div>

                </Button>
            </div>

        </div>
    )
}
