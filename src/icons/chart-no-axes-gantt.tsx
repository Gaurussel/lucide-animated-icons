import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const shift = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.65, delay, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "chart-no-axes-gantt",
	render: (part) => (
		<>
			<motion.path {...part(shift(-3, 0))} d="M8 6h10" />
			<motion.path {...part(shift(3, 0.06))} d="M6 12h9" />
			<motion.path {...part(shift(-3, 0.12))} d="M11 18h7" />
		</>
	),
});
