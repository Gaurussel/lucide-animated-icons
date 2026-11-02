import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1.5, -6, 6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.85, times: [0, 0.18, 0.5, 0.51, 1] },
);
const led = (delay: number) =>
	pose({ opacity: [1, 0.1, 1, 0.1, 1, 1] }, { duration: 0.85, delay, times: [0, 0.1, 0.2, 0.3, 0.4, 1] });

export default createAnimatedIcon({
	name: "hard-drive-upload",
	render: (part) => (
		<>
			<motion.g {...part(lift)}>
				<path d="m16 6-4-4-4 4" />
				<path d="M12 2v8" />
			</motion.g>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.85, times: [0, 0.12, 0.3, 1] }))}
				height="8"
				rx="2"
				style={edge(0.5, 1)}
				width="20"
				x="2"
				y="14"
			/>
			<motion.path {...part(led(0))} d="M6 18h.01" />
			<motion.path {...part(led(0.08))} d="M10 18h.01" />
		</>
	),
});
