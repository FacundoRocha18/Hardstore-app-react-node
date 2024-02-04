import type React from 'react';

interface Props {
	autoCols?: string
	columns?: number | string
	autoRows?: string
	rows?: number | string
	gap?: number
	colSpan?: number
	colStart?: number
	rowSpan?: number
	rowStart?: number
	height?: number
	width?: number
	itemsAlignment?: string
	children: React.ReactNode
}

const Grid = ({ autoCols, autoRows, itemsAlignment, columns, rows, gap, colSpan, colStart, rowSpan, rowStart, height, width, children }: Props) => {
	return (
		<>
			<section className={`grid items-${itemsAlignment} auto-cols-${autoCols} grid-cols-${columns} auto-rows-${autoRows} grid-rows-${rows} gap-${gap} col-span-${colSpan} col-start-${colStart} row-span-${rowSpan} row-start-${rowStart} h-${height} w-${width}`}>
				{
					children
				}
			</section>
		</>
	);
};

export default Grid;
