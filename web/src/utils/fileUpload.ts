const cloudUrl = "https://api.cloudinary.com/v1_1/dylqb2e7t/upload";

export const fileUpload = async (image: File) => {
  const data = new FormData();

  data.append("file", image);

  data.append("upload_preset", "youtube_clone");

  const response = await fetch(cloudUrl, {
    method: "post",
    body: data,
  });

  const cloudResponse = await response.json();

  return cloudResponse;
};
