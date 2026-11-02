import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const shift = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.65, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "equal-not",
	render: (part) => (
		<>
			<motion.line {...part(shift(-4))} x1="5" x2="19" y1="9" y2="9" />
			<motion.line {...part(shift(4))} x1="5" x2="19" y1="15" y2="15" />
			<motion.line {...part(redraw(0.08, 0.45))} x1="19" x2="5" y1="5" y2="19" />
		</>
	),
});
