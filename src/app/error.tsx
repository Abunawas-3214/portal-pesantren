'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 px-4 text-center">
			<div className="rounded-full bg-red-50 p-4">
				<AlertTriangle className="h-12 w-12 text-red-500" />
			</div>
			<h2 className="text-2xl font-bold text-gray-900">Terjadi Kesalahan!</h2>
			<p className="max-w-md text-gray-500">
				Maaf, sepertinya terjadi masalah saat memuat halaman ini. Silakan coba memuat ulang atau kembali beberapa saat lagi.
			</p>
			<div className="flex gap-4 pt-4">
				<Button onClick={() => reset()} variant="default">
					Coba Lagi
				</Button>
				<Button onClick={() => window.location.href = '/'} variant="secondary">
					Kembali ke Beranda
				</Button>
			</div>
		</div>
	)
}
