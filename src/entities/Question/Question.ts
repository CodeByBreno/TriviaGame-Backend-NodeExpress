import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { OptionQuestion } from "@entities/OptionQuestion/OptionQuestion";

@Entity("question")
class Question {
  @PrimaryGeneratedColumn("uuid")
  id_basic_question: string;

  @Column()
  text: string;

  @Column({ nullable: true })
  image_url: string;

  @Column({ type: "int" })
  QUESTION: number;

  @Column()
  type: string;

  @OneToMany(() => OptionQuestion, (option) => option.question)
  options: OptionQuestion[];

  @Column({ nullable: true })
  time: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Exclude()
  @DeleteDateColumn()
  deleted_at: Date;
}

export { Question };
