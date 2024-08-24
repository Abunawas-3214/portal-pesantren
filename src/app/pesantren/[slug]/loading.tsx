export default function PesantrenDetailsLoading() {
  // Or a custom loading skeleton component
  return (
    <main>
      <div className="container mx-auto max-w-screen-xl py-40 space-y-24">
        <div className="animate-pulse grid grid-cols-7 gap-10">
          <div className="col-span-5 h-fit w-full border py-6 px-9 space-y-10">
            <div className="h-24 flex w-full gap-6">
              <div className="h-24 w-28 bg-slate-200 rounded-full"></div>
              <div className="flex flex-col justify-center h-full w-full gap-2">
                <div className="w-full h-8 bg-slate-200"></div>
                <div className="w-full h-4 bg-slate-200"></div>
              </div>
            </div>
            <div className="w-full h-[30rem] rounded-lg bg-slate-200"></div>
            <div className="w-full h-20 bg-slate-200"></div>
            <div className="space-y-4">
              <div className="w-4/5 h-12 bg-slate-200"></div>
              <div className="w-4/5 h-12 bg-slate-200"></div>
              <div className="w-4/5 h-12 bg-slate-200"></div>
              <div className="w-2/5 h-8 bg-slate-200"></div>
            </div>
          </div>
          <div className="col-span-2 w-full">
            <div className="sticky top-28">
              <div className="h-fit w-full py-4 px-6 border">
                <div className="space-y-6">
                  <div className="w-full h-8 bg-slate-200"></div>
                  <div className="space-y-2">
                    <div className="w-full h-6 bg-slate-200"></div>
                    <div className="w-full h-6 bg-slate-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}