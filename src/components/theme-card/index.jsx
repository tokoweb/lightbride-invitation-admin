import Image from "next/image";
import Link from "next/link";

import Button from "@mui/material/Button";

import PropTypes from "prop-types";

const ThemeCard = ({ theme }) => {
  const { active, name, preview, demo, id } = theme;

  return (
    <div className="themeCard flex w-72 min-w-fit flex-col items-center gap-3 rounded border bg-white p-6 drop-shadow-md transition">
      <Image src={preview} alt={`Tema ${name}`} width={250} height={250} />
      <p>{name}</p>
      <div className="flex gap-2">
        {active ? (
          <Button variant="contained" color="error">
            Nonaktifkan
          </Button>
        ) : (
          <Button variant="contained" color="success">
            Aktifkan
          </Button>
        )}
        <Link href={demo}>
          <Button
            variant="contained"
            className="bg-primary capitalize hover:bg-primary-dark"
          >
            Demo
          </Button>
        </Link>
        <Button variant="contained" color="error">
          Hapus
        </Button>
      </div>
    </div>
  );
};

ThemeCard.propTypes = {
  theme: PropTypes.shape({
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThemeCard;
