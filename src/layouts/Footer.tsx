export default function Footer() {
  return (
    <>
      <div className="text-[16px] container flex flex-col lg:flex-row gap-2 my-10 items-stretch">
        <ul className="flex flex-col gap-2 flex-1">
          <li>
            <div className="h-[52px] w-48 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-lg font-bold text-gray-600">LOGO</span>
            </div>
          </li>
          <h4 className="uppercase text-primary font-bold text-[18px]">
            CÔNG TY TNHH EXAMPLE
          </h4>
          <li className="text-[#383838]">
            Địa chỉ: 123 Đường ABC, Quận XYZ, Thành phố HCM
          </li>
          <li>Điện thoại: 123456789</li>
          <li>Zalo: 123456789</li>
          <li>Mail: info@example.com</li>
          <li>
            <div className="h-[56px] w-48 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-sm text-gray-600">Certificate</span>
            </div>
          </li>
        </ul>

        <ul className="flex flex-col gap-2 flex-1">
          <h4 className="text-primary font-bold text-[18px] mb-2">
            Social Media
          </h4>
          <div className="w-full h-[331px] bg-gray-200 rounded flex items-center justify-center">
            <p className="text-gray-500">Social Media Feed</p>
          </div>
        </ul>

        <ul className="flex flex-col gap-2 flex-1">
          <h4 className="text-primary font-bold text-[18px] mb-2">
            Location
          </h4>
          <div className="w-full h-[331px] bg-gray-200 rounded flex items-center justify-center">
            <p className="text-gray-500">Google Map</p>
          </div>
        </ul>
      </div>

      <div className="bg-secondary p-4 text-center">
        <h1 className="text-[14px] text-[#00000080]">
          Copyright 2024 © EXAMPLE COMPANY
        </h1>
      </div>
    </>
  );
}
