import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center space-y-6 px-4 text-center">
      <div className="rounded-full bg-emerald-50 p-6 animate-pulse">
        <FileQuestion className="h-16 w-16 text-emerald-600" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
          Maaf, kami tidak dapat menemukan halaman yang Anda cari. Mungkin halaman tersebut telah dipindahkan atau dihapus.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button asChild variant="default" size="lg">
          <Link href="/">
            Kembali ke Beranda
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/pesantren">
            Cari Pesantren
          </Link>
        </Button>
      </div>
    </div>
  )
}
