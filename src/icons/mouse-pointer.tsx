import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mouse-pointer",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.2, 2.5, 2.5, 0], y: [0, -1.2, 2.5, 2.5, 0], scale: [1, 1, 1, 0.9, 1] },
						{ duration: 0.75, times: [0, 0.2, 0.5, 0.65, 1] },
					),
				)}
				style={pivot(4, 4)}
			>
				<path d="M12.586 12.586 19 19" />
				<path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" />
			</motion.g>
		</>
	),
});
