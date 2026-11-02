import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tractor",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.2, 6, -6, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.85, times: [0, 0.18, 0.55, 0.56, 1] },
					),
				)}
			>
				<motion.g
					{...part(pose({ y: [0, 0, -0.8, 0, 0] }, { duration: 0.85, times: [0, 0.6, 0.72, 0.84, 1] }))}
				>
					<path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" />
					<path d="M16 18h-5" />
					<path d="M18 5a1 1 0 0 0-1 1v5.573" />
					<path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" />
					<path d="M4 11V4" />
					<path d="M8 10.1V4" />
				</motion.g>
				<path d="M7 15h.01" />
				<circle cx="18" cy="18" r="2" />
				<circle cx="7" cy="15" r="5" />
			</motion.g>
		</>
	),
});
