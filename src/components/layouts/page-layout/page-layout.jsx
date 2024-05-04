
import "./page-layout.css"



function PageLayout({ children, background }) {

 
  return (
    <>
    <div style={{height: "70px"}}></div>

      <div className="page-layout-style" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', }}>{children}
      </div>

    </>


  )
}
export default PageLayout;

