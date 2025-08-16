import { Button } from '@mui/material';

export const OutlinedButton = ({
  onClick,
  children,
  disabled = false,
}: {
  onClick: () => void;
  children: React.ReactNode | string;
  disabled?: boolean;
}) => (
  <Button
    variant="outlined"
    onClick={onClick}
    className="text-white border-white/50 hover:border-white"
    disabled={disabled}
  >
    {children}
  </Button>
);

export const TextButton = ({
  onClick,
  children,
  disabled = false,
}: {
  onClick: () => void;
  children: React.ReactNode | string;
  disabled?: boolean;
}) => (
  <Button variant="text" onClick={onClick} className="text-white" disabled={disabled}>
    {children}
  </Button>
);
