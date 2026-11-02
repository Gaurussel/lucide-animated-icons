import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap } from "../helpers.ts";

const half = (direction: number) =>
	pose(
		{ x: [0, 2.5 * direction, 0], rotate: [0, 10 * direction, 0] },
		{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] },
	);

export default createAnimatedIcon({
	name: "brain",
	render: (part) => (
		<>
			<motion.g {...part(half(-1))} style={pivot(12, 20)}>
				<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
				<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
				<path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
				<path d="M6 18a4 4 0 0 1-1.967-.516" />
			</motion.g>
			<motion.g {...part(half(1))} style={pivot(12, 20)}>
				<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
				<path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
				<path d="M19.938 10.5a4 4 0 0 1 .585.396" />
				<path d="M19.967 17.484A4 4 0 0 1 18 18" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.5))} d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
		</>
	),
});
