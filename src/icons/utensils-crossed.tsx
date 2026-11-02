import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring, snap } from "../helpers.ts";

const draw = (x: number, y: number, at: number) =>
	pose(
		{ x: [0, x, -x / 3, 0], y: [0, y, -y / 3, 0] },
		{ duration: 0.72, times: [0, at, at + 0.14, 1], ease: [snap, "easeIn", ring] },
	);

export default createAnimatedIcon({
	name: "utensils-crossed",
	render: (part) => (
		<>
			<motion.g {...part(draw(3, -3, 0.2))}>
				<path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
				<path d="m2.1 21.8 6.4-6.3" />
				<path d="m19 5-7 7" />
			</motion.g>
			<motion.path
				{...part(draw(-3, -3, 0.28))}
				d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"
			/>
		</>
	),
});
