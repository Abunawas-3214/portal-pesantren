import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { PesantrenSidebarData } from "@/lib/Api/Pesantren";

export default function SidebarInfo({ className, pesantrenSidebarData, ...props }: React.HTMLAttributes<HTMLElement> & { pesantrenSidebarData: PesantrenSidebarData }) {
    return (
        <div className={cn("h-fit w-full py-4 px-6 border", className)} {...props}>
            <div className="space-y-8">
                <h2 className="text-2xl font-semibold">
                    Informasi Pesantren
                </h2>
                <div className="space-y-2 text-lg">
                    {(pesantrenSidebarData.program.length > 0) &&
                        <div className="grid grid-cols-3 gap-8">
                            <p className="font-semibold">Program</p>
                            <div className="col-span-2 text-stone-500">
                                {pesantrenSidebarData.program.map((program) => {
                                    return (
                                        <p className="capitalize" key={program}>{program}</p>
                                    )
                                })}
                            </div>
                        </div>
                    }
                    {pesantrenSidebarData.gender &&
                        <div className="grid grid-cols-3 gap-8">
                            <p className="font-semibold">Gender</p>
                            <p className="col-span-2 text-stone-500">
                                {(pesantrenSidebarData.gender === 'putra_putri' ? 'Putra & Putri' : pesantrenSidebarData.gender)}
                            </p>
                        </div>
                    }
                    {pesantrenSidebarData.tingkat.length > 0 &&
                        <div className="grid grid-cols-3 gap-8">
                            <p className="font-semibold">Tingkat</p>
                            <div className="col-span-2 text-stone-500">
                                {pesantrenSidebarData.tingkat.map((tingkat) => {
                                    return (
                                        <p className="capitalize" key={tingkat}>{tingkat}</p>
                                    )
                                })}
                            </div>

                        </div>
                    }
                    {pesantrenSidebarData.pendiri &&
                        <div className="grid grid-cols-3 gap-8">
                            <p className="font-semibold">Pendiri</p>
                            <p className="col-span-2 text-stone-500">{pesantrenSidebarData.pendiri}</p>
                        </div>
                    }
                    {pesantrenSidebarData.pengasuh &&
                        <div className="grid grid-cols-3 gap-8">
                            <p className="font-semibold">Pengasuh</p>
                            <p className="col-span-2 text-stone-500">{pesantrenSidebarData.pengasuh}</p>
                        </div>
                    }
                </div>
                {pesantrenSidebarData.contact &&
                    <Button className="w-full">
                        <a
                            href={`https://wa.me/${pesantrenSidebarData.contact}`}
                            target="_blank"
                            className="flex gap-2 justify-center items-center">
                            <SiWhatsapp className="h-4 w-4" />
                            <p>Hubungi Admin Pesantren</p>
                        </a>
                    </Button>
                }
            </div>

        </div>
    )
}
