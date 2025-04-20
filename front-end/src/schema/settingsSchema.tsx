import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; //5MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const MIN_IMAGE_SIZE = { width: 200, height: 200 };
const MAX_IMAGE_SIZE = { width: 4096, height: 4096 };

export const updateProfileSchema = z
  .object({
    picture: z
      .instanceof(File, {
        message: "Pleasse select an image",
      })

      .refine((file) => MAX_FILE_SIZE > file.size, {
        message: "the image size is too big",
      })
      .refine((file) => SUPPORTED_FORMATS.includes(file?.type), {
        message: "Please upload a valid image file (JPEG, PNG, or WebP)",
      })
      .refine(
        (file) =>
          new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              const img = new Image();
              img.onload = () => {
                const meetsDimensions =
                  img.width >= MIN_IMAGE_SIZE.width &&
                  img.height >= MIN_IMAGE_SIZE.height &&
                  img.width <= MAX_IMAGE_SIZE.width &&
                  img.height <= MAX_IMAGE_SIZE.height;
                resolve(meetsDimensions);
              };
              img.src = e.target?.result as string;
            };
            reader.readAsDataURL(file);
          }),
        {
          message: `The image size is invalid`,
        },
      )
      .optional(),

    username: z.string().min(3, {
      message: "Username must be at least 3 characters long",
    }),
    email: z.string().email({
      message: "Email must be valid",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z.string().min(8, {
      message: "Pleasse confirm your password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
