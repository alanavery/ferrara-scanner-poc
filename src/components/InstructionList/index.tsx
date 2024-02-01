import styles from "./index.module.css";

const Instruction = ({
  number,
  text,
}: {
  number: number;
  text: string;
}) => (
  <div className={styles.instruction}>
    <div className={styles.number}>
      <span>{number}</span>
    </div>
    <div className={styles.text}>{text}</div>
  </div>
);

export const InstructionList = ({
  instructions,
}: {
  instructions: { number: number; text: string }[];
}) => (
  <div className={styles.container}>
    {instructions.map((instruction) => (
      <Instruction
        key={instruction.number}
        number={instruction.number}
        text={instruction.text}
      />
    ))}
  </div>
);
