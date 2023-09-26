import { ClipboardIcon, HamburgerIcon } from "@/assets/icons";
import { HomeOutlined } from "@ant-design/icons";

const SideNavigation = () => {
  return (
    <div
      id="side-navigation"
      className="bg-white flex flex-col items-center justify-between py-12 shadow-[0_4px_23px_0_rgba(0,0,0,.05)]"
    >
      <div className="flex flex-col gap-20">
        <HamburgerIcon />
        <div className="flex flex-col gap-11">
          <HomeOutlined style={{ fontSize: 26 }} />
          <ClipboardIcon />
        </div>
      </div>
      <div className="bg-[#1D4ED8] h-12 w-12 flex rounded-full">
        <span className="m-auto font-bold text-white text-base">NT</span>
      </div>
    </div>
  );
};

export default SideNavigation;
