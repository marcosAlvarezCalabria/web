
import "./page-layout.css"



function PageLayout({ children, background , className}) {

 
  return (
    <>
   

      <div className={className} style={{opacity: "0.9", minHeight: "calc(100vh + 72px)", backgroundImage: `url(${background})`, backgroundSize: 'cover', }}>{children}
      </div>

    </>


  )
}
export default PageLayout;
