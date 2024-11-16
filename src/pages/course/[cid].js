import { useRouter } from 'next/router'
import HeroCourse from './_sections/HeroSection';
import SectionTabs from './_sections/Tab';
import Creculem from './_sections/Tabs/Creculem';
import Overview from './_sections/Tabs/Overview';
import CourseReviews from './_sections/Tabs/Reviews';
import MainLayout from '@/layout/MainLayout';


export default function CourseDetails() {
  const router = useRouter()

  return (
    <>
      <MainLayout>
        <HeroCourse />
        <SectionTabs
          tabData={[
            { tabName: 'Overview', TabContent: <Overview /> },
            { tabName: 'Curriculum ', TabContent: <Creculem /> },
            { tabName: 'Reviews', TabContent: <CourseReviews /> },
          ]}
        />
      </MainLayout>
      {/* <h1>Course Details {router.query.cid}</h1> */}
    </>
  );
}