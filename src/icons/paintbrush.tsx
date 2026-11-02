import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, springy } from "../helpers.ts";

const stroke = pose(
	{ rotate: [0, -8, 22, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeIn", springy] },
);
const bristles = pose(
	{ rotate: [0, 6, -16, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.48, 1], ease: ["easeInOut", "easeOut", ring] },
);

export default createAnimatedIcon({
	name: "paintbrush",
	render: (part) => (
		<motion.g {...part(stroke)} style={pivot(20, 4)}>
			<path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
			<motion.g {...part(bristles)} style={pivot(12, 11)}>
				<motion.path {...part(redraw(0.3, 0.4))} d="m14.622 17.897-10.68-2.913" />
				<path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
			</motion.g>
		</motion.g>
	),
});
