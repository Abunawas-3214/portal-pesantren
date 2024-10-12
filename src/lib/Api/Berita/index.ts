export async function fetchBerita() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_HOST}/api/post`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            next: {
                revalidate: 3600
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error:', error)
    }
}

export async function fetchBeritaDetail(slug: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_HOST}/api/post/${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            next: {
                revalidate: 3600
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error:', error)
    }
}