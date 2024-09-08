"use client";
import DatePicker from "react-datepicker";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaUser } from "@/constant/validationSchema";
import { formatDate } from "@/utils";
import { IFormData, IUser } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddUser() {
  const router = useRouter();
  const [lastId, setLasId] = useState<number>(0);
  const { register, handleSubmit, control, reset } = useForm({
    resolver: yupResolver(validationSchemaUser),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      phone: "",
      gender: "",
      tempat_lahir: "",
      tanggal_lahir: new Date(),
      bank: "",
      no_rekening: "",
      status: "Single",
      alamat: "",
    },
  });

  const addUser = async (data: IFormData) => {
    const newUser = {
      ...data,
      id: lastId + 1,
      tanggal_lahir: formatDate(data.tanggal_lahir as Date),
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
        config
      );
      const result = await response.json();
      console.log(result);

      router.push("/test-2");
    } catch (err) {
      console.error(err);
    }
  };

  const getUsers = async () => {
    try {
      const respon = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
      const data = await respon.json();
      const lastId = data.reduce((max: number, item: IUser) => {
        return item.id > max ? item.id : max;
      }, 0);
      setLasId(lastId);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="dashboard-home">
      <div className="flex items-center">
        <h2 className="font-bold mr-2">Data User</h2>
        <Link
          href="/test-2/"
          className="btn btn-sm rounded-[3px] font-medium min-h-9 h-9 hover:text-minoPrimer text-white bg-minoDashboardUngu"
        >
          Cancel
        </Link>
      </div>

      <div className="flex justify-between">
        <div className="card glass mt-6 w-[86%] rounded-sm bg-white">
          <div className="py-2 px-5 border-b">
            <span>Profile</span>
          </div>

          <div className="form-add-user flex justify-between p-4">
            <form
              id="addUser"
              onSubmit={handleSubmit(addUser)}
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
                  defaultValue=""
                  {...register("gender")}
                  className="select h-[2.5rem] w-full ml-4 shadow focus:shadow input-bordered max-w-[234px] rounded-none active:outline-0 focus:outline-none"
                >
                  <option value="" disabled>
                    Gender
                  </option>
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
                      selected={field.value}
                      onChange={(date) =>
                        reset({ tanggal_lahir: date as Date })
                      }
                      id="tanggal_lahir"
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
              form="addUser"
              className="btn btn-sm rounded-[3px] w-full font-medium min-h-9 h-9 hover:text-minoPrimer text-white bg-minoDashboardUngu"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
