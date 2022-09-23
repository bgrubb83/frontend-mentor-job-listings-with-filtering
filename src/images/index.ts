// Company logos
import account from './account.svg'
import eyecam from './eyecam-co.svg'
import faceit from './faceit.svg'
import insure from './insure.svg'
import loop from './loop-studios.svg'
import manage from './manage.svg'
import myhome from './myhome.svg'
import photosnap from './photosnap.svg'
import shortly from './shortly.svg'
import airfilter from './the-air-filter-company.svg'

// Icons
import iconRemove from './icon-remove.svg';

// Headers
import headerDesktop from './bg-header-desktop.svg';
import headerMobile from './bg-header-mobile.svg';

const logos: Record<string, any> = {
    './images/account.svg': account,
    './images/eyecam-co.svg': eyecam,
    './images/faceit.svg': faceit,
    './images/insure.svg': insure,
    './images/loop-studios.svg': loop,
    './images/manage.svg': manage,
    './images/myhome.svg': myhome,
    './images/photosnap.svg': photosnap,
    './images/shortly.svg': shortly,
    './images/the-air-filter-company.svg': airfilter,
}

export default logos;

export const remove = iconRemove;

export const headerDesktopImage = headerDesktop;
export const headerMobileImage = headerMobile;