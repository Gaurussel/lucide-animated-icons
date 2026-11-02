import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const node = (delay: number) => pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, delay, times: [0, 0.25, 0.55, 1] });
const tip = (dx: number) => pose({ x: [0, -dx / 2, dx, 0] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] });

export default createAnimatedIcon({
	name: "git-compare-arrows",
	render: (part) => (
		<>
			<motion.circle {...part(node(0))} cx="5" cy="6" r="3" style={centered} />
			<path d="M12 6h5a2 2 0 0 1 2 2v7" />
			<motion.path {...part(tip(-2.5))} d="m15 9-3-3 3-3" />
			<motion.circle {...part(node(0.1))} cx="19" cy="18" r="3" style={centered} />
			<path d="M12 18H7a2 2 0 0 1-2-2V9" />
			<motion.path {...part(tip(2.5))} d="m9 15 3 3-3 3" />
		</>
	),
});
