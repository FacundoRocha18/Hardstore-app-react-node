import type React from 'react';

interface Props {
	columns?: number
	rows?: number
	gap?: number
	colSpan?: number
	colStart?: number
	rowSpan?: number
	rowStart?: number
	height?: number
	width?: number
	children: React.ReactNode
}

const Grid = ({ columns, rows, gap, colSpan, colStart, rowSpan, rowStart, height, width, children }: Props) => {
	return (
		<>
			<section className={`grid grid-cols-${columns} grid-rows-${rows} gap-${gap} col-span-${colSpan} col-start-${colStart} row-span-${rowSpan} row-start-${rowStart} h-${height} w-${width}`}>
				{
					children
				}
			</section>
		</>
	);
};

export default Grid;
