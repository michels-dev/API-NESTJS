import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Major {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    jenjang: string;

    @Column()
    jurusan: string;
}

export default Major;