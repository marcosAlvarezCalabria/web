import "./page-layout.css"

function PageLayout({children}){
    return(
        <div className="main container my-4">{children}</div>
    )
}
export default PageLayout