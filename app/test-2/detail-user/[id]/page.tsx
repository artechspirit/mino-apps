/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaUser } from "@/constant/validationSchema";
import { formatDate } from "@/utils";
import { useParams, useRouter } from "next/navigation";

export default function DetailUser() {
  const params = useParams();
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const { register, handleSubmit, control, reset } = useForm({
    resolver: yupResolver(validationSchemaUser),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      phone: "",
      gender: "",
      tempat_lahir: "",
      bank: "",
      no_rekening: "",
      status: "",
      alamat: "",
    },
  });

  const onSubmit = async (data: any) => {
    const updatedUser = {
      ...data,
      tanggal_lahir: formatDate(new Date(data.tanggal_lahir)),
    };
    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${data.id}`,
        config
      );
      const result = await response.json();
      console.log("result", result);
      router.push("/test-2");
    } catch (err) {
      console.error(err);
    }
  };

  const getUser = async () => {
    try {
      const respon = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
      );
      const data = await respon.json();
      setName(data.name);
      reset(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className="dashboard-home">
      <div className="flex items-center">
        <h2 className="font-bold mr-2">Data User {name}</h2>
      </div>

      <div className="flex justify-between">
        <div className="card glass mt-6 w-[86%] rounded-sm bg-white">
          <div className="py-2 px-5 border-b">
            <span>Profile</span>
          </div>

          <div className="form-add-user flex justify-between p-4">
            <form
              id="editUser"
              onSubmit={handleSubmit(onSubmit)}
              className="w-[49%] py-4 px-0"
            >
              <div className="field-input flex items-center">
                <div className="label">
                  <div>Nama</div> <span className="text-red-600">*</span>
                </div>

                <input
                  autoComplete="off"
                  required
                  type="text"
                  {...register("name")}
                  className={`ml-4 input h-[2.5rem] shadow focus:shadow input-bordered w-full rounded-none active:outline-0 focus:outline-none`}
                />
              </div>

              <div className="field-input flex items-center">
                <div className="label">
                  <div>Email</div> <span className="text-red-600">*</span>
                </div>

                <input
                  autoComplete="off"
                  required
                  type="text"
                  {...register("email")}
                  className="ml-4 input h-[2.5rem] shadow focus:shadow input-bordered w-full rounded-none active:outline-0 focus:outline-none"
                />
              </div>

              <div className="field-input flex items-center">
                <div className="label">
                  <div>Username</div> <span className="text-red-600">*</span>
                </div>

                <input
                  autoComplete="off"
                  required
                  type="text"
                  {...register("username")}
                  className="ml-4 input h-[2.5rem] shadow focus:shadow input-bordered w-full rounded-none active:outline-0 focus:outline-none"
                />
              </div>

              <div className="field-input flex items-center">
                <div className="label">
                  <div>Phone</div> <span className="text-red-600">*</span>
                </div>

                <input
                  autoComplete="off"
                  required
                  type="text"
                  {...register("phone")}
                  className="ml-4 input h-[2.5rem] shadow focus:shadow input-bordered w-full rounded-none active:outline-0 focus:outline-none"
                />
              </div>

              <div className="field-input flex items-center">
                <div className="label">
                  <div>Gender</div> <span className="text-red-600">*</span>
                </div>

                <select
                  autoComplete="off"
                  required
                  {...register("gender")}
                  className="select h-[2.5rem] w-full ml-4 shadow focus:shadow input-bordered max-w-[234px] rounded-none active:outline-0 focus:outline-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="field-input flex items-center">
                <div className="label">
                  <div>Tempat Lahir</div>{" "}
                </div>

                <input
                  autoComplete="off"
                  type="text"
                  {...register("tempat_lahir")}
                  className="ml-4 input h-[2.5rem] shadow focus:shadow input-bordered w-full rounded-none active:outline-0 focus:outline-none"
                />
              </div>

              <div className="field-input flex items-center">
                <div className="label">
                  <div>Tanggal Lahir</div>
                </div>

                <Controller
                  control={control}
                  name="tanggal_lahir"
                  render={({ field }) => (
                    <DatePicker
                      autoComplete="off"
                      id="tanggal_lahir"
                      selected={field.value}
                      onChange={(date) =>
                        field.onChange(formatDate(date as Date))
                      }
                      dateFormat="yyyy-MM-dd"
                      className="ml-4 input h-[2.5rem] shadow focus:shadow input-bordered w-full rounded-none active:outline-0 focus:outline-none"
                    />
                  )}
                />
              </div>
            </form>

            <div className="w-[49%] py-4 px-0">
              <div className="field-input flex items-center">
                <div className="label">
                  <div>Bank</div>
                </div>

                <select
                  {...register("bank")}
                  className="select h-[2.5rem] w-full ml-4 shadow focus:shadow input-bordered max-w-[234px] rounded-none active:outline-0 focus:outline-none"
                >
                  <option value="BCA">BCA</option>
                  <option value="Mandiri">MANDIRI</option>
                  <option value="BRI">BRI</option>
                </select>
              </div>

              <div className="field-input flex items-center">
                <div className="label">
                  <div>No.Rekening</div>
                </div>

                <input
                  type="text"
                  {...register("no_rekening")}
                  className="ml-4 input h-[2.5rem] shadow focus:shadow input-bordered w-full rounded-none active:outline-0 focus:outline-none"
                />
              </div>

              <div className="field-input flex items-center">
                <div className="label">
                  <div>Status</div>
                </div>

                <select
                  {...register("status")}
                  className="select h-[2.5rem] w-full ml-4 shadow focus:shadow input-bordered max-w-[234px] rounded-none active:outline-0 focus:outline-none"
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>

              <div className="field-input flex items-center">
                <div className="label">
                  <div>Alamat</div>
                </div>

                <textarea
                  {...register("alamat")}
                  className="ml-4 input min-h-8 shadow focus:shadow input-bordered w-full rounded-none active:outline-0 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card glass mt-6 w-[12%] h-fit rounded-sm bg-white">
          <div className="py-2 px-5 border-b">
            <span>Aksi</span>
          </div>

          <div className="px-5 py-4 pb-5">
            <button
              type="submit"
              form="editUser"
              className="btn btn-sm rounded-[3px] w-full font-medium min-h-9 h-9 hover:text-minoPrimer text-white bg-minoDashboardUngu"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
