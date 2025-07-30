import cx from "classnames";

export default function InputError({ error }: { error?: any }) {
  return (
    <p className={cx("mt-1 ml-1 transition-all duration-300 text-[14px]", error ? " h-4 text-[#fc033d]" : " h-[0]")}>
      {error}
    </p>
  );
}
