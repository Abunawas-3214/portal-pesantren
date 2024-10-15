'use server'
import { redirect } from 'next/navigation'

export async function searchPesantren(formData: FormData) {
    const term = formData.get('term')

    if (typeof term !== 'string' || !term) {
        redirect('/pesantren')
    }

    redirect(`/pesantren?search=${term}`)
}