import PropTypes from "prop-types";

const DashboardCard = ({ label, value, icon }) => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-[1.2rem] bg-white p-6">
      <div className="h-fit w-fit rounded-xl bg-slate-200 p-3 text-3xl">
        {icon}
      </div>
      <div>
        <p>{label}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
};

DashboardCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.element.isRequired,
};

export default DashboardCard;
