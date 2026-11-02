import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.4, 0.65, 1];
const apart = (x: number) => pose({ x: [0, x, x, 0], y: [0, -2, -2, 0] }, { duration: 0.7, times });

export default createAnimatedIcon({
	name: "split",
	render: (part) => (
		<>
			<motion.g {...part(apart(2))}>
				<path d="M16 3h5v5" />
				<path d="m15 9 6-6" />
			</motion.g>
			<motion.path {...part(apart(-2))} d="M8 3H3v5" />
			<path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
		</>
	),
});
