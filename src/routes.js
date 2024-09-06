import React from 'react'

// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Details = React.lazy(() => import('./views/details/details'))
const Images = React.lazy(() => import('./views/images/images'))
const Social = React.lazy(() => import('./views/social/social'))
const Design = React.lazy(() => import('./views/design/design'))
const Setting = React.lazy(() => import('./views/setting/setting'))
const test = React.lazy(() => import('./views/test/test'))
const template1 = React.lazy(() => import('./views/templates/template1'))
const template2 = React.lazy(() => import('./views/templates/template2'))
const template3 = React.lazy(() => import('./views/templates/template3'))
const template4 = React.lazy(() => import('./views/templates/template4'))
const template5 = React.lazy(() => import('./views/templates/template5'))
const template6 = React.lazy(() => import('./views/templates/template6'))
const template7 = React.lazy(() => import('./views/templates/template7'))
const template8 = React.lazy(() => import('./views/templates/template8'))
const template9 = React.lazy(() => import('./views/templates/template9'))
const template10 = React.lazy(() => import('./views/templates/template10'))
const template11 = React.lazy(() => import('./views/templates/template11'))
const template12 = React.lazy(() => import('./views/templates/template12'))
const template13 = React.lazy(() => import('./views/templates/template13'))
const template14 = React.lazy(() => import('./views/templates/template14'))
const template15 = React.lazy(() => import('./views/templates/template15'))
const template16 = React.lazy(() => import('./views/templates/template16'))
// const template17 = React.lazy(() => import('./views/templates/template17'))
// const template18 = React.lazy(() => import('./views/templates/template18'))

// const OutfitterManagement = React.lazy(() => import('./views/outfitterManagement/OutfitterManagement'))
// const Oversight = React.lazy(() => import('./views/oversight/Oversight'))
// const UserManagement = React.lazy(() => import('./views/userManagement/UserManagement'))
// const AnalyticsReporting = React.lazy(() => import('./views/analytics&Reporting/Analytics&Reporting'))
// const CommunicationSupport = React.lazy(() => import('./views/communication&Support/Communication&Support'))
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// // Base
// const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
// const Cards = React.lazy(() => import('./views/base/cards/Cards'))
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
// const Navs = React.lazy(() => import('./views/base/navs/Navs'))
// const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
// const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
// const Progress = React.lazy(() => import('./views/base/progress/Progress'))
// const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
// const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// // Buttons
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

// //Forms
// const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
// const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
// const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
// const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
// const Range = React.lazy(() => import('./views/forms/range/Range'))
// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// const Charts = React.lazy(() => import('./views/charts/Charts'))

// // Icons
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// // Notifications
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
// const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

// const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  // { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', element: Dashboard },
  { path: '/details', element: Details },
  { path: '/images', element: Images },
  { path: '/social', element: Social },
  { path: '/design', element: Design},
  { path: '/setting', element: Setting},
  { path: '/test', element: test},
  { path: '/template1', element: template1},
  { path: '/template2', element: template2},
  { path: '/template3', element: template3},
  { path: '/template4', element: template4},
  { path: '/template5', element: template5},
  { path: '/template6', element: template6},
  { path: '/template7', element: template7},
  { path: '/template8', element: template8},
  { path: '/template9', element: template9},
  { path: '/template10', element: template10},
  { path: '/template11', element: template11},
  { path: '/template12', element: template12},
  { path: '/template13', element: template13},
  { path: '/template14', element: template14},
  { path: '/template15', element: template15},
  { path: '/template16', element: template16},
  // { path: '/template17', element: template17},
  // { path: '/template18', element: template18},
  // { path: '/template1', element: template1},
  // { path: '/outfitterManagement', name: 'OutfitterManagement', element: OutfitterManagement },
  // { path: '/oversight', name: 'Oversight', element: Oversight },
  // { path: '/userManagement', name: 'UserManagement', element: UserManagement },
  // { path: '/analytics&Reporting', name: 'Analytics&Reporting', element: AnalyticsReporting },
  // { path: '/communication&Support', name: 'Communication&Support', element: CommunicationSupport },
  // { path: '/theme', name: 'Theme', element: Colors, exact: true },
  // { path: '/theme/colors', name: 'Colors', element: Colors },
  // { path: '/theme/typography', name: 'Typography', element: Typography },
  // { path: '/base', name: 'Base', element: Cards, exact: true },
  // { path: '/base/accordion', name: 'Accordion', element: Accordion },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', element: Cards },
  // { path: '/base/carousels', name: 'Carousel', element: Carousels },
  // { path: '/base/collapses', name: 'Collapse', element: Collapses },
  // { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  // { path: '/base/navs', name: 'Navs', element: Navs },
  // { path: '/base/paginations', name: 'Paginations', element: Paginations },
  // { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  // { path: '/base/popovers', name: 'Popovers', element: Popovers },
  // { path: '/base/progress', name: 'Progress', element: Progress },
  // { path: '/base/spinners', name: 'Spinners', element: Spinners },
  // { path: '/base/tables', name: 'Tables', element: Tables },
  // { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  // { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  // { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  // { path: '/charts', name: 'Charts', element: Charts },
  // { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  // { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  // { path: '/forms/select', name: 'Select', element: Select },
  // { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  // { path: '/forms/range', name: 'Range', element: Range },
  // { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  // { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  // { path: '/forms/layout', name: 'Layout', element: Layout },
  // { path: '/forms/validation', name: 'Validation', element: Validation },
  // { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', element: Flags },
  // { path: '/icons/brands', name: 'Brands', element: Brands },
  // { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  // { path: '/notifications/badges', name: 'Badges', element: Badges },
  // { path: '/notifications/modals', name: 'Modals', element: Modals },
  // { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  // { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
