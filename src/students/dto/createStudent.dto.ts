//DTO -> DATA TRANSFER OBJECT : OBJEK TRANSFER DATA

export class CreateStudentDto {
    date_time: Date;
    modified: Date;
    ip: string;
    creator: number;
    modifier: number;
    nospj: string;
    spj: string;
    kodesek: string;
    kelas: string;
    noinduk: string;
    no_urut_kelas: string;
    no_urut_buku_induk: string;
    nik_guru_term_1: string;
    nik_guru_term_2: string;
    nik_guru_term_3: string;
    nik_guru_term_4: string;
    namasiswa: string;
    aktif: string;
    foto: string;
    keterangan: string;
    status_aktif_sekolah: number;
    notes: string;
}

export default CreateStudentDto;