
import "./page-layout.css"



function PageLayout({ children, background }) {

 
  return (
    <>
    <div  style={{height: "72px"}}></div>

      <div className="page-layout-style" style={{ minHeight: "calc(100vh + 72px)", backgroundImage: `url(${background})`, backgroundSize: 'cover', }}>{children}
      </div>

    </>


  )
}
export default PageLayout;
