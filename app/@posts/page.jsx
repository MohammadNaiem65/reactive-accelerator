import wait from '@/lib/wait';

export default async function Posts() {
    await wait(3600);

    return <section className='w-3xl border h-screen'>Posts</section>;
}
