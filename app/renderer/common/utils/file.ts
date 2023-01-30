import fs, { promises as fsPromiseAPIs } from 'fs';
const fileAction = {
  read: (path: string, encoding?: BufferEncoding): Promise<string> => {
    return fsPromiseAPIs.readFile(path, { encoding: encoding || 'utf-8' });
  },
  /**
   * @description 读取目录内容
   * @param path 路径
   * @returns  {Promise}
   */
  readDir: (path: string): Promise<string[]> => {
    return fsPromiseAPIs.readdir(path);
  },
  write: (path: string, content: string, encoding?: BufferEncoding): Promise<void> => {
    return fsPromiseAPIs.writeFile(path, content, { encoding: encoding || 'utf-8' });
  },
  rename: (oldPath: string, newPath: string): Promise<void> => {
    return fsPromiseAPIs.rename(oldPath, newPath);
  },
  delete: (path: string) => {
    return fsPromiseAPIs.unlink(path);
  },
  hasFile: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.F_OK);
  },
  canWrite: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.W_OK);
  },
  canRead: (path: string) => {
    return fsPromiseAPIs.access(path, fs.constants.R_OK);
  },
  /**
   * @description 创建文件夹
   * @param path 创建 /a/b/c，不管`/a` 和 /a/b 是否存在。
   * @returns {Promise}
   */
  mkdirDir: (path: string) => {
    return fsPromiseAPIs.mkdir(path, { recursive: true });
  },
};
export default fileAction;
