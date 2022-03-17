import HomePage from '../pages/HomePage'
import InvoicePage from '../pages/InvoicePage'
import SettingsPage from '../pages/SettingsPage'
import TicketPage from '../pages/TicketPage'
import {IRoutes} from '../interfaces/routeTypes'

export const routes: IRoutes[] = [
    {path:"/", key:"HOMEPAGE", component: HomePage},
    {path: "/TicketPage", key:"TICKETPAGE", component: TicketPage},
    {path: "/InvoicePage", key:"INVOICEPAGE", component: InvoicePage},
    {path: "/SettingsPage", key:"SETTINGSPAGE", component: SettingsPage},
]