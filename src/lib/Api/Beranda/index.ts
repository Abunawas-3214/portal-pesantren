import type { BerandaData } from "@/types/beranda-data";

export async function fetchBeranda(): Promise<BerandaData> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_HOST}/api/beranda`, {
		headers: { 'Content-Type': 'application/json' },
		next: { revalidate: 3600 },
	});
	if (!response.ok) {
		throw new Error(`Failed to fetch beranda data: ${response.status}`);
	}
	return response.json();
}
