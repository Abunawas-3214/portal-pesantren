export default function BeritaLoading() {
    return (
        <main>
            <div className="container text-center mx-auto max-w-screen-xl py-40 space-y-24">
                <div className="space-y-8">
                    <div className="flex justify-center">
                        <div className="animate-pulse w-1/4 h-12 bg-slate-200 rounded-md"></div>
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="animate-pulse bg-slate-200 h-[30rem] w-2/3">
                        </div>
                    </div>
                </div>
                <div className="space-y-12">
                    <div className="flex justify-center">
                        <div className="animate-pulse w-1/4 h-12 bg-slate-200 rounded-md"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-8 w-full h-fit">
                        <div className="animate-pulse bg-slate-200 h-64 w-full"></div>
                        <div className="animate-pulse bg-slate-200 h-64 w-full"></div>
                        <div className="animate-pulse bg-slate-200 h-64 w-full"></div>
                        <div className="animate-pulse bg-slate-200 h-64 w-full"></div>
                        <div className="animate-pulse bg-slate-200 h-64 w-full"></div>
                        <div className="animate-pulse bg-slate-200 h-64 w-full"></div>
                    </div>
                </div>
            </div>
        </main>
    )
}
