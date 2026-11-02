import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const rows = (amount: number) => pose({ y: [0, amount, 0, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] });
const columns = (amount: number) => pose({ x: [0, 0, amount, 0] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] });

export default createAnimatedIcon({
	name: "hash",
	render: (part) => (
		<>
			<motion.line {...part(rows(-2))} x1="4" x2="20" y1="9" y2="9" />
			<motion.line {...part(rows(2))} x1="4" x2="20" y1="15" y2="15" />
			<motion.line {...part(columns(-2))} x1="10" x2="8" y1="3" y2="21" />
			<motion.line {...part(columns(2))} x1="16" x2="14" y1="3" y2="21" />
		</>
	),
});
