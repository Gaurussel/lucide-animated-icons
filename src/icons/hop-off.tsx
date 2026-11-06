import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const sway = pose(
	{ rotate: [0, 3.6, -10.8, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const bract = (delay: number) =>
	pose(
		{ x: [0, 0, 0.72, 0], y: [0, 0, 0.72, 0] },
		{ duration: 0.6, delay, times: [0, 0.25, 0.4, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "hop-off",
	render: (part) => (
		<>
			<motion.g {...part(sway)} style={pivot(3, 2)}>
				<path d="M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24" />
				<path d="M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" />
				<motion.path
					{...part(bract(0.05))}
					d="M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"
				/>
				<motion.path
					{...part(bract(0.05))}
					d="M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"
				/>
				<motion.path {...part(bract(0.12))} d="M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" />
				<motion.path
					{...part(bract(0.18))}
					d="M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"
				/>
				<motion.path {...part(bract(0.18))} d="M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" />
				<motion.path {...part(bract(0.24))} d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" />
			</motion.g>
			<motion.path {...part(redraw(0.3, 0.35))} d="m2 2 20 20" />
		</>
	),
});
