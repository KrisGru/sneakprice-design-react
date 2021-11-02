import CardsSneaker from './CardsSneaker';

const data=[{},{},{},{}]

const MainList = () => {

  return (
    <>
    <div className="bgMainList">
        <div className="mainList">
          <section className="mainList__top">
            <div className="flex">
              <h1>Find the deal for sneakers</h1>
              <p>Page 1 of 10</p>
            </div>
            <p>Our list of 10000+ sneakers and where to buy them</p>
          </section>

          <section className="mainList__content">

          <table class="mainList__table table">

            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Awg Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            {data.map(item => (
              <tr>
                <th scope="row">1</th>
                <td><CardsSneaker /></td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            ))}

            </tbody>
            </table>

            <div class="btn-group btn-group-toggle" data-toggle="buttons">
               <button className="btn btn-success">1</button>
               <button className="btn btn-success">2</button>
               <button className="btn btn-success">3</button>
               <button className="btn btn-success">4</button>
           </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default MainList;
