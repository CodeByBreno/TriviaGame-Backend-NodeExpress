import { Question } from "@entities/Question/Question";
import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("option_question")
class OptionQuestion {
  @PrimaryGeneratedColumn("uuid")
  id_answer_question: string;

  @Column()
  text: string;

  @Column()
  correct: boolean;

  @Column()
  type: string;

  @Column({ nullable: true })
  equivalent_option_id?: string;

  @OneToOne(() => OptionQuestion)
  @JoinColumn({ name: "equivalent_option_id" })
  equivalent_option?: OptionQuestion;

  @Column()
  question_id: string;

  @ManyToOne(() => Question, (question) => question.options)
  @JoinColumn({ name: "question_id" })
  question: Question;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Exclude()
  @DeleteDateColumn()
  deleted_at: Date;
}

export { OptionQuestion };
