import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const wilt = (at: number) =>
	pose(
		{ rotate: [0, -2.4, 15.6, 0] },
		{ duration: 0.72, times: [0, at, at + 0.12, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "wheat-off",
	render: (part) => (
		<>
			<path d="m2 22 10-10" />
			<path d="m16 8-1.17 1.17" />
			<motion.g {...part(wilt(0.2))} style={pivot(5, 19)}>
				<path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
				<path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
			</motion.g>
			<motion.g {...part(wilt(0.26))} style={pivot(9, 15)}>
				<path d="m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" />
				<path d="m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" />
			</motion.g>
			<motion.g {...part(wilt(0.32))} style={pivot(13, 11)}>
				<path d="M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" />
				<path d="M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" />
			</motion.g>
			<motion.path {...part(wilt(0.38))} d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" style={pivot(16, 8)} />
			<motion.line {...part(redraw(0, 0.32))} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
