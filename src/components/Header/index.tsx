import HeaderImg from "../../assets/Cover.png";
import { HeaderPage } from "./styled";

export function Header() {
  return (
    <HeaderPage>
      <div>
        <img src={HeaderImg} alt="" />
      </div>
    </HeaderPage>
  );
}
