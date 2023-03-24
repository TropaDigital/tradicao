export const downloadFileFromExternalLink = (
  externalLinkUrl: string,
  fileName: string
) => {
  fetch(externalLinkUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(url);
    })
    .catch((error) => console.error(error));
};
