export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then(resolvedPromise => {
    return resolvedPromise;
  });
}
