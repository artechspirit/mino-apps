export interface IFormData {
  name?: string;
  email?: string;
  username?: string;
  phone?: string;
  gender?: string;
  tempat_lahir?: string;
  tanggal_lahir?: Date;
  bank?: string;
  no_rekening?: string;
  status?: string;
  alamat?: string;
};

export interface IUser {
  id: number,
  name: string;
  email: string;
  username: string;
  phone: string;
  gender: string;
  tempat_lahir: string;
  tanggal_lahir: string | Date;
  bank: string;
  no_rekening?: string;
  status?: string;
  alamat?: string;
}