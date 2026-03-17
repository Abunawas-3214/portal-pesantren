'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle, RefreshCcw, Home } from 'lucide-react'
import Link from 'next/link'

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
		<div className="flex min-h-[70vh] flex-col items-center justify-center space-y-6 px-4 text-center">
			<div className="rounded-full bg-red-50 p-6">
				<AlertCircle className="h-16 w-16 text-red-500" />
			</div>
			<div className="space-y-2">
				<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					Terjadi Kesalahan!
				</h2>
				<p className="mx-auto max-w-[500px] text-gray-500 md:text-lg">
					Maaf, sepertinya terjadi masalah saat memuat halaman ini. Jangan khawatir, ini mungkin hanya masalah sementara.
				</p>
			</div>
			<div className="flex flex-col sm:flex-row gap-4 pt-4">
				<Button onClick={() => reset()} variant="default" size="lg" className="gap-2">
					<RefreshCcw className="h-5 w-5" />
					Coba Lagi
				</Button>
				<Button asChild variant="secondary" size="lg" className="gap-2">
					<Link href="/">
						<Home className="h-5 w-5" />
						Kembali ke Beranda
					</Link>
				</Button>
			</div>
			{error.digest && (
				<p className="text-sm text-gray-400">
					Error ID: <code className="font-mono">{error.digest}</code>
				</p>
			)}
		</div>
	)
}
