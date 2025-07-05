import { useState } from "react";

export interface CheckoutData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  province: string;
  city: string;
}

interface Props {
  onSubmit: (data: CheckoutData) => void;
}

export default function CheckoutForm({ onSubmit }: Props) {
  const [form, setForm] = useState<CheckoutData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    province: "",
    city: "",
  });

  const [errors, setErrors] = useState<Partial<CheckoutData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Partial<CheckoutData> = {};
    if (!form.fullName) newErrors.fullName = "Requerido";
    if (!form.email) newErrors.email = "Requerido";
    if (!form.phone) newErrors.phone = "Requerido";
    if (!form.address) newErrors.address = "Requerido";
    if (!form.postalCode) newErrors.postalCode = "Requerido";
    if (!form.province) newErrors.province = "Requerido";
    if (!form.city) newErrors.city = "Requerido";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-black bg-white p-6 rounded-xl shadow-lg">
      <div>
        <label className="block font-semibold mb-1">Nombre completo</label>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Teléfono</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Dirección</label>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block font-semibold mb-1">Código postal</label>
          <input
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Provincia</label>
          <input
            name="province"
            value={form.province}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.province && <p className="text-red-500 text-sm">{errors.province}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Ciudad</label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
      </div>

      <button type="submit" className="bg-black text-white py-2 px-6 rounded hover:bg-neutral-800 transition">
        Finalizar compra
      </button>
    </form>
  );
}
