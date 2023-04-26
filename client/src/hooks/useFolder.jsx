import { useEffect, useState } from "react";
import useFolders from "./useFolders";

const useFolder = (id) => {
  const { folders } = useFolders();
  const [folder, setFolder] = useState();
  useEffect(() => {
    if (folders) {
      setFolder(folders.find((folder) => folder.id == id));
    }
  }, [folders]);

  return { folder };
};
export default useFolder;
