import Link from "next/link";

export default function CardCharactersPage(props) {
  return (
    <div className="characterspage">
      <Link
        key={props.nameCard}
        href={`http://localhost:3000/characters/${props.idCharacter}`}
      >
        <a>
          <div className="col-3">
            <div className="card">
              <img
                className="card-img-top"
                style={{ height: "12rem" }}
                src={`${props.imgCard}.jpg`}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{props.nameCard}</h5>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
