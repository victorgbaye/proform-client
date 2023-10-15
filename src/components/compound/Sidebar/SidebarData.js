import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

export const SidebarData = [
    {
        title: 'My Forms',
        icon: <ReceiptLongOutlinedIcon/>,
        link: '/myforms'
    },
    {
        title: 'Analytics',
        icon: <TimelineOutlinedIcon/>,
        link: '/analytics'
    },
    {
        title: 'Knowledge Base',
        icon: <LocalLibraryOutlinedIcon/>,
        link: '/knowledgebase'
    },
    {
        title: 'Help & Support',
        icon: <ContactSupportOutlinedIcon/>,
        link: '/helpandsupport'
    },
    {
        title: 'My Profile',
        icon: <PersonOutlinedIcon/>,
        link: '/profile'
    },
    {
        title: 'Feedback & Feature Request',
        icon: <ThumbUpAltOutlinedIcon/>,
        link: '/feedbackandfeaturerequest'
    },
]