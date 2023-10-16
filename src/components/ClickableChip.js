import Chip from '@mui/material/Chip';

export default function ClickableChips({label, onClick, variant, color}) {
  return (
    <Chip label={label} onClick={onClick} variant={variant || "outlined"} color={color || "primary"}/>
  );
}