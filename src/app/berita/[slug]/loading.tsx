export default function BeritaDetailsLoading() {
    return (
        <main>
            <div className="container mx-auto max-w-2xl px-4 md:px-0 pt-28 pb-20 md:py-40 space-y-12">
                <div className="space-y-6">
                    {/* Title and Metadata */}
                    <div className="space-y-4">
                        <div className="animate-pulse w-full md:w-4/5 h-10 md:h-16 bg-slate-200 rounded-sm md:mx-auto"></div>
                        <div className="animate-pulse w-1/2 md:w-1/3 h-5 bg-slate-200 rounded-full md:mx-auto"></div>
                    </div>

                    {/* Featured Image */}
                    <div className="animate-pulse w-full aspect-video bg-slate-200"></div>

                    {/* Article Content */}
                    <div className="space-y-4 pt-4">
                        <div className="animate-pulse w-full h-6 bg-slate-200 rounded-full"></div>
                        <div className="animate-pulse w-full h-6 bg-slate-200 rounded-full"></div>
                        <div className="animate-pulse w-4/5 h-6 bg-slate-200 rounded-full"></div>
                        <div className="animate-pulse w-full h-6 bg-slate-200 rounded-full"></div>
                        <div className="animate-pulse w-2/3 h-6 bg-slate-200 rounded-full"></div>
                    </div>

                    {/* Categories */}
                    <div className="flex gap-2 pt-4 border-t">
                        <div className="animate-pulse w-16 h-4 bg-slate-200 rounded-full"></div>
                        <div className="animate-pulse w-24 h-4 bg-slate-200 rounded-full"></div>
                    </div>
                </div>

                {/* Dibuat Oleh */}
                <div className="w-full md:w-1/2 space-y-2 pt-8 border-t">
                    <div className="animate-pulse w-24 h-4 bg-slate-200 rounded-full"></div>
                    <div className="animate-pulse w-full h-16 bg-slate-200 rounded-sm"></div>
                </div>

                {/* Related Posts */}
                <div className="w-full space-y-4">
                    <div className="animate-pulse w-32 h-6 bg-slate-200 rounded-full"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="animate-pulse flex-shrink-0 size-10 md:size-12 bg-slate-200 rounded-sm"></div>
                                <div className="animate-pulse flex-grow h-5 bg-slate-200 rounded-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
