import Image from "next/image";
import * as S from "./styles";

export default function Cart() {
  return (
    <S.Cart__btn_wrapper>
      <Image src={"/images/cart.svg"} width={12} height={12} alt="cart icon" />
      <span>0</span>
    </S.Cart__btn_wrapper>
  );
}
