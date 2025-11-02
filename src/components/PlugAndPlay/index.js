import Image from "next/image";
import Style from "./PlugAndPlay.module.scss";
import { useWindowSize } from "../../logic/useDimension";


const PlugAndPlay = ({ props }) => {
    const parse = require("html-react-parser");
    const { width } = useWindowSize();

    return (
        <section className={Style.plugandplay}>
            <div className="container">

                <div className={`${Style.top_head} text-white text-md-center`}>
                        <h2 className={`h2  ${Style.title}`}>{parse(props?.data.title)}</h2>
                        <p className={Style.subtitle}>{props?.data.text}</p>
                </div>
                

                {width >= 1200 && (
                    <div className={Style.plugandplay_body}>
                        <div className={Style.plugandplay_body_png}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={1201.742}
                                height={449.45}
                            
                            >
                                <defs>
                                    <clipPath id="svg-clip">
                                        <path
                                            data-name="Union 84"
                                            d="M-20453 18407.074v-1.318h157.939v-185.047h111.422v1.314h-110.1v185.051Zm544.666 0v-185.047h-110.109v-1.318h111.424v185.045h157.938v1.32Zm-110.176-210.029v-1.318h269.248v1.318Zm-434.3 0v-1.314h269.438v1.314Zm434.371-23.678v-1.32h110.1V17987h159.258v1.314h-157.943v185.051Zm-276.613 0v-185.047H-20453v-1.32h159.252v185.045h110.1v1.314Z"
                                            transform="translate(21067.305 -12931.76)"
                                            fill="#363636"
                                        /> 
                                    </clipPath>
                                </defs>
                                <g data-name="shapes">
                                    <g
                                        data-name="Mask Group 143793"
                                        transform="translate(-361.184 -5037.484)"
                                        clipPath="url(#svg-clip)"
                                    >
                                        <circle
                                            data-name="Ellipse 79026"
                                            cx={489}
                                            cy={489}
                                            r={489}
                                            transform="translate(472 4776)"
                                            fill="#fff"
                                        />
                                    </g>
                                    <text
                                        data-name={props?.data?.bodyswaps1}
                                        transform="translate(230.098 26)"
                                        fill="#fff"
                                        fontSize={24}
                                        fontFamily="SegoeUI, Segoe UI"
                                    >
                                        <tspan x={-215.203} y={0}>
                                            {`${props?.data?.bodyswaps1}`}
                                        </tspan>
                                    </text>
                                    <text
                                        data-name={props?.data?.bodyswaps4}
                                        transform="translate(978.742 26)"
                                        fill="#fff"
                                        fontSize={24}
                                        fontFamily="SegoeUI, Segoe UI"
                                    >
                                        <tspan x={0} y={0}>
                                            {`${props?.data?.bodyswaps4}`}
                                        </tspan>
                                    </text>
                                    <text
                                        data-name={props?.data?.bodyswaps2}
                                        transform="translate(229 234.723)"
                                        fill="#fff"
                                        fontSize={24}
                                        fontFamily="SegoeUI, Segoe UI"
                                    >
                                        <tspan x={-228.48} y={0}>
                                            {`${props?.data?.bodyswaps2}`}
                                        </tspan>
                                    </text>
                                    <text
                                        data-name={props?.data?.bodyswaps3}
                                        transform="translate(978.742 234.723)"
                                        fill="#fff"
                                        fontSize={24}
                                        fontFamily="SegoeUI, Segoe UI"
                                    >
                                        <tspan x={0} y={0}>
                                        {`${props?.data?.bodyswaps3}`}
                                        </tspan>
                                    </text>
                                    <text
                                        data-name={props?.data?.bodyswaps6}
                                        transform="translate(231.414 443.45)"
                                        fill="#fff"
                                        fontSize={24}
                                        fontFamily="SegoeUI, Segoe UI"
                                    >
                                        <tspan x={-211.84} y={0}>
                                        {`${props?.data?.bodyswaps6}`}
                                        </tspan>
                                    </text>
                                    <text
                                        data-name={props?.data?.bodyswaps5}
                                        transform="translate(978.742 443.45)"
                                        fill="#fff"
                                        fontSize={24}
                                        fontFamily="SegoeUI, Segoe UI"
                                    >
                                        <tspan x={0} y={0}>
                                        {`${props?.data?.bodyswaps5}`}
                                        </tspan>
                                    </text>
                                </g>
                            </svg>

                        </div>

                        <div className={`${Style.gradient_mask}`}>
                            <span></span>
                        </div>
                        <div className={`${Style.gradient_mask} ${Style.gradient_mask1}`}>
                            <span></span>
                        </div>
                        
                        <div className={Style.body_swap}>
                            <figure>
                                <Image src={props?.data?.swap_image?.url} fill alt="image" sizes="(max-width: 768px) 100vw"></Image>
                            </figure>
                        </div>
                    </div>
                )}

                    {width < 1200 && (
                        <>
                                <div className={Style.plugandplayMobile}>

                                    <div className={Style.contentWraper}>
                                        <div className={Style.body_swap}>
                                                <Image src={props?.data?.swap_image?.url} fill alt="image" sizes="(max-width: 768px) 100vw"></Image>
                                        </div>

                                        <ul className={`text-white ${Style.listWraper}`}>
                                            <li>{props?.data?.bodyswaps1}</li>
                                            <li>{props?.data?.bodyswaps2}</li>
                                            <li>{props?.data?.bodyswaps3}</li>
                                            <li>{props?.data?.bodyswaps4}</li>
                                            <li>{props?.data?.bodyswaps5}</li>
                                            <li>{props?.data?.bodyswaps6}</li>
                                        </ul>
                                    </div>

                                </div>
                        </>
                    )}
                
            </div>
        </section>
    );
};
export default PlugAndPlay;