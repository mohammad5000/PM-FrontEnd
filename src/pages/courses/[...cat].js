import { useRouter } from 'next/router';
export default function Cat() {
    const router = useRouter();
    return (
        <h1>Category {router.query.cat}</h1>
    );
    }