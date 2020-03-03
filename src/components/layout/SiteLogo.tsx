import Link from 'next/link';
import { FunctionComponent } from 'react';

interface iSiteLogo {
    linkTo: string;
}

const SiteLogo:FunctionComponent<iSiteLogo> = ({ linkTo, children }) => (
    <Link href={linkTo}><a>{children}</a></Link>
)
export { SiteLogo };