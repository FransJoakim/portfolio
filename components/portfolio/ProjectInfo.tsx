import Link from "next/link";
import { portfolioProject } from "../../lib/types";
import Image from "next/image";

interface Props {
  activeProject: portfolioProject;
}

export const ProjectInfo = ({ activeProject }: Props) => {
  return (
    <div className="absolute top-0 right-0 w-1/2 h-full flex items-start justify-end">
      <div className="w-[70%] h-[60%] bg-white/90 rounded-lg p-6 mr-[6%] shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{activeProject.title}</h2>
        <p className="text-gray-700 mb-4">{activeProject.description}</p>
        {activeProject.publicRepo && (
          <Link href={activeProject.publicRepo}>
            <Image
              src="/icons/github.png"
              height="28"
              width="28"
              alt="github link"
              className="cursor-pointer"
            />
            View Project on Github
          </Link>
        )}
        {activeProject.URL && (
          <Link
            href={activeProject.URL}
            className="text-blue-500 hover:underline"
          >
            {activeProject.linkText || "Visit the site"}
          </Link>
        )}
      </div>
    </div>
  );
};
