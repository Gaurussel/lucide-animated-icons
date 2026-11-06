import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const slice = pose({ x: [0, 1.8, 0], y: [0, -1.8, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] });
const rest = pose({ x: [0, -0.6, 0], y: [0, 0.6, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "chart-pie",
	render: (part) => (
		<>
			<motion.path
				{...part(slice)}
				d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
			/>
			<motion.path {...part(rest)} d="M21.21 15.89A10 10 0 1 1 8 2.83" />
		</>
	),
});
