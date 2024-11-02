import { useRouter } from 'next/router'


export default function CourseDetails() {
    const router = useRouter()

  return (
    <h1>Course Details {router.query.cid}</h1>
  );
}