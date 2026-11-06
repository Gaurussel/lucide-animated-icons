import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const chase = (delay: number) =>
	pose(
		{ rotate: [0, -30, 360], scale: [1, 0.88, 1] },
		{ duration: 0.65, delay, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
	);

export default createAnimatedIcon({
	name: "squircle-dashed",
	render: (part) => (
		<>
			<motion.g {...part(chase(0))} style={pivot(12, 12)}>
				<path d="M13.77 3.043a34 34 0 0 0-3.54 0" />
				<path d="M20.957 10.23a33 33 0 0 1 0 3.54" />
				<path d="M13.771 20.956a33 33 0 0 1-3.541.001" />
				<path d="M3.043 10.23a34 34 0 0 0 .001 3.541" />
			</motion.g>
			<motion.g {...part(chase(0.1))} style={pivot(12, 12)}>
				<path d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" />
				<path d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" />
				<path d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" />
				<path d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" />
			</motion.g>
		</>
	),
});
