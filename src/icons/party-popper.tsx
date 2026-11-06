import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const recoil = pose({ rotate: [0, 7.2, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const burst = (x: number, y: number) =>
	pose(
		{ x: [0, -x, 0], y: [0, -y, 0], opacity: [1, 0, 1] },
		{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeIn", springy] },
	);

export default createAnimatedIcon({
	name: "party-popper",
	render: (part) => (
		<>
			<motion.g {...part(recoil)} style={pivot(2, 22)}>
				<path d="M5.8 11.3 2 22l10.7-3.79" />
				<path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
			</motion.g>
			<motion.path {...part(burst(-3, -5))} d="M4 3h.01" />
			<motion.path {...part(burst(6, -3))} d="M22 8h.01" />
			<motion.path {...part(burst(4, -6))} d="M15 2h.01" />
			<motion.path {...part(burst(6, 4))} d="M22 20h.01" />
			<motion.path
				{...part(redraw(0.15, 0.5))}
				d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
			/>
			<motion.path
				{...part(redraw(0.2, 0.5))}
				d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"
			/>
			<motion.path
				{...part(redraw(0.2, 0.5))}
				d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"
			/>
		</>
	),
});
