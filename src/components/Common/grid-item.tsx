import type React from 'react';
import classNames from 'classnames';

interface Props {
	itemsAlignment?: string;
	itemsJustification?: string;
	flex?: boolean;
	colSpan?: number;
	colStart?: number;
	colEnd?: number;
	rowSpan?: number;
	rowStart?: number;
	rowEnd?: number;
	alignSelf?: string;
	justifySelf?: string;
	children: React.ReactNode;
}

export const GridItem = ({
	itemsAlignment,
	itemsJustification,
	flex,
	colSpan,
	colStart,
	colEnd,
	rowSpan,
	rowStart,
	rowEnd,
	alignSelf,
	justifySelf,
	children
}: Props) => {
	const styles = classNames(`${(flex === true) ? 'flex' : ''} items-${itemsAlignment} justify-${itemsJustification} col-span-${colSpan} col-start-${colStart} col-end-${colEnd} row-span-${rowSpan} row-start-${rowStart} row-end-${rowEnd} self-${alignSelf} justify-self-${justifySelf} w-fit relative`);

	return (
		<div className={styles}>
			{children}
		</div>
	);
};