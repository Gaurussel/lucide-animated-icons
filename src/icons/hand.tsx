import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const wave = pose(
	{ rotate: [0, 6, -20, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const flick = (x: number, delay: number) => ({
	variants: pose(
		{ rotate: [0, 0, -18, 0] },
		{ duration: 0.6, delay, times: [0, 0.2, 0.35, 1], ease: ["easeInOut", snap, ring] },
	),
	style: pivot(x, 11),
});

export default createAnimatedIcon({
	name: "hand",
	render: (part) => {
		const fingers = [flick(8, 0.06), flick(12, 0.12), flick(16, 0.18)];
		return (
			<motion.g {...part(wave)} style={pivot(13, 22)}>
				<motion.path
					{...part(fingers[2].variants)}
					d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"
					style={fingers[2].style}
				/>
				<motion.path
					{...part(fingers[1].variants)}
					d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"
					style={fingers[1].style}
				/>
				<motion.path
					{...part(fingers[0].variants)}
					d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"
					style={fingers[0].style}
				/>
				<path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
			</motion.g>
		);
	},
});
