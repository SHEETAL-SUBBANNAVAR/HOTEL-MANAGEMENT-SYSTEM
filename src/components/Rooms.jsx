function Rooms() {

  const floors = [
    { name: "Ground Floor", start: 0, end: 10, className: "ground" },
    { name: "1st Floor", start: 101, end: 150, className: "first" },
    { name: "2nd Floor", start: 201, end: 250, className: "second" },
    { name: "3rd Floor", start: 301, end: 350, className: "third" }
  ];

  return (
    <div className="rooms-container">

      {floors.map((floor, index) => (
        <div key={index} className={`floor ${floor.className}`}>

          <h2>{floor.name}</h2>

          <div className="room-grid">

            {Array.from(
              { length: floor.end - floor.start + 1 },
              (_, i) => (
                <div key={i} className="room-card">
                  Room {floor.start + i}
                </div>
              )
            )}

          </div>
        </div>
      ))}

    </div>
  );
}

export default Rooms;
