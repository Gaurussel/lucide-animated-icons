import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const flick = pose(
	{ y: [0, 1, -2.5, -2.5, 0], rotate: [0, 0, -7, -7, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.5, 0.68, 1] },
);

export default createAnimatedIcon({
	name: "framer",
	render: (part) => (
		<motion.path {...part(flick)} d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" style={edge(0.5, 1)} />
	),
});
