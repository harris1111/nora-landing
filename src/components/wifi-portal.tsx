import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
  wifiFormSchema,
  type WifiFormData,
} from "../lib/form-validation-schema";
import { submitToGoogleSheets } from "../lib/google-sheets-submit";

export function WifiPortal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WifiFormData>({
    resolver: zodResolver(wifiFormSchema),
  });

  const onSubmit = async (data: WifiFormData) => {
    try {
      await submitToGoogleSheets(data as unknown as Record<string, string>);
      toast.success("Đăng ký thành công! Chào mừng bạn.");
      reset();
    } catch {
      toast.error("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative font-sans" style={{ backgroundImage: "url(/images/hero/slide-1.webp)" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Logo */}
        <div className="mb-8 text-center">
          <img
            src="/images/logo.png"
            alt="Imperial Palace"
            className="h-16 md:h-20 mx-auto mb-4"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
            IMPERIAL PALACE
          </h1>
          <p className="text-white/70 mt-2 text-sm">
            11 Lê Thánh Tông, Hoàn Kiếm, Hà Nội
          </p>
        </div>

        {/* Form card */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8">
          <h2 className="text-white text-center text-lg font-semibold uppercase tracking-wider mb-6">
            Đăng ký WiFi
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register("name")}
                aria-label="Họ và tên"
                placeholder="Họ và tên *"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("email")}
                aria-label="Email"
                placeholder="Email *"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("phone")}
                aria-label="Số điện thoại"
                placeholder="Số điện thoại *"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-secondary font-semibold uppercase tracking-wider px-8 py-3 hover:bg-primary/90 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Đang xử lý..." : "Kết nối WiFi"}
            </button>
          </form>

          <p className="text-white/40 text-xs text-center mt-4">
            Bằng việc đăng ký, bạn đồng ý với điều khoản sử dụng WiFi.
          </p>
        </div>

        {/* Footer */}
        <p className="text-white/30 text-xs mt-8">
          © 2026 Imperial Palace. All rights reserved.
        </p>
      </div>
    </div>
  );
}
