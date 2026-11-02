import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const bar = (delay: number) => pose({ scaleX: [1, 0.1, 0.1, 1] }, { duration: 0.65, delay, times: [0, 0.3, 0.5, 1] });

export default createAnimatedIcon({
	name: "chart-bar",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.55, 1] }))}
				d="M3 3v16a2 2 0 0 0 2 2h16"
			/>
			<motion.path {...part(bar(0.15))} d="M7 6h3" style={edge(0, 0.5)} />
			<motion.path {...part(bar(0.25))} d="M7 11h12" style={edge(0, 0.5)} />
			<motion.path {...part(bar(0.35))} d="M7 16h8" style={edge(0, 0.5)} />
		</>
	),
});
