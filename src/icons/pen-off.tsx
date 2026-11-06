import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const scribble = pose(
	{ x: [0, -1.2, 1.2, -0.6, 0], y: [0, -0.6, 0.6, 0, 0], rotate: [0, -7.2, 4.8, -3.6, 0] },
	{ duration: 0.65, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "pen-off",
	render: (part) => (
		<>
			<motion.g {...part(scribble)} style={pivot(3, 21)}>
				<path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" />
				<path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.5))} d="m2 2 20 20" />
		</>
	),
});
