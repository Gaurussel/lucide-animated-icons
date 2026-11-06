import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] };

export default createAnimatedIcon({
	name: "scaling",
	render: (part) => (
		<>
			<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
			<motion.path {...part(pose({ x: [0, -1.2, 0], y: [0, 1.2, 0] }, timing))} d="M14 15H9v-5" />
			<motion.path {...part(pose({ x: [0, 1.2, 0], y: [0, -1.2, 0] }, timing))} d="M16 3h5v5" />
			<motion.path {...part(pose({ scale: [1, 1.2, 1] }, timing))} d="M21 3 9 15" style={pivot(15, 9)} />
		</>
	),
});
