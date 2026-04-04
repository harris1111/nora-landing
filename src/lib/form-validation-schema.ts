import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ tên").max(100, "Họ tên tối đa 100 ký tự"),
  phone: z
    .string()
    .min(1, "Vui lòng nhập số điện thoại")
    .regex(/^(0|\+84)[0-9]{9}$/, "Số điện thoại không hợp lệ"),
  email: z
    .string()
    .min(1, "Vui lòng nhập email")
    .email("Email không hợp lệ"),
  content: z.string().max(1000, "Nội dung tối đa 1000 ký tự").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
