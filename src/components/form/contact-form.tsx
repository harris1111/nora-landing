import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
  contactFormSchema,
  type ContactFormData,
} from "../../lib/form-validation-schema";
import { submitToGoogleSheets } from "../../lib/google-sheets-submit";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitToGoogleSheets(data as unknown as Record<string, string>);
      toast.success("Gửi thông tin thành công!");
      reset();
    } catch {
      toast.error("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register("name")}
            aria-label="Họ và tên"
            placeholder="Họ và tên *"
            className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-primary"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("phone")}
            aria-label="Số điện thoại"
            placeholder="Số điện thoại *"
            className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-primary"
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <input
          {...register("email")}
          aria-label="Email"
          placeholder="Email *"
          className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-primary"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("content")}
          aria-label="Nội dung"
          placeholder="Nội dung"
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-primary resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-secondary font-semibold uppercase tracking-wider px-8 py-3 hover:bg-primary/90 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
      </button>
    </form>
  );
}
