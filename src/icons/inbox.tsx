import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const slot = pose({ y: [0, -3, 1.8, 0] }, { duration: 0.7, times: [0, 0.2, 0.38, 1], ease: [snap, "easeIn", springy] });
const dip = pose(
	{ y: [0, 0, 1.2, 0] },
	{ duration: 0.7, times: [0, 0.36, 0.46, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "inbox",
	render: (part) => (
		<motion.g {...part(dip)}>
			<motion.polyline {...part(slot)} points="22 12 16 12 14 15 10 15 8 12 2 12" />
			<motion.path
				{...part(jelly(0.4, 0.7))}
				d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
				style={edge(0.5, 1)}
			/>
		</motion.g>
	),
});
