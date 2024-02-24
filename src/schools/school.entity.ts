import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class School {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({length: 255})
    nama_sekolah: string;

    @Column({length: 255})
    alamat: string;

    @Column()
    nomor_sekolah: number;
}
export default School;