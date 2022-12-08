/**
 * @desc 判断是否属于外部连接
 * @param {string} url - 链接
 */
export function isHttpOrHttpsUrl(url: string): boolean {
  const regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}
