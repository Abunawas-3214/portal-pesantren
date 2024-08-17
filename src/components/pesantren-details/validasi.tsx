import { PesantrenValidasiData } from '@/lib/Api/Pesantren'
import { Button } from "@/components/ui/button"

export default function validasi({ pesantrenValidasiData }: { pesantrenValidasiData: PesantrenValidasiData[] }) {

    return (
        <div className="space-y-2">
            <h2 className='text-black text-xl font-semibold'>Validitas Pesantren</h2>
            <p className="text-stone-500">Pesantren ini telah terverifikasi dan tersertifikasi di</p>
            <div className="flex gap-4">
                {
                    pesantrenValidasiData.map((validasi) => {
                        return (
                            <Button key={validasi.kategori_validasi} asChild>
                                <a href={validasi.file} target='_blank'>
                                    {validasi.kategori_validasi === "kemenag"
                                        ? "Kementerian Agama"
                                        : validasi.kategori_validasi === "rmi"
                                            ? "RMI NU Kota Malang"
                                            : validasi.kategori_validasi}
                                </a>
                            </Button>
                        )
                    })
                }
            </div>
        </div>
    )
}
