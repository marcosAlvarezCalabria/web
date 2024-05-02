
import "./page-layout.css"



function PageLayout({ children, background }) {

 
  return (
    <>

      <div className=".page-layout-style" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', }}>{children}
      </div>

    </>


  )
}
export default PageLayout;

