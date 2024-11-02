import { useRouter } from 'next/router';
export default function Cat() {
    const router = useRouter();
    return (
        <h1>exam Category {router.query.cat}</h1>
    );
    }