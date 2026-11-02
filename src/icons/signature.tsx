import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const underline = pose({ x: [0, -3, 0] }, { duration: 0.6, delay: 0.12, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "signature",
	render: (part) => (
		<>
			<motion.path
				{...part(redraw(0, 0.7))}
				d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"
			/>
			<motion.path {...part(underline)} d="M3 21h18" />
		</>
	),
});
