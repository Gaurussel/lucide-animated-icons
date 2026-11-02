import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const sweep = { duration: 0.85, times: [0, 0.15, 0.55, 0.75, 1] };

export default createAnimatedIcon({
	name: "gauge",
	render: (part) => (
		<>
			<motion.path {...part(pose({ rotate: [0, -12, 80, 80, 0] }, sweep))} d="m12 14 4-4" style={pivot(12, 14)} />
			<motion.path
				{...part(pose({ scale: [1, 1, 1.04, 1.04, 1] }, sweep))}
				d="M3.34 19a10 10 0 1 1 17.32 0"
				style={pivot(12, 14)}
			/>
		</>
	),
});
