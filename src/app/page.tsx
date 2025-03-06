import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className={styles.page}>
   
       <Button variant="classic">Click me</Button>
    
    </div>
  );
}
