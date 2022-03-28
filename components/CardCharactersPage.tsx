export default function CardCharactersPage(props) {

  return  <div key={props.nameCard} className="col-3">
            <div className="card">
              <img className="card-img-top" style={{height: "10rem"}} src={`${props.imgCard}.jpg`} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{props.nameCard}</h5>
              </div>
            </div>
          </div>
}
