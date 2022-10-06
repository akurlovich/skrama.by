const base64 = (files: File) =>
  new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => resolve(reader.result);
  });

  export default base64;