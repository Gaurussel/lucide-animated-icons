import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, springy } from "../helpers.ts";

const fade = pose(
	{ rotate: [0, 4.79, 0] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const nod = pose(
	{ rotate: [0, -12, 0], scale: [1, 0.91, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "circle-fading-plus",
	render: (part) => (
		<>
			<motion.g {...part(fade)} style={pivot(12, 12)}>
				<path d="M12 2a10 10 0 0 1 7.38 16.75" />
				<path d="M2.5 8.875a10 10 0 0 0-.5 3" />
				<path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
				<path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
				<path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
			</motion.g>
			<motion.g {...part(nod)} style={pivot(12, 12)}>
				<path d="M12 8v8" />
				<path d="M16 12H8" />
			</motion.g>
		</>
	),
});
