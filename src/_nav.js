import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { FaTachometerAlt, FaUser, FaFileAlt, FaDraftingCompass, FaFile, FaUsers, FaSave, FaCog } from 'react-icons/fa';

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   // badge: {
  //   //   color: 'info',
  //   //   text: 'NEW',
  //   // },
  // },
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/Dashboard',
  //   icon: <FaTachometerAlt className="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Details',
    to: '/Details',
    icon: <FaTachometerAlt className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Images',
    to: '/images',
    icon: <FaUser className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Social',
    to: '/social',
    icon: <FaFileAlt className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Design',
    to: '/design',
    icon: <FaFile className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Apps',
    to: '/test',
    icon: <FaUsers className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Setting',
    to: '/setting',
    icon: <FaCog className="nav-icon" />,
  },
  {
      component: CNavGroup,
      name: 'Template',
      icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      items: [
        {
          component: CNavItem,
          name: 'template1',
          to: '/template1',
        },
        {
          component: CNavItem,
          name: 'template2',
          to: '/template2',
        },
        {
          component: CNavItem,
          name: 'template3',
          to: '/template3',
        },
        {
          component: CNavItem,
          name: 'template4',
          to: '/template4',
        },
        {
          component: CNavItem,
          name: 'template5',
          to: '/template5',
        },
        {
          component: CNavItem,
          name: 'template6',
          to: '/template6',
        },
        {
          component: CNavItem,
          name: 'template7',
          to: '/template7',
        },
        {
          component: CNavItem,
          name: 'template8',
          to: '/template8',
        },
        {
          component: CNavItem,
          name: 'template9',
          to: '/template9',
        },
        {
          component: CNavItem,
          name: 'template10',
          to: '/template10',
        },
        {
          component: CNavItem,
          name: 'template11',
          to: '/template11',
        },
        {
          component: CNavItem,
          name: 'template12',
          to: '/template6',
        },
        {
          component: CNavItem,
          name: 'template13',
          to: '/template13',
        },
        {
          component: CNavItem,
          name: 'template14',
          to: '/template14',
        },
        {
          component: CNavItem,
          name: 'template15',
          to: '/template15',
        },
        {
          component: CNavItem,
          name: 'template16',
          to: '/template16',
        },
      ]
    },

  // {
  //   component: CNavItem,
  //   name: 'Template',
  //   to: '/drafts',
  //   icon: <FaDraftingCompass className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template1',
  //   to: '/template1',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template2',
  //   to: '/template2',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template3',
  //   to: '/template3',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template4',
  //   to: '/template4',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template5',
  //   to: '/template5',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template6',
  //   to: '/template6',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template7',
  //   to: '/template7',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template8',
  //   to: '/template8',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template9',
  //   to: '/template9',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template10',
  //   to: '/template10',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template11',
  //   to: '/template11',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // // {
  // //   component: CNavItem,
  // //   name: 'template12',
  // //   to: '/template12',
  // //   icon: <FaCog className="nav-icon" />,
  // // },
  // {
  //   component: CNavItem,
  //   name: 'template13',
  //   to: '/template13',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template14',
  //   to: '/template14',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template15',
  //   to: '/template15',
  //   icon: <FaCog className="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'template16',
  //   to: '/template16',
  //   icon: <FaCog className="nav-icon" />,
  // },

]

export default _nav
