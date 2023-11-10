import { type IAlertsContext, type IChildrenProps } from '../common/interfaces'
import useAlert from '../hooks/useAlert'
import { createContextCustom } from '../hooks/useContextCustom'

export const [useAlertsContext, ContextProvider] = createContextCustom<IAlertsContext>()

export const Alerts_Provider = ({ children }: IChildrenProps) => {
	const [
		is_visible,
		message,
		type,
		show_alert,
		close_alert
	] = useAlert()

	const providerValue: IAlertsContext = {
		is_visible,
		message,
		type,
		show_alert,
		close_alert
	}

	return <ContextProvider value={providerValue}>{children}</ContextProvider>
}
