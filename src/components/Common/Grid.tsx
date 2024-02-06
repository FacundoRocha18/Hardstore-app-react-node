import classNames from 'classnames';
import type React from "react";

interface Props {
	autoCols?: string;
	columns?: number | string;
	autoRows?: string;
	rows?: number | string;
	gap?: number;
	height?: number;
	width?: number;
	itemsAlignment?: string;
	children: React.ReactNode;
}

const Grid = ({
	autoCols,
	autoRows,
	itemsAlignment,
	columns,
	rows,
	gap,
	height,
	width,
	children,
}: Props) => {
	return (
		<>
			<div
				className={classNames(`grid items-${itemsAlignment} auto-cols-fr grid-cols-${columns} auto-rows-${autoRows} grid-rows-${rows} gap-${gap} h-${height} w-${width} relative`)}
			>
				{children}
			</div>
		</>
	);
};

export default Grid;
