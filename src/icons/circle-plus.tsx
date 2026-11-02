import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] });

export default createAnimatedIcon({
	name: "circle-plus",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.g
				{...part(
					pose({ scale: [1, 0, 0, 1], rotate: [0, 0, -90, 0] }, { duration: 0.7, times: [0, 0.3, 0.35, 1] }),
				)}
				style={centered}
			>
				<path d="M8 12h8" />
				<path d="M12 8v8" />
			</motion.g>
		</>
	),
});
