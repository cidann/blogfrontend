import Search from "./Search"
const PageHeader=({filter,setFilter})=>{
    return(
        <header className="masthead" style={{backgroundImage:"url('assets/img/home-bg.jpg')"}}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>DRF/React Blog</h1>
                            <span className="subheading">A Blog made with Django REST framework and React</span>
                            <Search filter={filter} setFilter={setFilter}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PageHeader