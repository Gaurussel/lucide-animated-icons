import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const corner = (x: number, y: number) =>
	pose({ x: [0, -x / 2, x, x, 0], y: [0, -y / 2, y, y, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 0.7, 1] });

export default createAnimatedIcon({
	name: "fullscreen",
	render: (part) => (
		<>
			<motion.path {...part(corner(-1.5, -1.5))} d="M3 7V5a2 2 0 0 1 2-2h2" />
			<motion.path {...part(corner(1.5, -1.5))} d="M17 3h2a2 2 0 0 1 2 2v2" />
			<motion.path {...part(corner(1.5, 1.5))} d="M21 17v2a2 2 0 0 1-2 2h-2" />
			<motion.path {...part(corner(-1.5, 1.5))} d="M7 21H5a2 2 0 0 1-2-2v-2" />
			<motion.rect
				{...part(pose({ scale: [1, 0.9, 1.3, 1.3, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 0.7, 1] }))}
				height="8"
				rx="1"
				style={centered}
				width="10"
				x="7"
				y="8"
			/>
		</>
	),
});
