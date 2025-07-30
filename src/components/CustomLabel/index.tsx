const Label = ({
  required,
  label,
  className = "",
}: {
  required?: boolean;
  infoText?: string;
  label: string;
  hasInfoIcon?: boolean;
  className?: string;
}) => {
  return (
    <div className="mb-2 flex items-center gap-1 font-semibold">
      <span className={`font-semibold text-[#222222] ${className} text-[14px]`}>
        {label}
      </span>
      {required && <span className="text-[#FF5C00]">*</span>}
    </div>
  );
};

export default Label;
