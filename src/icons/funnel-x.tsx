import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const sift = pose(
	{ y: [0, -2.4, 0], rotate: [0, 8.4, 0] },
	{ duration: 0.75, times: [0, 0.22, 1], ease: [snap, ring] },
);

export default createAnimatedIcon({
	name: "funnel-x",
	render: (part) => (
		<>
			<motion.path
				{...part(sift)}
				d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"
				style={pivot(12, 22)}
			/>
			<motion.path {...part(redraw(0.1, 0.4))} d="m16.5 3.5 5 5" />
			<motion.path {...part(redraw(0.22, 0.4))} d="m21.5 3.5-5 5" />
		</>
	),
});
