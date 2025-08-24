import wait from '@/lib/wait';

export default async function page() {
    await wait(2500);

    return <section className='border h-[calc(100vh*0.5-20px)]'>More</section>;
}
