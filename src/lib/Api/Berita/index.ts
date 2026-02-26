import type { Berita, BeritaDetail } from "@/types/berita";

export async function fetchBerita(): Promise<{ data: Berita[] }> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_HOST}/api/post`, {
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 3600 },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch berita: ${response.status}`);
    }
    return response.json();
}

export async function fetchBeritaDetail(slug: string): Promise<{ data: BeritaDetail }> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_HOST}/api/post/${slug}`, {
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 3600 },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch berita detail for "${slug}": ${response.status}`);
    }
    return response.json();
}