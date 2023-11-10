import { Link } from 'react-router-dom'

interface Props {
	text_color: 'white' | 'black'
}

export const Logo = ({ text_color }: Props) => {
	return (
		<Link to={'/'}>
			<h1 className={`text-${text_color}`}>Techie Shop <span className='font-medium text-orange-500'>UY</span></h1>
		</Link>
	)
}
