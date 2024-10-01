export interface Berita {
    title: string
    slug: string
    featured_image: string
    categories: string[]
    user: string
    created_at: string
}

export interface BeritaDetail extends Berita {
    content: string
    pesantren?: {
        name: string
        slug: string
        logo?: string
    }
    related_posts: {
        name: string
        slug: string
    }[]
}