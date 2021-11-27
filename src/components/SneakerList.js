import SneakerItem from './SneakerItem';

const SneakerList = () => (
  <div className="bgMainList">
  <span class="half-a-border-on-top"></span>
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
          <ul className="mainList__contentItem">
            <SneakerItem position="01" img="img1" specificName="Cloud White" name="Ultraboost 21" brand="Adidas" stock="3" price="150" />
            <SneakerItem position="02" img="img2" specificName="Retro High" name="Air Jordan 1" brand="Nike" stock="1" price="100"/>
            <SneakerItem position="03" img="img1" specificName="Cloud White" name="Ultraboost 21" brand="Adidas" stock="3" price="150"/>
            <SneakerItem position="04" img="img2" specificName="Retro High" name="Air Jordan 1" brand="Nike" stock="1" price="120"/>
            <SneakerItem position="05" img="img1" specificName="Cloud White" name="Ultraboost 21" brand="Adidas" stock="3" price="145"/>
            <SneakerItem position="06" img="img2" specificName="Retro High" name="Air Jordan 1" brand="Nike" stock="2" price="140"/>
          </ul>
        </div>
        <nav aria-label="Page navigation">
          <ul class="pagination">
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
)

export default SneakerList;
