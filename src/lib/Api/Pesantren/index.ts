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
    photos: {
        file: string
    }[]
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
    kategori_validasi: string,
    file: string
}
export async function fetchPesantren(searchParams: pesantrenSearhParams | {}) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_HOST}/api/pesantren${Object.keys(searchParams).length > 0 ? '?' + new URLSearchParams(searchParams as any).toString() : ''
            }`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error:', error)
    }
}

export async function fetchPesantrenDetail(slug: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_HOST}/api/pesantren/${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error:', error)
    }
}