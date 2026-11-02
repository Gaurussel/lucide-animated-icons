import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const jab = pose(
	{ x: [0, -2, 4, 0] },
	{ duration: 0.65, times: [0, 0.18, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "forward",
	render: (part) => (
		<>
			<motion.path {...part(jab)} d="m15 17 5-5-5-5" />
			<motion.path {...part(redraw(0.12, 0.5))} d="M4 18v-2a4 4 0 0 1 4-4h12" />
		</>
	),
});
