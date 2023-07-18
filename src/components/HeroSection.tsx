import "./styles.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

interface IProps {
  paragraph: JSX.Element;
  cta: string;
  imgSrc: string;
}

export function HeroSection({ cta, paragraph, imgSrc }: IProps) {
  return (
    <>
      <div className="mobile  lg:hidden">
        <div className="h-20"></div>
        <div className=" overflow-hidden">
          <img src={imgSrc} alt="family" className="contain" />
          <div className="paragraph px-10 lg:pl-32  backdrop-blur-sm py-4 my-auto ">
            {paragraph}
            <div>
              <Link to={"/contact"}>
                <Button className="cta text-white bg-secondary">{cta}</Button>
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className=" large-screens-only hidden lg:block">
        <div
          className="bg-cover bg-no-repeat min-h-[890px] flex"
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <div className="paragraph px-10 lg:pl-32 lg md:max-w-[560px] items-center backdrop-blur-sm py-4 my-auto hero-banner-headingText-container">
            {paragraph}
            <div>
              <Link to={"/contact"}>
                <Button className=" cta text-white bg-secondary hover:underline">
                  {cta}
                </Button>
              </Link>
            </div>
          </div>
          {/* <div className='hero-banner-img'></div>  */}
        </div>
      </div>
    </>
  );
}

/* function BlobBackground() {
  return (
    <>
      <div className="blob  absolute left-1/2 top-1/2 [translate:-50%-60%] opacity-30 h-full aspect-square rounded-full bg-gradient-to-r from-yellow to-primary animate-rotate "></div>
    </>
  );
} */
