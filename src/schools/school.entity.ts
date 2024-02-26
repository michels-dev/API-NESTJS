import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class School {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nama_sekolah: string;

    @Column()
    alamat: string;

    @Column()
    nomor_sekolah: string;
}
export default School;