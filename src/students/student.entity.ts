import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sas_master_siswa')
class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "timestamp"})
    date_time: Date;

    @Column()
    modified: Date;

    @Column()
    ip: string;

    @Column()
    creator: number;

    @Column()
    modifier: number;

    @Column()
    nospj: string;

    @Column({ type: "text" })
    spj: string;

    @Column()
    kodesek: string;

    @Column()
    kelas: string;

    @Column()
    noinduk: string;

    @Column()
    no_urut_kelas: string;

    @Column()
    no_urut_buku_induk: string;

    @Column()
    nik_guru_term_1: string;

    @Column()
    nik_guru_term_2: string;

    @Column()
    nik_guru_term_3: string;

    @Column()
    nik_guru_term_4: string;

    @Column()
    namasiswa: string;

    @Column()
    aktif: string;

    @Column({ type: "text" })
    foto: string;

    @Column()
    keterangan: string;

    @Column()
    status_aktif_sekolah: number;

    @Column()
    notes: string;
}
export default Student;