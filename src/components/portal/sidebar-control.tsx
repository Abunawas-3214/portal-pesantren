import { cn } from "@/lib/utils";
import CheckboxSearchInput from "./checkbox-search-input";
import { Checkbox } from "@radix-ui/react-checkbox";

export default function SidebarControll({ className, ...props }: React.HTMLAttributes<HTMLElement>) {

    const genderData = ['putra', 'putri'];
    const programData = ['kitab', 'tahfidz'];
    const tingkatData = ['umum', 'mahasiswa', 'SLTP', 'SLTA'];
    const kecamatanData = ['lowokwaru', 'blimbing', 'kedungkandang', 'klojen', 'sukun'];

    return (
        <div className={cn("h-fit w-full py-4 px-8 border rounded-none space-y-4", className)} {...props}>
            <CheckboxSearchInput params="gender" options={genderData} />
            <CheckboxSearchInput params="program" options={programData} />
            <CheckboxSearchInput params="tingkat" options={tingkatData} />
            <CheckboxSearchInput params="kecamatan" options={kecamatanData} />
        </div>
    )
}
