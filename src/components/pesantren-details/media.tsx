import { Button } from "@/components/ui/button"
import { PesantrenMediaData } from "@/lib/Api/Pesantren"
import { SiFacebook, SiInstagram, SiTiktok, SiX, SiYoutube } from "@icons-pack/react-simple-icons"
import { Globe } from "lucide-react"

export default function Media({ pesantrenMediaData }: { pesantrenMediaData: PesantrenMediaData }) {
    if (pesantrenMediaData.facebook == null &&
        pesantrenMediaData.instagram == null &&
        pesantrenMediaData.youtube == null &&
        pesantrenMediaData.tiktok == null &&
        pesantrenMediaData.twitter == null &&
        pesantrenMediaData.website == null)
        return null
    return (
        <div className="space-y-2">
            <h2 className='text-black text-xl font-semibold'>Media Pesantren</h2>
            <div className="flex gap-4">
                {pesantrenMediaData.instagram && (
                    <Button variant={"secondary"} className="border border-secondary p-4">
                        <a href={pesantrenMediaData.instagram} target="_blank" rel="noopener noreferrer">
                            <SiInstagram className="h-8 w-8" />
                        </a>
                    </Button>
                )}
                {pesantrenMediaData.facebook && (
                    <Button variant={"secondary"} className="border border-secondary p-4">
                        <a href={pesantrenMediaData.facebook} target="_blank" rel="noopener noreferrer">
                            <SiFacebook className="h-8 w-8" />
                        </a>
                    </Button>
                )}
                {pesantrenMediaData.youtube && (
                    <Button variant={"secondary"} className="border border-secondary p-4">
                        <a href={pesantrenMediaData.youtube} target="_blank" rel="noopener noreferrer">
                            <SiYoutube className="h-8 w-8" />
                        </a>
                    </Button>
                )}
                {pesantrenMediaData.tiktok && (
                    <Button variant={"secondary"} className="border border-secondary p-4">
                        <a href={pesantrenMediaData.tiktok} target="_blank" rel="noopener noreferrer">
                            <SiTiktok className="h-8 w-8" />
                        </a>
                    </Button>
                )}
                {pesantrenMediaData.twitter && (
                    <Button variant={"secondary"} className="border border-secondary p-4">
                        <a href={pesantrenMediaData.twitter} target="_blank" rel="noopener noreferrer">
                            <SiX className="h-8 w-8" />
                        </a>
                    </Button>
                )}
                {pesantrenMediaData.website && (
                    <Button variant={"secondary"} className="border border-secondary p-4" asChild>
                        <a href={pesantrenMediaData.website} target="_blank" rel="noopener noreferrer">
                            <Globe className="h-8 w-8" />
                        </a>
                    </Button>
                )}
            </div>
        </div>
    )
}
