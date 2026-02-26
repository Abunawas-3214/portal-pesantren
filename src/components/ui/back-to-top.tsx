'use client'
import { useEffect, useState } from "react";
import { Button } from "./button";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<div className={cn(
			"fixed bottom-24 md:bottom-8 right-8 z-50 transition-all duration-300",
			isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
		)}>
			<Button
				onClick={scrollToTop}
				variant="default"
				size="default"
				className="rounded-full size-12 p-0 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-primary"
				aria-label="Back to top"
			>
				<ChevronUp className="size-6 text-white" />
			</Button>
		</div>
	);
}
