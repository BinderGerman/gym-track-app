//components and utils
import { IHeadingProps } from "@/interfaces/heading-interface";

export const Heading = ({ title, description, icon: Icon }: IHeadingProps) => {
  return (
    <div className="flex px-4 lg:px-8 items-center gap-x-3 mt-9">
      <div className="p-2 w-fit rounded-md border border-primary">
        <Icon className="w-10 h-10 text-primary" />
      </div>
      <div className="text-secondary-foreground">
        <h2 className="text-3xl font-bold ">{title}</h2>
        <p className="text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};