//components and utils
import { Heading } from "@/components/heading/heading";
//ui
import { UsersRound } from "lucide-react";

const StudentsPage = () => {
  return (
    <div>
      <Heading
        title="Alumnos"
        description="Crea, busca, modifica o elimina Alumnos"
        icon={UsersRound}
      />
    </div>
  );
};

export default StudentsPage;