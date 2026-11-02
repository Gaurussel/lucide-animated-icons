import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const rows = (amount: number) => pose({ y: [0, amount, 0, 0] }, { duration: 0.85, times: [0, 0.25, 0.5, 1] });
const columns = (amount: number) => pose({ x: [0, 0, amount, 0] }, { duration: 0.85, times: [0, 0.4, 0.65, 1] });

export default createAnimatedIcon({
	name: "grid-3x3",
	render: (part) => (
		<>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(rows(-3))} d="M3 9h18" />
			<motion.path {...part(rows(3))} d="M3 15h18" />
			<motion.path {...part(columns(-3))} d="M9 3v18" />
			<motion.path {...part(columns(3))} d="M15 3v18" />
		</>
	),
});
