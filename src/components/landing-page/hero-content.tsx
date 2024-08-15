import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function HeroContent({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn(className)} {...props}>
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-2 h-screen">
                    <div className="flex flex-col justify-center px-20 gap-4">
                        <h1 className='font-semibold text-black text-8xl'>Rabithah Ma'ahid Islamiyah</h1>
                        <h6 className='text-2xl font-normal text-primary'>Nahdlatul Ulama Kota Malang</h6>
                        <Button className="">
                            Portal Pesantren
                        </Button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
