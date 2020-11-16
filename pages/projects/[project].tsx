import { IProject } from "../../interfaces";
import { useRouter } from "next/router";

const Project: React.FC = () => {
  const router = useRouter();
  const { project } = router.query;
  return <h1 className="text-blue-500">{project}</h1>;
};

export default Project;
