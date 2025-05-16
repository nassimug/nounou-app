export default function Loading() {
  return (
    <div className="container mx-auto p-4 py-8">
      <div className="h-6 w-32 animate-pulse rounded bg-gray-200"></div>
      <div className="mt-8 h-8 w-64 animate-pulse rounded bg-gray-200"></div>
      <div className="mt-2 h-4 w-48 animate-pulse rounded bg-gray-200"></div>
      <div className="mt-8 grid grid-cols-4 gap-4">
        <div className="h-10 animate-pulse rounded bg-gray-200"></div>
        <div className="h-10 animate-pulse rounded bg-gray-200"></div>
        <div className="h-10 animate-pulse rounded bg-gray-200"></div>
        <div className="h-10 animate-pulse rounded bg-gray-200"></div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="h-64 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
        <div>
          <div className="h-48 animate-pulse rounded-lg bg-gray-200"></div>
          <div className="mt-6 h-48 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}
