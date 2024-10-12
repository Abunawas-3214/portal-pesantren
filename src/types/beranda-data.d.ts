export interface BerandaData {
    meta: {
        pesantren_total?: number
        santri_total?: number
    },
    pesantren?: {
        name: string
        kecamatan?: string
        slug: string
        foto_sampul?: string
    }[],
    posts?: {
        title: string
        slug: string
        user: string
        featured_image?: string
        created_at: string
    }[]
}