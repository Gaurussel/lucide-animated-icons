import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const drop = pose({ y: [0, -3, 4, 0] }, { duration: 0.65, times: [0, 0.18, 0.38, 1], ease: [snap, "easeIn", springy] });

export default createAnimatedIcon({
	name: "download",
	render: (part) => (
		<>
			<motion.g {...part(drop)}>
				<path d="M12 15V3" />
				<path d="m7 10 5 5 5-5" />
			</motion.g>
			<motion.path
				{...part(jelly(0.32, 0.65))}
				d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
