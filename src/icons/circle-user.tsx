import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const rise = (lift: number, delay: number) =>
	pose({ y: [0, lift, lift, 0] }, { duration: 0.65, delay, times: [0, 0.35, 0.6, 1] });

export default createAnimatedIcon({
	name: "circle-user",
	render: (part) => (
		<>
			<circle cx="12" cy="12" r="10" />
			<motion.path {...part(rise(-1.2, 0.08))} d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
			<motion.g
				{...part(
					pose(
						{ y: [0, -3, -3, -3, 0], rotate: [0, 0, -20, 15, 0] },
						{ duration: 0.75, times: [0, 0.3, 0.5, 0.7, 1] },
					),
				)}
				style={pivot(12, 13)}
			>
				<circle cx="12" cy="10" r="3" />
			</motion.g>
		</>
	),
});
