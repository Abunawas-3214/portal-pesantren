export async function fetchBeranda() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_HOST}/api/dashboard`, {
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