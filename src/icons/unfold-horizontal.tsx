import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const push = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "unfold-horizontal",
	render: (part) => (
		<>
			<motion.g {...part(push(3))}>
				<path d="M16 12h6" />
				<path d="m19 15 3-3-3-3" />
			</motion.g>
			<motion.g {...part(push(-3))}>
				<path d="M8 12H2" />
				<path d="m5 9-3 3 3 3" />
			</motion.g>
			<path d="M12 2v2" />
			<path d="M12 8v2" />
			<path d="M12 14v2" />
			<path d="M12 20v2" />
		</>
	),
});
