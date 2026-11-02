import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const sweep = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const trail = pose(
	{ rotate: [0, 0, 360] },
	{ duration: 0.75, delay: 0.08, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "clock-fading",
	render: (part) => (
		<>
			<motion.g {...part(trail)} style={pivot(12, 12)}>
				<path d="M12 2a10 10 0 0 1 7.38 16.75" />
				<motion.path {...part(redraw(0.3, 0.25))} d="M2.5 8.875a10 10 0 0 0-.5 3" />
				<motion.path {...part(redraw(0.24, 0.25))} d="M2.83 16a10 10 0 0 0 2.43 3.4" />
				<motion.path {...part(redraw(0.36, 0.25))} d="M4.636 5.235a10 10 0 0 1 .891-.857" />
				<motion.path {...part(redraw(0.18, 0.25))} d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
			</motion.g>
			<motion.path {...part(sweep)} d="M12 6v6l4 2" style={pivot(12, 12)} />
		</>
	),
});
