import * as RadioGroup from "@radix-ui/react-radio-group";
import styles from "./RadioGroup.module.scss"
const RadioGroupExample = () => (
    <form>
        <RadioGroup.Root defaultValue="default" className={styles.RadioGroupRoot}>
            <div>
                <RadioGroup.Item className={styles.RadioGroupItem} value="default" id="r1">
                    <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
                </RadioGroup.Item>
                <label className={styles.Label} htmlFor="r1">
                    Default
                </label>
            </div>
            <div >
                <RadioGroup.Item className={styles.RadioGroupItem} value="comfortable" id="r2">
                    <RadioGroup.Indicator className={styles.RadioGroupIndicator} />
                </RadioGroup.Item>
                <label className={styles.Label} htmlFor="r2">
                    Comfortable
                </label>
            </div>
        </RadioGroup.Root>
    </form>
);

export default RadioGroupExample;
