import { useRouter } from 'next/router'
import HeroCourse from './_sections/HeroSection';
import SsectionTabs from './_sections/Tab';


export default function CourseDetails() {
    const router = useRouter()

  return (
    <>
    <HeroCourse/>
    <SsectionTabs/>
    <h1>Course Details {router.query.cid}</h1>
    </>
  );
}