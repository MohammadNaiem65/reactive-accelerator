export default function Home({ posts }) {
    console.log("🚀 ~ Home ~ posts:", posts)
    return (
        <main className='font-sans flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
            <aside className='h-screen border-r w-[200px]'>Sidebar</aside>

            {posts}

            <aside>
              
            </aside>
        </main>
    );
}
