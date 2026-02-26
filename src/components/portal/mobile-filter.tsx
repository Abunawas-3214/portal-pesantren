'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import { Filter, X } from "lucide-react";
import SidebarControll from "./sidebar-control";
import { cn } from "@/lib/utils";

export default function MobileFilter() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="lg:hidden w-full">
			<Button
				onClick={() => setIsOpen(!isOpen)}
				variant="default"
				className="w-full flex items-center justify-center gap-2 mb-4"
			>
				{isOpen ? <X className="size-4" /> : <Filter className="size-4" />}
				{isOpen ? 'Tutup Filter' : 'Filter Pesantren'}
			</Button>

			<div className={cn(
				"overflow-hidden transition-all duration-300 ease-in-out",
				isOpen ? "max-h-[1000px] opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"
			)}>
				<SidebarControll className="bg-stone-50 border-stone-200" />
			</div>
		</div>
	)
}
