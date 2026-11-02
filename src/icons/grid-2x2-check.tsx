import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.95, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 1] });
const check = pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.4, 0.8] });

export default createAnimatedIcon({
	name: "grid-2x2-check",
	render: (part) => (
		<>
			<motion.path
				{...part(press)}
				d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
				style={pivot(3, 21)}
			/>
			<motion.path {...part(check)} d="m16 19 2 2 4-4" />
		</>
	),
});
