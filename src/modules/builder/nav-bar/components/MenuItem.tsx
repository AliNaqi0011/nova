import { Fragment, useState } from 'react';
import { Button } from '@mui/material';

import { INavMenuItemProps } from './MenuItem.interface';
import Image from 'next/image';
import { NavMenuPopover } from './NavMenuPopover';

export const NavMenuItem = ({ caption, popoverChildren }: INavMenuItemProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        variant="text"
        size="small"
        onClick={handleClick}
        aria-describedby={'mark'}
        sx={{ fontSize: { xs: '10px', lg: '13px' } }}
        endIcon={
          <Image
            src={'/icons/dropdown-arrow.svg'}
            alt="dropdown-arrow"
            width="20"
            height="20"
            className={`${anchorEl ? 'scale-y-[-1]' : ''}`}
          />
        }
      >
        {caption}
      </Button>
      <NavMenuPopover isOpen={!!anchorEl} anchorElement={anchorEl} id="mark" onClose={handleClose}>
        {popoverChildren}
      </NavMenuPopover>
    </Fragment>
  );
};
