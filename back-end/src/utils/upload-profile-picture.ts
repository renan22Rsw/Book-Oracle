import { UploadApiResponse } from "cloudinary";
import { cloudinary } from "./cloudinary";
import streamifier from "streamifier";

export const uploadProfilePicture = (
  buffer: Buffer,
  filename: string
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "profile_pictures",
        public_id: filename.split(".")[0],
      },
      (error, result) => {
        if (error) return reject(error);

        resolve(result as UploadApiResponse);
      }
    );
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};
