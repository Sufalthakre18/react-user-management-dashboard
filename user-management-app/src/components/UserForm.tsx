import { useEffect, useState } from "react";
import type { UserFormData } from "../types/user";

interface Props {
  title: string;
  initialData?: UserFormData;
  onSubmit: (data: UserFormData) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
}

const emptyForm: UserFormData = {
  name: "",
  email: "",
  phone: "",
  username: "",
  website: "",
};

const UserForm = ({
  title,
  initialData,
  onSubmit,
  onCancel,
  isSubmitting,
}: Props) => {
  const [form, setForm] = useState<UserFormData>(initialData || emptyForm);

  const [errors, setErrors] = useState<
    Partial<UserFormData>
  >({});

  // Fill form when editing
  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setForm({...form,[name]: value,});
    setErrors({...errors,[name]: "",});
  };

  // Simple validation
  const validate = () => {
    const newErrors: Partial<UserFormData> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim())newErrors.email = "Email is required";
    if (!form.phone.trim())newErrors.phone = "Phone is required";
    if (!form.username.trim())newErrors.username = "Username is required";
    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    if (!validate()) return;

    await onSubmit(form);
  };

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md bg-bg-elevated border border-border rounded-card p-7 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold text-teal mb-6">
          {title}
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-(--radius-btn) bg-bg-primary border border-border text-sm text-slate-text outline-none"
            />

            {errors.name && (
              <p className="mt-1 text-xs text-danger">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-(--radius-btn) bg-bg-primary border border-border text-sm text-slate-text outline-none"
            />

            {errors.email && (
              <p className="mt-1 text-xs text-danger">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <input
              type="text"
              name="phone"
              placeholder="+1-555-0100"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-(--radius-btn) bg-bg-primary border border-border text-sm text-slate-text outline-none"
            />

            {errors.phone && (
              <p className="mt-1 text-xs text-danger">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Username */}
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-(--radius-btn) bg-bg-primary border border-border text-sm text-slate-text outline-none"
            />

            {errors.username && (
              <p className="mt-1 text-xs text-danger">
                {errors.username}
              </p>
            )}
          </div>

          {/* Website */}
          <div className="mb-4">
            <input
              type="text"
              name="website"
              placeholder="example.com"
              value={form.website}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-(--radius-btn) bg-bg-primary border border-border text-sm text-slate-text outline-none"
            />
          </div>

          <div className="flex gap-3 justify-end mt-6">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 rounded-(--radius-btn) text-sm font-semibold border border-border text-slate-text hover:border-teal hover:text-teal transition-all cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 rounded-(--radius-btn) text-sm font-bold bg-teal text-bg-primary hover:bg-teal-dim disabled:opacity-50 transition-all cursor-pointer"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default UserForm;