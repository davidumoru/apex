import fs from "fs";
import path from "path";

export const getAllFiles = (dirPath: string): string[] => {
  const response: string[] = [];
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullFilePath = path.join(dirPath, file);
    if (fs.statSync(fullFilePath).isDirectory()) {
      response.push(...getAllFiles(fullFilePath));
    } else {
      response.push(fullFilePath);
    }
  });

  return response;
};
