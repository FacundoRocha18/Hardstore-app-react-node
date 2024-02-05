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
		<GridItem colSpan={2}>
			<Card className="rounded p-4">
				<Grid columns={3} rows={2} autoCols='fr' gap={2}>
					<GridItem colStart={1} colEnd={2} colSpan={1} rowStart={1} rowSpan={2} alignSelf='center' justifySelf='center'>
						<Image width={100} height={100} src={`data:image/jpeg;base64,${image}`} />
					</GridItem>
					<GridItem colStart={2} colEnd={3} colSpan={1} rowStart={1} rowEnd={2} rowSpan={1}>
						<Link to={`/products/product/${id}`} replace>
							<h6>{name}</h6>
						</Link>
					</GridItem>
					<GridItem colStart={3} colEnd={4} colSpan={1} rowStart={1} rowEnd={3} rowSpan={2} alignSelf='center' justifySelf='center'>
						<p>
							USD <span>{price}</span>
						</p>
					</GridItem>
					<GridItem flex itemsAlignment='center' itemsJustification='between' colStart={2} colEnd={3} colSpan={2}>
						<NumericUpDown quantity={quantity} />
						<RemoveButton />
					</GridItem>
				</Grid>
			</Card>
		</GridItem>
	);
};
