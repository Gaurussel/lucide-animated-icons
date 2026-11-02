import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber } from "../helpers.ts";

const write = (degrees: number, delay: number) =>
	pose({ rotate: [0, degrees, 0] }, { duration: 0.6, delay, times: [0, 0.35, 1], ease: ["easeInOut", rubber] });

export default createAnimatedIcon({
	name: "ampersands",
	render: (part) => (
		<>
			<motion.g {...part(write(-14, 0))} style={pivot(6, 18)}>
				<motion.path
					{...part(redraw(0, 0.4))}
					d="M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
				/>
			</motion.g>
			<motion.g {...part(write(14, 0.12))} style={pivot(18, 18)}>
				<motion.path
					{...part(redraw(0.12, 0.4))}
					d="M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
				/>
			</motion.g>
		</>
	),
});
