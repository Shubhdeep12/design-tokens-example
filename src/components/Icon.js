import React from 'react'
import DevTo from '../utils/Icons/DevTo';

import Github from '../utils/Icons/Github';
import Hashnode from '../utils/Icons/Hashnode';
import Linkedin from '../utils/Icons/Linkedin';
import ThemeIcon from '../utils/Icons/ThemeIcon';
import Twitter from '../utils/Icons/Twitter';

const Icon = ({ name, color, ...props }) => {
    const icons = {
        'github': Github,
        'linkedin': Linkedin,
        'twitter': Twitter,
        'devTo': DevTo,
        'hashnode': Hashnode,
        'themeIcon': ThemeIcon,
    }

    const IconName = icons[name];
    return (
        <IconName style={{cursor:"pointer"}} color={color} {...props} />
  )
}

export default Icon;