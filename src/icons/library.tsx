import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const pull = (delay: number) => pose({ y: [0, -4, 0] }, { duration: 0.4, delay });

export default createAnimatedIcon({
	name: "library",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -4, 0], rotate: [0, 12, 0] }, { duration: 0.4, delay: 0.36 }))}
				d="m16 6 4 14"
				style={pivot(20, 20)}
			/>
			<motion.path {...part(pull(0.24))} d="M12 6v14" />
			<motion.path {...part(pull(0.12))} d="M8 8v12" />
			<motion.path {...part(pull(0))} d="M4 4v16" />
		</>
	),
});
