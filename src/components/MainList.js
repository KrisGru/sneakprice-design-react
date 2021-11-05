import SneakerItem from './SneakerItem';

const MainList = () => {

  return (
    <>
    <div className="bgMainList">
        <div className="mainList">
          <section className="mainList__top">
            <div className=" flex flex__spaceBetween">
              <h3><strong>Find the deal for sneakers</strong></h3>
              <p>Page 1 of 10</p>
            </div>
            <p>Our list of 10000+ sneakers and where to buy them</p>
          </section>

          <section className="mainList__middle">
            <div className="mainList__paddingContainer">
              <section className="mainList__contentHeader flex flex__spaceBetween">
                <p>Name</p>
                <p>Awg Price</p>
              </section>
              {/*list or table? List*/}
              <ul className="mainList__contentItem">
                <SneakerItem />
              </ul>

              </div>

            <nav aria-label="Page navigation">
              <ul class="mainList__pagination pagination">
                <li>
                  <a href="./" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li><a href="./">1</a></li>
                <li><a href="./">2</a></li>
                <li><a href="./">3</a></li>
                <li><a href="./">4</a></li>
                <li><a href="./">5</a></li>
                <li>
                  <a href="./" aria-label="Next" >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </>
  )
}

export default MainList;
