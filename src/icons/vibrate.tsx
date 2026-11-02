import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const shake = (distance: number) =>
	pose({ x: [0, distance, 0, distance, 0], opacity: [1, 0.4, 1, 0.4, 1] }, { duration: 0.7 });

export default createAnimatedIcon({
	name: "vibrate",
	render: (part) => (
		<>
			<motion.path {...part(shake(-1.5))} d="m2 8 2 2-2 2 2 2-2 2" />
			<motion.path {...part(shake(1.5))} d="m22 8-2 2 2 2-2 2 2 2" />
			<motion.rect
				{...part(pose({ x: [0, -1, 1, -1, 0] }, { duration: 0.7 }))}
				height="14"
				rx="1"
				width="8"
				x="8"
				y="5"
			/>
		</>
	),
});
