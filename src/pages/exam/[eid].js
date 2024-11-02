import { useRouter } from "next/router";

export default function ExamDetails() {
  const router = useRouter();

  return <h1>Exam Details {router.query.eid}</h1>;
}