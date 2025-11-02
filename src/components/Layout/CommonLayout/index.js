import Footer from "./Footer";
import Menu from "./Menu";
const CommonLayout = ({ children, props }) => {
  
  return (
   
    <>
    
      { props?.menu?.data?.header && 
            <Menu props={props?.menu?.data?.header} />
      }
      {children}
      {props?.menu?.data?.footer && 
            <Footer props={props?.menu?.data?.footer}  footer_bgcolour={props?.data?.widgets?.[0]?.data?.footer_color}/>
      }
    </>
  );
};

export default CommonLayout;
