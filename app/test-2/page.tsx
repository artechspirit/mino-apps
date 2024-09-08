"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";
import { IUser } from "@/types";

export default function Dashboard() {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
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
          href="/test-2/add-user"
          className="btn btn-sm rounded-[3px] font-medium min-h-9 h-9 hover:text-minoPrimer text-white bg-minoDashboardUngu"
        >
          Add New
        </Link>
      </div>

      <div className="card glass mt-6 w-full rounded-sm bg-white">
        <div className="py-2 px-5 border-b">
          <span>List User</span>
        </div>

        <div className="px-5 py-4 pb-5">
          <div className="overflow-x-auto">
            <table className="table border">
              {/* head */}
              <thead>
                <tr>
                  <th className="font-bold text-sm text-minoAccentPrimer">
                    Id User
                  </th>
                  <th className="font-bold text-sm text-minoAccentPrimer">
                    Nama
                  </th>
                  <th className="font-bold text-sm text-minoAccentPrimer">
                    Email
                  </th>
                  <th className="font-bold text-sm text-minoAccentPrimer">
                    Username
                  </th>
                  <th className="font-bold text-sm text-minoAccentPrimer">
                    Phone
                  </th>
                  <th className="font-bold text-sm text-minoAccentPrimer">
                    Action
                  </th>
                </tr>
              </thead>
              {/* body */}
              <tbody>
                {users.length > 0 &&
                  users.map(({ id, name, email, username, phone }: IUser) => (
                    <tr key={id}>
                      <th>{id}</th>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{username}</td>
                      <td>{phone}</td>
                      <td>
                        <Link href={`/test-2/detail-user/${id}`}>
                          <FaPencilAlt
                            size={15}
                            className="text-minoAccentPrimer ml-3"
                          />
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
