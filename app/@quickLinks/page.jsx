import wait from '@/lib/wait';

export default async function QuickLinks() {
    await wait(1800);

    return (
        <section className='border h-[calc(100vh*0.5)]'>Quick Links</section>
    );
}
