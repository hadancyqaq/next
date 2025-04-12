export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Blog Post {params.id}</h1>
        <p>This is the content of blog post {params.id}.</p>
      </main>
    </div>
  )
}

export async function generateMetadata({
  params
}: {
  params: { id: string }
}): Promise<{ title: string; description: string }> {
  return {
    title: `Blog${params.id}`,
    description: `This is the content of blog post ${params.id}.`
  }
}
