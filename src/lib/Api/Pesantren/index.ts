import { pesantrenSearhParams } from "@/types";

export type PesantrenData = {
    name: string
    slug: string
    kecamatan: string | null
    gender: string | null
    logo: string | null
    foto_sampul: string | null
    program: string[] | null
    tingkat: string[] | null
}

export type PesantrenDetailData = {
    name: string
    slug: string
    alamat: string
    kecamatan: string
    pendiri: string
    pengasuh: string
    tanggal_berdiri: string
    jumlah_santri: number
    deskripsi: string
    gender: string
    program_unggulan: string
    program: string[]
    tingkat: string[]
    contact: string
    logo: string
    video_profil: string
    media: PesantrenMediaData
    validasi: PesantrenValidasiData[]
    photos: { file: string }[]
}

export type PesantrenSidebarData = {
    pendiri: string
    pengasuh: string
    gender: string
    program: string[]
    tingkat: string[]
    contact: string
    jumlah_santri: number
}

export type PesantrenMediaData = {
    facebook: string
    instagram: string
    youtube: string
    tiktok: string
    twitter: string
    website: string
}

export type PesantrenValidasiData = {
    kategori_validasi: string
    file: string
}

export async function fetchPesantren(searchParams: pesantrenSearhParams | Record<string, string>): Promise<{ data: PesantrenData[] }> {
    const filteredParams = Object.entries(searchParams).filter(([, v]) => v !== undefined && v !== null && v !== '');
    const queryString = filteredParams.length > 0
        ? '?' + new URLSearchParams(Object.fromEntries(filteredParams)).toString()
        : '';

    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_HOST}/api/pesantren${queryString}`, {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch pesantren: ${response.status}`);
    }
    return response.json();
}

export async function fetchPesantrenDetail(slug: string): Promise<{ data: PesantrenDetailData }> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_HOST}/api/pesantren/${slug}`, {
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 60 },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch pesantren detail for "${slug}": ${response.status}`);
    }
    return response.json();
}