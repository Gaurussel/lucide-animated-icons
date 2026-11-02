import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const hop = (index: number) =>
	pose({ y: [0, -3, 0, 0], scale: [1, 1.35, 1, 1] }, { duration: 0.7, delay: index * 0.1, times: [0, 0.35, 0.7, 1] });

export default createAnimatedIcon({
	name: "ellipsis",
	render: (part) => (
		<>
			<motion.circle {...part(hop(0))} cx="5" cy="12" r="1" style={centered} />
			<motion.circle {...part(hop(1))} cx="12" cy="12" r="1" style={centered} />
			<motion.circle {...part(hop(2))} cx="19" cy="12" r="1" style={centered} />
		</>
	),
});
