import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { type ICartItem } from "../../common/interfaces";
import { NumericUpDown } from '../Common/numeric-up-down';
import Grid from '../Common/grid';
import { RemoveButton } from '../Common/remove-button';
import { GridItem } from '../Common/grid-item';

interface Props {
	item: ICartItem;
}

export const CartItem = ({ item }: Props) => {
	const { id, name, price, quantity, image } = item;

	return (
		<Card className="rounded flex-row col-span-2 min-w-full" fullWidth>
			<CardHeader className='w-fit'>
				<Image width={100} height={100} src={`data:image/jpeg;base64,${image}`} />
			</CardHeader>
			<CardBody className='p-3'>
				<div className='grid grid-cols-6 grid-rows-2'>
					<GridItem colStart={1} colEnd={3} colSpan={2} rowStart={1} rowEnd={2} rowSpan={1} alignSelf='center' justifySelf='start'>
						<Link to={`/products/product/${id}`} replace>
							<h6 className='line-clamp-1 text-ellipsis'>{name}</h6>
						</Link>
					</GridItem>
					<GridItem colStart={3} colEnd={4} colSpan={1} rowStart={1} rowEnd={2} rowSpan={1} alignSelf='center' justifySelf='start'>
						<p>
							USD <span>{price}</span>
						</p>
					</GridItem>
					<div className='col-start-1 col-end-2 self-center'>
						<NumericUpDown quantity={quantity} />
					</div>
					<div className='col-start-3 col-end-4 row-start-2 row-end-3 self-center justify-self-center'>
						<RemoveButton />
					</div>
				</div>
			</CardBody>
		</Card>
	);
};
